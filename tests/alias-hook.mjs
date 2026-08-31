import { existsSync } from 'node:fs';
import { registerHooks } from 'node:module';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');

registerHooks({
  resolve(specifier, context, nextResolve) {
    const isAlias = specifier.startsWith('@/');
    const isRelative = (specifier.startsWith('./') || specifier.startsWith('../')) && context.parentURL?.startsWith('file:');
    if (!isAlias && !isRelative) return nextResolve(specifier, context);
    const requested = isAlias
      ? resolve(projectRoot, specifier.slice(2))
      : resolve(dirname(fileURLToPath(context.parentURL)), specifier);
    const candidates = [requested, `${requested}.ts`, `${requested}.tsx`, resolve(requested, 'index.ts')];
    const target = candidates.find((candidate) => existsSync(candidate));
    if (!target) return nextResolve(specifier, context);
    return { url: pathToFileURL(target).href, shortCircuit: true };
  },
});
