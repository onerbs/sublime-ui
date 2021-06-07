// Copyright (c) 2021 Alejandro Elí. All rights reserved.
// This file is subject to the terms and conditions defined in
// the LICENSE file, which is part of this source code package.

import fs from 'fs'
import path from 'path'

import { rules } from './rules.mjs'


export function compile({ srcDir, srcExt, outDir, outExt, userRules }) {
  const fsOptions = { encoding: 'utf-8' }

  function getSourceFiles() {
    const files = fs.readdirSync(srcDir)
    return files.filter(it => it.endsWith(srcExt))
  }

  function parsePalette(path) {
    const raw = fs.readFileSync(path, fsOptions)
    const result = {
      variables: {},
      globals: {},
    }
    for (let line of raw.split(/\r?\n/)) {
      if (line.startsWith('$')) {
        const [key, value] = getKeyValue(line)
        result.variables[key] = value
      }
      if (line.startsWith('%')) {
        const [key, value] = getKeyValue(line)
        result.globals[key] = value
      }
    }
    return result
  }

  function getKeyValue(line) {
    return line.slice(1).split(/\s*=\s*/)
  }

  function getOutName(name) {
    return name.replace(srcExt, outExt)
  }

  getSourceFiles().forEach(it => {
    // const it = getSourceFiles()[0]
    const srcPath = path.join(srcDir, it)
    const data = JSON.stringify({
      ...parsePalette(srcPath),
      rules: [...rules, ...userRules],
    })
    const outPath = path.join(outDir, getOutName(it))
    fs.writeFileSync(outPath, data, fsOptions)
    console.log(`${data.length}  ${it}`)
  })
}
