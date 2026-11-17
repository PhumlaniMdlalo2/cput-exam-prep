import type { CramCard, CramSheet } from './cram'

type TextBlock = {
  type: string
  text?: string
  content?: string
  items?: string[]
  term?: string
  definition?: string
  caption?: string
}

type BlockCramSource = {
  title: string
  examWeight?: string
  description?: string
  summary?: TextBlock[]
  keyTerms?: { term: string; definition: string }[]
  sections?: { title: string }[]
}

type PmCramSource = {
  title: string
  number?: number
  examFocus?: string[]
  topics?: string[]
  summary?: {
    overview?: string
    groups?: { title: string; points: string[] }[]
    quickReference?: { label: string; value: string; note?: string }[]
  }
}

type MarkdownCramSource = {
  title: string
  folder?: string
  markdown: string
}

const clean = (value: string) => value.replace(/\s+/g, ' ').trim()

const dedupe = (values: (string | undefined)[]) =>
  Array.from(new Set(values.map((value) => (value ? clean(value) : '')).filter(Boolean)))

const shorten = (value: string, max = 190) =>
  value.length > max ? `${value.slice(0, max - 1).trimEnd()}...` : value

const cap = (values: (string | undefined)[], limit: number) =>
  dedupe(values).slice(0, limit).map((value) => shorten(value))

const blockPoints = (blocks: TextBlock[] = []) =>
  blocks.flatMap((block) => {
    if (block.text) return [block.text]
    if (block.content) return [block.content]
    if (block.items?.length) return block.items
    if (block.term && block.definition) return [`${block.term}: ${block.definition}`]
    if (block.caption) return [block.caption]
    return []
  })

export const buildBlockCramSheet = (source: BlockCramSource): CramSheet => {
  const summaryPoints = blockPoints(source.summary)
  const termPoints = (source.keyTerms ?? []).map(
    (item) => `${item.term}: ${item.definition}`,
  )
  const sectionTitles = (source.sections ?? []).map((section) => section.title)
  const shortlist = cap(
    [...termPoints, ...summaryPoints, ...sectionTitles, source.description],
    6,
  )
  const cards: CramCard[] = []

  if (termPoints.length) {
    cards.push({ title: 'Must-know terms', tag: 'Must know', points: cap(termPoints, 6) })
  }
  if (summaryPoints.length) {
    cards.push({ title: 'Summary essentials', tag: 'Must know', points: cap(summaryPoints, 6) })
  }
  if (sectionTitles.length) {
    cards.push({ title: 'Section map', points: cap(sectionTitles, 8) })
  }
  if (!cards.length && source.description) {
    cards.push({ title: 'Core idea', tag: 'Must know', points: cap([source.description], 3) })
  }

  return {
    heading: `${source.title}: 80/20 cram`,
    intro: source.examWeight
      ? `${source.examWeight} — revise these points first.`
      : 'The highest-yield points from this chapter — revise these first.',
    shortlist: shortlist.length ? shortlist : [source.title],
    cards,
    reminder:
      '80/20 move: know these points before re-reading the full chapter; they use the wording exam questions reward.',
  }
}

export const buildPmCramSheet = (source: PmCramSource): CramSheet => {
  const focus = source.examFocus ?? []
  const quick = (source.summary?.quickReference ?? []).map(
    (item) => `${item.label}: ${item.value}${item.note ? ` — ${item.note}` : ''}`,
  )
  const groups = (source.summary?.groups ?? []).flatMap((group) =>
    group.points.map((point) => `${group.title}: ${point}`),
  )
  const topics = source.topics ?? []
  const overview = source.summary?.overview ? [source.summary.overview] : []
  const shortlist = cap([...focus, ...quick, ...topics], 6)
  const label = source.number ? `Chapter ${source.number} · ${source.title}` : source.title
  const cards: CramCard[] = []

  if (focus.length) {
    cards.push({ title: 'Exam focus', tag: 'Must know', points: cap(focus, 6) })
  }
  if (quick.length) {
    cards.push({ title: 'Quick reference', tag: 'Must know', points: cap(quick, 6) })
  }
  if (groups.length) {
    cards.push({ title: 'Summary points', points: cap(groups, 6) })
  }
  if (topics.length) {
    cards.push({ title: 'Topic map', points: cap(topics, 8) })
  }
  if (!cards.length && overview.length) {
    cards.push({ title: 'Chapter overview', tag: 'Must know', points: cap(overview, 3) })
  }

  return {
    heading: `${label}: 80/20 cram`,
    intro: 'Exam-focus statements and quick-reference facts pulled straight from this chapter.',
    shortlist: shortlist.length ? shortlist : [label],
    cards,
    reminder:
      '80/20 move: write the exact exam-focus keyword, then support it with one quick-reference fact.',
  }
}

const stripMarkdown = (value: string) =>
  clean(value)
    .replace(/^#{2,6}\s+/, '')
    .replace(/^\s*(?:[-*]|[❖•]|\d+\.)\s+/, '')
    .replace(/!\[\[[^\]]*\]\]/g, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/\*{2,4}|_{2,4}|`/g, '')
    .replace(/^[\s>]+/, '')
    .trim()

export const buildMarkdownCramSheet = (source: MarkdownCramSource): CramSheet => {
  const lines = source.markdown.split('\n')
  const isHeading = (line: string) => /^#{2,6}\s+/.test(line.trim())
  const isBullet = (line: string) => /^\s*(?:[-*]|[❖•]|\d+\.)\s+/.test(line)
  const firstHeading = lines.findIndex(isHeading)
  const leading = lines.slice(0, firstHeading === -1 ? lines.length : firstHeading)
  const introLine = leading.find((line) => {
    const value = line.trim()
    return (
      value.length > 0 &&
      !isHeading(value) &&
      !isBullet(value) &&
      !value.startsWith('![') &&
      !value.startsWith('```')
    )
  })
  const intro = introLine ? stripMarkdown(introLine) : ''
  const leadingBullets = leading.filter(isBullet).map(stripMarkdown)
  const allBullets = lines.filter(isBullet).map(stripMarkdown)
  const headings = lines
    .filter(isHeading)
    .map(stripMarkdown)
    .filter((heading) => heading.length > 0)
  const examCues = allBullets.filter((point) =>
    /pattern|principle|interface|class|ensures|allows|separates|decoupl|provides|encapsulat|supports|improves|reduces|used|useful|prevents|maintains|defines/i.test(
      point,
    ),
  )

  const shortlist = cap(
    [
      intro ? `Intent: ${intro}` : `Know the intent and structure of ${source.title}.`,
      ...leadingBullets,
      ...headings.slice(0, 3),
    ],
    6,
  )
  const cards: CramCard[] = []

  if (intro || leadingBullets.length) {
    cards.push({
      title: 'Core idea',
      tag: 'Must know',
      points: cap([intro, ...leadingBullets], 5),
    })
  }
  if (headings.length) {
    cards.push({ title: 'Structure map', points: cap(headings, 8) })
  }
  if (examCues.length) {
    cards.push({ title: 'Exam cues', tag: 'Must know', points: cap(examCues, 6) })
  }
  if (!cards.length) {
    cards.push({
      title: 'Core idea',
      tag: 'Must know',
      points: [`Revise the examples in the full ${source.folder ?? 'note'} notes.`],
    })
  }

  return {
    heading: `${source.title}: 80/20 cram`,
    intro: source.folder
      ? `${source.folder} — the highest-yield points pulled from this note.`
      : 'The highest-yield points pulled from this note.',
    shortlist,
    cards,
    reminder:
      '80/20 move: say the intent, name the main components, then give one use case from memory.',
  }
}
