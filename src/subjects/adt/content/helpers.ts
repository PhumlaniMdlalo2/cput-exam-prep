import type { ContentBlock } from './types'

export const p = (text: string): ContentBlock => ({ type: 'paragraph', text })

export const h = (
  level: 2 | 3 | 4,
  text: string,
  id: string,
): ContentBlock => ({ type: 'heading', level, text, id })

export const ul = (items: string[]): ContentBlock => ({ type: 'list', items })

export const ol = (items: string[]): ContentBlock => ({
  type: 'list',
  ordered: true,
  items,
})

export const def = (term: string, definition: string): ContentBlock => ({
  type: 'definition',
  term,
  definition,
})

export const code = (
  codeText: string,
  language = 'sql',
  caption?: string,
): ContentBlock => ({ type: 'code', language, code: codeText, caption })

export const table = (
  headers: string[],
  rows: string[][],
  caption?: string,
): ContentBlock => ({ type: 'table', headers, rows, caption })

export const img = (
  src: string,
  alt: string,
  caption?: string,
): ContentBlock => ({ type: 'image', src, alt, caption })

export const note = (title: string, text: string): ContentBlock => ({
  type: 'callout',
  variant: 'note',
  title,
  text,
})

export const important = (title: string, text: string): ContentBlock => ({
  type: 'callout',
  variant: 'important',
  title,
  text,
})

export const tip = (title: string, text: string): ContentBlock => ({
  type: 'callout',
  variant: 'tip',
  title,
  text,
})

export const added = (title: string, text: string): ContentBlock => ({
  type: 'callout',
  variant: 'added',
  title,
  text,
})
