// Copyright (c) 2021 Alejandro Elí. All rights reserved.
// This file is subject to the terms and conditions defined in
// the LICENSE file, which is part of this source code package.

import fs from 'fs'
import path from 'path'

import { rules } from './rules.mjs'

const fsOptions = { encoding: 'utf-8' }


export function compile({ srcDir, srcExt, outDir, outExt, userRules }) {
  fs.readdirSync(srcDir).filter(it => it.endsWith(srcExt)).forEach(srcName => {
    const outName = srcName.replace(srcExt, outExt)
    const outPath = path.join(outDir, outName)
    const srcPath = path.join(srcDir, srcName)
    const raw = {
      ...parsePalette(srcPath),
      rules: [
        ...getRules(rules),
        ...getRules(userRules)
      ],
    }
    const res = JSON.stringify(raw, null, 2)
    fs.writeFileSync(outPath, res, fsOptions)
    // console.log(`${res.length}  ${srcName}`)
  })
}

function parsePalette(file) {
  const res = { variables: {}, globals: {} }
  const raw = fs.readFileSync(file, fsOptions)
  for (let line of raw.split(/\r?\n/)) {
    if (line.startsWith('$')) {
      const [key, value] = getKeyValue(line)
      res.variables[key] = value
    }
    else if (line.startsWith('%')) {
      const [key, value] = getKeyValue(line)
      res.globals[key] = value
    }
  }
  return res
}

function getRules(rules) {
  return rules.map(it => (
    Object.assign({}, it, { scope: it.scope.join(',') })
  ))
}

function getKeyValue(line) {
  return line.slice(1).split(/\s*=\s*/, 2)
}
