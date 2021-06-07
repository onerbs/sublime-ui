import { compile } from './lib/ui.mjs'
import { rules } from './rules.mjs'

compile({
  outDir: 'Schemes',
  outExt: '.sublime-color-scheme',
  srcDir: 'Palettes',
  srcExt: '.palette',
  userRules: rules,
})
