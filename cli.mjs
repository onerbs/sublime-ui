import * as ui from './lib/compiler.mjs'

function main(rules = []) {
  const src = { dir: 'Palettes', ext: '.palette' };
  const out = { dir: 'Schemes',  ext: '.sublime-color-scheme' };
  ui.compile(src, out, rules);
}

import('./rules')
  .then(mod => main(mod.default))
  .catch(() => main());
