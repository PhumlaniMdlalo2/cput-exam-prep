import type { NoteBlock, Tone } from '../types/content';
import { cn } from '../lib/cn';
import { InlineText } from '../../../shell/InlineText';

const calloutStyles: Record<Tone, string> = {
  info: 'border-line bg-surface',
  tip: 'border-gold/40 bg-gold-soft/60',
  warn: 'border-danger/40 bg-danger-soft/60',
  exam: 'border-accent/40 bg-accent-soft/60',
  definition: 'border-accent/40 bg-accent-soft/40'
};

const calloutLabels: Record<Tone, string> = {
  info: 'Note',
  tip: 'Exam tip',
  warn: 'Watch out',
  exam: 'Exam focus',
  definition: 'Definition'
};

const Block = ({ block }: { block: NoteBlock }) => {
  switch (block.type) {
    case 'p':
      return <p className="mt-4 max-w-prose text-[0.98rem] leading-7 text-ink/90"><InlineText text={block.text} /></p>;

    case 'h3':
      return <h3 className="mt-9 text-xl"><InlineText text={block.text} /></h3>;

    case 'h4':
      return <h4 className="mt-6 text-base"><InlineText text={block.text} /></h4>;

    case 'list': {
      const Tag = block.ordered ? 'ol' : 'ul';
      return (
        <Tag
          className={cn(
            'mt-4 max-w-prose space-y-2 pl-5 text-[0.96rem] leading-7 text-ink/90',
            block.ordered ? 'list-decimal' : 'list-disc',
            'marker:text-accent'
          )}
        >
          {block.items.map((item, index) => (
            <li key={index} className="pl-1">
              <InlineText text={item} />
            </li>
          ))}
        </Tag>
      );
    }

    case 'definition':
      return (
        <div className="mt-5 rounded-r-lg border-l-4 border-accent bg-surface px-5 py-4 shadow-card">
          <p className="font-serif text-lg font-semibold text-ink"><InlineText text={block.term} /></p>
          <p className="mt-1 text-[0.95rem] leading-7 text-ink/85"><InlineText text={block.text} /></p>
        </div>
      );

    case 'formula':
      return (
        <div className="mt-5 overflow-hidden rounded-lg border border-line bg-surface shadow-card">
          <div className="border-b border-line bg-accent-soft/50 px-4 py-2">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-accent-strong">
              {block.name}
            </p>
          </div>
          <pre className="scrollbar-thin overflow-x-auto px-4 py-3 text-ink">
            <code>{block.expression}</code>
          </pre>
          {block.note ? (
            <p className="border-t border-line px-4 py-2 text-xs text-muted">{block.note}</p>
          ) : null}
        </div>
      );

    case 'table':
      return (
        <figure className="mt-6">
          <div className="scrollbar-thin overflow-x-auto rounded-lg border border-line shadow-card">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-accent-soft/70">
                  {block.table.headers.map((header, index) => (
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
                {block.table.rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className={cn('align-top', rowIndex % 2 === 1 && 'bg-surface/60')}>
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
          {block.table.caption ? (
            <figcaption className="mt-2 text-xs text-muted">{block.table.caption}</figcaption>
          ) : null}
        </figure>
      );

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
      );

    case 'callout':
      return (
        <aside
          className={cn(
            'mt-6 rounded-lg border-l-4 px-5 py-4',
            calloutStyles[block.tone] ?? calloutStyles.info
          )}
        >
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-accent-strong">
            {block.title ?? calloutLabels[block.tone] ?? 'Note'}
          </p>
          <p className="mt-1 text-[0.95rem] leading-7 text-ink/90"><InlineText text={block.text} /></p>
          {block.items && block.items.length > 0 ? (
            <ul className="mt-2 list-disc space-y-1 pl-5 text-[0.92rem] leading-6 text-ink/85 marker:text-accent">
              {block.items.map((item, index) => (
                <li key={index}><InlineText text={item} /></li>
              ))}
            </ul>
          ) : null}
        </aside>
      );

    case 'steps':
      return (
        <ol className="mt-5 space-y-3">
          {block.items.map((item, index) => (
            <li key={index} className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-accent-soft font-mono text-xs font-semibold text-accent-strong">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="pt-0.5 text-[0.96rem] leading-7 text-ink/90"><InlineText text={item} /></p>
            </li>
          ))}
        </ol>
      );

    case 'quote':
      return (
        <blockquote className="mt-6 border-l-4 border-gold/60 pl-5">
          <p className="font-serif text-lg italic leading-8 text-ink/90"><InlineText text={block.text} /></p>
          {block.source ? <cite className="mt-1 block text-xs text-muted">— {block.source}</cite> : null}
        </blockquote>
      );

    default:
      return null;
  }
};

export const ContentBlocks = ({ blocks }: { blocks: NoteBlock[] }) => (
  <div>
    {blocks.map((block, index) => (
      <Block key={index} block={block} />
    ))}
  </div>
);
