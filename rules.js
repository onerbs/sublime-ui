// Copyright (c) 2021 Alejandro Elí. All rights reserved.
// This file is subject to the terms and conditions defined in
// the LICENSE file, which is part of this source code package.

const rules = [
  {
    foreground: 'var(gray)',
    scope: [
      'comment',
      'meta.diff.header',
      'meta.diff.range',
      'punctuation',
    ]
  }, {
    foreground: 'var(cyan)',
    scope: [
      'comment.tag.todo',
      'entity.name.function',
      'storage.modifier',
      'support.function.magic',
    ]
  }, {
    foreground: 'var(blue)',
    scope: [
      'comment.tag.url',
      'markup.underline.link',
      'punctuation.definition.variable.shell',
      'variable.other',
    ]
  }, {
    foreground: 'var(green)',
    scope: [
      'punctuation.definition.string',
      'string',
    ]
  }, {
    foreground: 'var(orange)',
    scope: [
      'comment.tag.question',
      'keyword.operator',
      'storage',
      'variable.language',
    ]
  }, {
    foreground: 'var(purple)',
    scope: [
      'constant',
      'entity.name.namespace',
      'markup.quote',
      'punctuation.definition.numeric',
      'storage.type.number',
      'support.constant',
      'variable.other.constant',
    ]
  }, {
    foreground: 'var(red)',
    scope: [
      'comment.tag.fixme',
      'keyword',
      'section',
      'support',
    ]
  }, {
    foreground: 'var(pink)',
    scope: [
      'comment.tag.other',
      'entity',
      'keyword.control.flow.compile-time',
      'variable.function.compile-time',
    ]
  }, {
    foreground: 'var(yellow)',
    scope: [
      'comment.tag.usage',
      'keyword.language.instance',
      'punctuation.definition.parameter',
      'variable.function',
      'variable.parameter',
      'markup.raw',
    ]
  }, {
    font_style: 'italic',
    scope: [
      'markup.italic.markdown'
    ]
  }, {
    font_style: 'bold',
    scope: [
      'markup.bold.markdown',
      'markup.heading',
    ]
  }, {
    font_style: 'bold italic',
    scope: [
      'markup.bold.markdown markup.italic.markdown',
      'markup.italic.markdown markup.bold.markdown',
    ]
  }
  /* OTHER */, {
    background: 'crimson',
    foreground: 'var(white)',
    scope: [
      'invalid',
    ]
  }, {
    foreground: 'crimson',
    scope: [
      'source.v',
    ]
  }
]

module.exports = {
  rules: rules.map(it => {
    const { scope } = it
    it.scope = scope.join(',')
    return it
  })
}
