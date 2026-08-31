const CACHE_VERSION = 'flow-shell-2026-08-v1';
const APP_ROOT = new URL('./', self.registration.scope).href;
const localAsset = (path) => new URL(path, self.registration.scope).href;
const CORE_ASSETS = [
  APP_ROOT,
  localAsset('manifest.webmanifest'),
  localAsset('assets/flow-hero.png'),
  localAsset('assets/icons/icon-192.png'),
  localAsset('assets/icons/icon-512.png'),
  localAsset('assets/scholars/scholar-sheet.png'),
];

async function cachePageAndDependencies(cache) {
  const response = await fetch(APP_ROOT);
  if (!response.ok) throw new Error('Unable to pre-cache Flow shell');
  await cache.put(APP_ROOT, response.clone());
  const html = await response.text();
  const discovered = new Set(CORE_ASSETS.slice(1));
  const pattern = /(?:src|href)=["']([^"']+)["']/g;
  let match;
  while ((match = pattern.exec(html))) {
    const path = match[1];
    if (!path.startsWith('http:') && !path.startsWith('https:') && !path.startsWith('//')) {
      discovered.add(new URL(path, APP_ROOT).href);
    }
  }
  await Promise.allSettled(
    [...discovered].map(async (path) => {
      const asset = await fetch(path);
      if (asset.ok) await cache.put(path, asset);
    }),
  );
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(cachePageAndDependencies).then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_VERSION).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          void caches.open(CACHE_VERSION).then((cache) => cache.put(APP_ROOT, copy));
          return response;
        })
        .catch(async () => (await caches.match(request)) || (await caches.match(APP_ROOT))),
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        if (response.ok) {
          const copy = response.clone();
          void caches.open(CACHE_VERSION).then((cache) => cache.put(request, copy));
        }
        return response;
      });
    }),
  );
});
