import type { NoteBlock, Tone } from '../types/content';

export const p = (text: string): NoteBlock => ({ type: 'p', text });

export const h3 = (text: string): NoteBlock => ({ type: 'h3', text });

export const h4 = (text: string): NoteBlock => ({ type: 'h4', text });

export const list = (items: string[], ordered = false): NoteBlock => ({
  type: 'list',
  ordered,
  items
});

export const table = (
  headers: string[],
  rows: string[][],
  caption?: string
): NoteBlock => ({ type: 'table', table: { headers, rows, caption } });

export const def = (term: string, text: string): NoteBlock => ({
  type: 'definition',
  term,
  text
});

export const formula = (
  name: string,
  expression: string,
  note?: string
): NoteBlock => ({ type: 'formula', name, expression, note });

export const callout = (
  tone: Tone,
  title: string,
  text: string,
  items?: string[]
): NoteBlock => ({ type: 'callout', tone, title, text, items });

export const steps = (items: string[]): NoteBlock => ({ type: 'steps', items });

export const img = (src: string, alt: string, caption?: string): NoteBlock => ({
  type: 'image',
  src: `/assets/${src}`,
  alt,
  caption
});

export const quote = (text: string, source?: string): NoteBlock => ({
  type: 'quote',
  text,
  source
});
