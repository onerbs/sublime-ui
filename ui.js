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

function get_key_value(item) {
  return item.slice(1).split(/\s*=\s*/)
}

function get_file_content(file) {
  const filePath = path.join(sourceDir, file)
  const raw = fs.readFileSync(filePath, fsOptions)
  const content = {
    variables: {},
    globals: {},
  }
  for (line of raw.split(/\r?\n/)) {
    if (line.startsWith('$')) {
      const [key, value] = get_key_value(line)
      content.variables[key] = value
    }
    if (line.startsWith('%')) {
      const [key, value] = get_key_value(line)
      content.globals[key] = value
    }
  }
  return content
}

function output_name(name) {
  return name.replace(sourceExt, outputExt)
}

function get_source_files() {
  const files = fs.readdirSync(sourceDir)
  return files.filter(file => file.endsWith(sourceExt))
}

get_source_files().forEach(it => {
  const content = { ...get_file_content(it), ...rules }
  const result = JSON.stringify(content)
  const filePath = path.join(outputDir, output_name(it))
  fs.writeFileSync(filePath, result, fsOptions)
})
