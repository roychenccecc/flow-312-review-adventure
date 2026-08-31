import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { runInNewContext } from 'node:vm';

const readJson = async (path: string) => JSON.parse(await readFile(path, 'utf8'));

test('PWA manifest is installable and uses base-path-safe URLs', async () => {
  const manifest = await readJson('public/manifest.webmanifest');
  assert.equal(manifest.display, 'standalone');
  assert.equal(manifest.start_url, './');
  assert.equal(manifest.scope, './');
  assert.equal(manifest.lang, 'zh-CN');
  assert.deepEqual(
    manifest.icons.map((icon: { src: string }) => icon.src),
    ['./assets/icons/icon-192.png', './assets/icons/icon-512.png'],
  );
});

test('service worker precaches the shell and provides a navigation fallback', async () => {
  const worker = await readFile('public/sw.js', 'utf8');
  assert.match(worker, /cachePageAndDependencies/);
  assert.match(worker, /request\.mode === 'navigate'/);
  assert.match(worker, /caches\.match\(APP_ROOT\)/);
  assert.match(worker, /assets\/scholars\/scholar-sheet\.png/);
});

test('GitHub Pages workflow verifies and publishes the exact dist directory', async () => {
  const workflow = await readFile('.github/workflows/deploy-pages.yml', 'utf8');
  assert.match(workflow, /npm run typecheck/);
  assert.match(workflow, /npm run lint/);
  assert.match(workflow, /npm test/);
  assert.match(workflow, /npm run build/);
  assert.match(workflow, /path: dist/);
});

test('scholar sprite resolves from the configured Vite base path', async () => {
  const portrait = await readFile('src/components/scholar-portrait.tsx', 'utf8');
  assert.match(portrait, /import\.meta\.env\.BASE_URL/);
  assert.doesNotMatch(portrait, /url\(['"]\.\/assets\/scholars/);
});

test('service worker serves the cached app shell after the network disappears', async () => {
  const worker = await readFile('public/sw.js', 'utf8');
  const scope = 'https://flow.example/flow-312/';
  const html = '<!doctype html><script src="./assets/app.js"></script><link href="./assets/app.css" rel="stylesheet">';
  const listeners = new Map<string, (event: any) => void>();
  const stores = new Map<string, Map<string, Response>>();
  let online = true;

  const keyFor = (request: string | { url: string }) =>
    typeof request === 'string' ? request : request.url;

  const cacheStorage = {
    async open(name: string) {
      if (!stores.has(name)) stores.set(name, new Map());
      const store = stores.get(name)!;
      return {
        async put(request: string | { url: string }, response: Response) {
          store.set(keyFor(request), response.clone());
        },
      };
    },
    async keys() {
      return [...stores.keys()];
    },
    async delete(name: string) {
      return stores.delete(name);
    },
    async match(request: string | { url: string }) {
      const key = keyFor(request);
      for (const store of stores.values()) {
        const response = store.get(key);
        if (response) return response.clone();
      }
      return undefined;
    },
  };

  const fetchMock = async (request: string | { url: string }) => {
    if (!online) throw new Error('offline');
    const url = keyFor(request);
    return new Response(url === scope ? html : 'asset', {
      status: 200,
      headers: { 'content-type': url === scope ? 'text/html' : 'application/octet-stream' },
    });
  };

  runInNewContext(worker, {
    URL,
    Set,
    Promise,
    Error,
    caches: cacheStorage,
    fetch: fetchMock,
    self: {
      registration: { scope },
      location: { origin: 'https://flow.example' },
      clients: { claim: async () => undefined },
      skipWaiting: async () => undefined,
      addEventListener(type: string, listener: (event: any) => void) {
        listeners.set(type, listener);
      },
    },
  });

  let install: Promise<unknown> | undefined;
  listeners.get('install')!({ waitUntil: (promise: Promise<unknown>) => (install = promise) });
  await install;

  const cachedUrls = [...stores.values()].flatMap((store) => [...store.keys()]);
  assert.ok(cachedUrls.includes(scope));
  assert.ok(cachedUrls.includes(`${scope}assets/app.js`));
  assert.ok(cachedUrls.includes(`${scope}assets/scholars/scholar-sheet.png`));

  online = false;
  let offlineNavigation: Promise<Response> | undefined;
  listeners.get('fetch')!({
    request: { method: 'GET', mode: 'navigate', url: `${scope}case/one` },
    respondWith: (promise: Promise<Response>) => (offlineNavigation = promise),
  });

  const response = await offlineNavigation;
  assert.equal(await response!.text(), html);
});
