import { cramSheets, type CramSheet } from './cram'

export const CramSection = ({
  subject,
  sheet: providedSheet,
}: {
  subject?: string
  sheet?: CramSheet
}) => {
  const sheet = providedSheet ?? (subject ? cramSheets[subject] : undefined)
  if (!sheet) return null

  return (
    <section className="mt-14" id="cram">
      <div className="rounded-xl border border-line bg-surface p-6 shadow-card sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold">
              Cram sheet
            </p>
            <h2 className="mt-1">{sheet.heading}</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{sheet.intro}</p>
          </div>
          <span className="rounded-full bg-gold-soft px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-gold">
            80/20 revision
          </span>
        </div>

        <div className="mt-6 rounded-lg border border-gold/40 bg-gold-soft p-4 sm:p-5">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-gold">
              80/20 shortlist
            </p>
            <p className="text-xs text-muted">Master these first if time is short.</p>
          </div>
          <ol className="mt-3 grid gap-2 sm:grid-cols-2">
            {sheet.shortlist.map((item, index) => (
              <li key={item} className="flex gap-2 text-sm leading-6 text-ink/85">
                <span className="font-mono text-xs font-semibold text-gold">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {sheet.cards.map((card) => (
            <div key={card.title} className="rounded-lg border border-line bg-canvas p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-serif text-lg">{card.title}</h3>
                {card.tag ? (
                  <span className="shrink-0 rounded-full bg-accent-soft px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide text-accent-strong">
                    {card.tag}
                  </span>
                ) : null}
              </div>
              <ul className="mt-3 space-y-2">
                {card.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm leading-6 text-muted">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-6 rounded-lg border border-gold/40 bg-gold-soft p-4 text-sm leading-6 text-ink/85">
          <span className="font-semibold text-gold">Before you close the page: </span>
          {sheet.reminder}
        </p>
      </div>
    </section>
  )
}
