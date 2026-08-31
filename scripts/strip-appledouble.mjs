import { readdir, rm } from 'node:fs/promises';
import { resolve } from 'node:path';

const requested = process.argv[2];
if (!requested) throw new Error('Expected an explicit generated directory.');

const root = resolve(process.cwd(), requested);
const allowed = resolve(process.cwd(), 'dist');
if (root !== allowed) throw new Error(`Refusing to clean outside ${allowed}`);

let removed = 0;

async function strip(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    const path = resolve(directory, entry.name);
    if (entry.name.startsWith('._')) {
      await rm(path, { recursive: entry.isDirectory(), force: false });
      removed += 1;
    } else if (entry.isDirectory()) {
      await strip(path);
    }
  }
}

await strip(root);
console.log(`Removed ${removed} AppleDouble build artifacts from dist.`);
