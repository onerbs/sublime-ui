// Copyright (c) 2021 Alejandro Elí. All rights reserved.
// This file is subject to the terms and conditions defined in
// the LICENSE file, which is part of this source code package.

const fs = require('fs')
const path = require('path')
const rules = require('./rules')

const sourceDir = 'Palettes'
const sourceExt = '.palette'

const outputDir = 'Schemes'
const outputExt = '.sublime-color-scheme'

const fsOptions = { encoding: 'utf-8' }

function getKeyValue(item) {
  return item.slice(1).split(/\s*=\s*/)
}

function getFileContent(file) {
  const filePath = path.join(sourceDir, file)
  const raw = fs.readFileSync(filePath, fsOptions)
  const content = {
    variables: {},
    globals: {},
  }
  for (line of raw.split(/\r?\n/)) {
    if (line.startsWith('$')) {
      const [key, value] = getKeyValue(line)
      content.variables[key] = value
    }
    if (line.startsWith('%')) {
      const [key, value] = getKeyValue(line)
      content.globals[key] = value
    }
  }
  return content
}

function getOutputName(name) {
  return name.replace(sourceExt, outputExt)
}

function getSourceFiles() {
  const files = fs.readdirSync(sourceDir)
  return files.filter(file => file.endsWith(sourceExt))
}

getSourceFiles().forEach(it => {
  const data = JSON.stringify({ ...getFileContent(it), ...rules })
  const filePath = path.join(outputDir, getOutputName(it))
  fs.writeFileSync(filePath, data, fsOptions)
})
