import { cramSheets } from './cram'

export const CramSection = ({ subject }: { subject: string }) => {
  const sheet = cramSheets[subject]
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
            Last-minute revision
          </span>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {sheet.cards.map((card) => (
            <div key={card.title} className="rounded-lg border border-line bg-canvas p-5">
              <h3 className="font-serif text-lg">{card.title}</h3>
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
