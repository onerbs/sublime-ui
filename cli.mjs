import { compile } from './lib/ui.mjs'
import { existsSync } from 'fs'

function main(rules = []) {
  compile({
    outDir: 'Schemes',
    outExt: '.sublime-color-scheme',
    srcDir: 'Palettes',
    srcExt: '.palette',
    userRules: rules,
  })
}

if (existsSync('./rules.mjs'))
  import('./rules.mjs')
    .then(mod => main(mod.rules))

else
  main()
