import type { ContentBlock } from '../content/types'
import { cn } from '../lib/cn'
import { InlineText } from '../../../shell/InlineText'

const calloutStyles: Record<string, string> = {
  note: 'border-line bg-surface',
  important: 'border-accent/40 bg-accent-soft/60',
  tip: 'border-gold/40 bg-gold-soft/60',
  warning: 'border-danger/40 bg-danger-soft/60',
  added: 'border-gold/50 bg-gold-soft/40',
}

const calloutLabels: Record<string, string> = {
  note: 'Note',
  important: 'Key point',
  tip: 'Exam tip',
  warning: 'Watch out',
  added: 'Added for completeness (approved)',
}

const Block = ({ block }: { block: ContentBlock }) => {
  switch (block.type) {
    case 'paragraph':
      return <p className="mt-4 max-w-prose text-[0.98rem] leading-7 text-ink/90"><InlineText text={block.text} /></p>

    case 'heading': {
      const classes =
        block.level === 2
          ? 'mt-12 text-2xl'
          : block.level === 3
            ? 'mt-9 text-xl'
            : 'mt-6 text-base'
      const Tag = block.level === 2 ? 'h2' : block.level === 3 ? 'h3' : 'h4'
      return (
        <Tag id={block.id} className={cn('scroll-mt-28 font-serif', classes)}>
          <InlineText text={block.text} />
        </Tag>
      )
    }

    case 'list': {
      const Tag = block.ordered ? 'ol' : 'ul'
      return (
        <Tag
          className={cn(
            'mt-4 max-w-prose space-y-2 pl-5 text-[0.96rem] leading-7 text-ink/90',
            block.ordered ? 'list-decimal' : 'list-disc',
            'marker:text-accent',
          )}
        >
          {block.items.map((item, index) => (
            <li key={index} className="pl-1">
              <InlineText text={item} />
            </li>
          ))}
        </Tag>
      )
    }

    case 'definition':
      return (
        <div className="mt-5 rounded-r-lg border-l-4 border-accent bg-surface px-5 py-4 shadow-card">
          <p className="font-serif text-lg font-semibold text-ink"><InlineText text={block.term} /></p>
          <p className="mt-1 text-[0.95rem] leading-7 text-ink/85"><InlineText text={block.definition} /></p>
        </div>
      )

    case 'code':
      return (
        <figure className="mt-5 overflow-hidden rounded-lg border border-line bg-[#15171c] shadow-card">
          <pre className="scrollbar-thin overflow-x-auto p-4 text-[#e9e5da]">
            <code>{block.code}</code>
          </pre>
          {block.caption ? (
            <figcaption className="border-t border-white/10 px-4 py-2 text-xs text-white/60">
              {block.caption}
            </figcaption>
          ) : null}
        </figure>
      )

    case 'table':
      return (
        <figure className="mt-6">
          <div className="scrollbar-thin overflow-x-auto rounded-lg border border-line shadow-card">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-accent-soft/70">
                  {block.headers.map((header, index) => (
                    <th
                      key={index}
                      className="whitespace-nowrap border-b border-line px-4 py-3 font-semibold text-ink"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={cn(
                      'align-top',
                      rowIndex % 2 === 1 && 'bg-surface/60',
                    )}
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="border-b border-line/70 px-4 py-3 leading-6 text-ink/85"
                      >
                        <InlineText text={cell} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.caption ? (
            <figcaption className="mt-2 text-xs text-muted">{block.caption}</figcaption>
          ) : null}
        </figure>
      )

    case 'image':
      return (
        <figure className="mt-6 overflow-hidden rounded-lg border border-line bg-surface shadow-card">
          <img src={block.src} alt={block.alt} className="w-full object-contain" loading="lazy" />
          {block.caption ? (
            <figcaption className="border-t border-line px-4 py-2 text-xs text-muted">
              {block.caption}
            </figcaption>
          ) : null}
        </figure>
      )

    case 'callout':
      return (
        <aside
          className={cn(
            'mt-6 rounded-lg border-l-4 px-5 py-4',
            calloutStyles[block.variant] ?? calloutStyles.note,
          )}
        >
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-accent-strong">
            {block.title ?? calloutLabels[block.variant] ?? 'Note'}
          </p>
          <p className="mt-1 text-[0.95rem] leading-7 text-ink/90"><InlineText text={block.text} /></p>
        </aside>
      )

    default:
      return null
  }
}

export const ContentBlocks = ({ blocks }: { blocks: ContentBlock[] }) => (
  <div>
    {blocks.map((block, index) => (
      <Block key={index} block={block} />
    ))}
  </div>
)
