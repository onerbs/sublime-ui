// Copyright (c) 2021 Alejandro Elí. All rights reserved.
// This file is subject to the terms and conditions defined in
// the LICENSE file, which is part of this source code package.

export const rules = [
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
      'markup.raw',
      'punctuation.definition.parameter',
      'variable.function',
      'variable.parameter',
    ]
  }, {
    background: 'var(red)',
    foreground: 'var(black)',
    scope: [
      'comment.tag.fixme',
    ]
  }, {
    background: 'var(yellow)',
    foreground: 'var(black)',
    scope: [
      'comment.tag.todo',
    ]
  }, {
    font_style: 'italic',
    scope: [
      'markup.italic',
    ]
  }, {
    font_style: 'bold',
    scope: [
      'markup.bold',
      'markup.heading',
    ]
  }, {
    font_style: 'bold italic',
    scope: [
      'markup.bold markup.italic',
      'markup.italic markup.bold',
    ]
  }, {
    background: 'crimson',
    foreground: 'var(white)',
    scope: [
      'invalid',
    ]
  }
].map(it => Object.assign({}, it, { scope: it.scope.join(',') }))
