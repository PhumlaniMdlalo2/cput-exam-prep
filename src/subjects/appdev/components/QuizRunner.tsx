import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../../../lib/cn'
import type { ExamSection, Question } from '../types'

const MARKS = 2

type Entry = {
  number: number
  question: Question
  sectionIndex: number
  sectionName: string
}

const flatten = (sections: ExamSection[]): Entry[] => {
  const entries: Entry[] = []
  let number = 0
  sections.forEach((section, sectionIndex) => {
    section.questions.forEach((question) => {
      number += 1
      entries.push({
        number,
        question,
        sectionIndex,
        sectionName: section.name ?? 'Questions',
      })
    })
  })
  return entries
}

const pad = (n: number): string => (n < 10 ? `0${n}` : String(n))

const normalise = (value: string): string =>
  value
    .toLowerCase()
    .replace(/[`'\u2018\u2019\u201c\u201d]/g, '')
    .replace(/\s+/g, ' ')
    .replace(/[.,;:!?]+$/, '')
    .trim()

const acceptedAnswers = (question: Question): string[] => {
  const values = Array.isArray(question.answer) ? question.answer : [question.answer]
  return values.map((value) => normalise(String(value)))
}

const isCorrect = (question: Question, given: string | undefined): boolean => {
  if (question.type === 'tf') {
    return given === (question.answer ? 'true' : 'false')
  }
  if (question.type === 'mcq') {
    return given !== undefined && Number(given) === question.answer
  }
  if (!given) return false
  return acceptedAnswers(question).includes(normalise(given))
}

const correctLabel = (question: Question): string => {
  if (question.type === 'tf') return question.answer ? 'TRUE' : 'FALSE'
  if (question.type === 'mcq') {
    const index = Number(question.answer)
    return `${String.fromCharCode(65 + index)}. ${question.options?.[index] ?? ''}`
  }
  const first = Array.isArray(question.answer) ? question.answer[0] : question.answer
  return String(first ?? '')
}

const optionIsRight = (question: Question, value: string): boolean => {
  if (question.type === 'tf') return (value === 'true') === question.answer
  return Number(value) === question.answer
}

export const QuizRunner = ({
  sections,
  mode,
  minutes,
}: {
  sections: ExamSection[]
  mode: 'test' | 'exam'
  minutes?: number
}) => {
  const entries = useMemo(() => flatten(sections), [sections])
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [graded, setGraded] = useState(false)
  const [secondsLeft, setSecondsLeft] = useState<number | null>(
    mode === 'exam' && minutes ? minutes * 60 : null,
  )

  useEffect(() => {
    if (mode !== 'exam' || graded) return
    const id = window.setInterval(() => {
      setSecondsLeft((previous) => {
        if (previous === null) return previous
        if (previous <= 1) return 0
        return previous - 1
      })
    }, 1000)
    return () => window.clearInterval(id)
  }, [mode, graded])

  useEffect(() => {
    if (mode === 'exam' && !graded && secondsLeft === 0) {
      setGraded(true)
    }
  }, [mode, graded, secondsLeft])

  const answered = entries.filter((entry) => (answers[entry.number] ?? '').trim() !== '').length

  const result = useMemo(() => {
    if (!graded) return null
    const correct = entries.filter((entry) => isCorrect(entry.question, answers[entry.number])).length
    const total = entries.length
    const bySection = new Map<number, { name: string; correct: number; total: number }>()
    entries.forEach((entry) => {
      const row = bySection.get(entry.sectionIndex) ?? {
        name: entry.sectionName,
        correct: 0,
        total: 0,
      }
      row.total += 1
      if (isCorrect(entry.question, answers[entry.number])) row.correct += 1
      bySection.set(entry.sectionIndex, row)
    })
    return {
      correct,
      total,
      percentage: total === 0 ? 0 : Math.round((correct / total) * 100),
      earned: correct * MARKS,
      totalMarks: total * MARKS,
      sections: Array.from(bySection.entries())
        .sort((a, b) => a[0] - b[0])
        .map(([, row]) => row),
    }
  }, [answers, entries, graded])

  const reset = () => {
    setAnswers({})
    setGraded(false)
    setSecondsLeft(mode === 'exam' && minutes ? minutes * 60 : null)
  }

  const heading =
    result === null
      ? ''
      : result.correct === result.total
        ? 'Perfect score.'
        : result.percentage >= 70
          ? 'Solid pass.'
          : result.percentage >= 50
            ? 'Close — review the gaps.'
            : 'Needs another pass.'

  return (
    <div>
      {mode === 'exam' && secondsLeft !== null ? (
        <div className="mt-5 flex flex-wrap items-center gap-3 rounded-lg border border-line bg-surface px-4 py-3 text-sm">
          <span className="font-medium text-ink">
            Time remaining {Math.floor(secondsLeft / 60)}:{pad(secondsLeft % 60)}
          </span>
          <span className="text-muted">
            {entries.length} questions · {entries.length * MARKS} marks
          </span>
          {secondsLeft <= 120 ? (
            <span className="rounded-full bg-danger-soft px-2.5 py-0.5 text-xs font-medium text-danger">
              Final two minutes
            </span>
          ) : secondsLeft <= 600 ? (
            <span className="rounded-full bg-gold-soft px-2.5 py-0.5 text-xs font-medium text-gold">
              Ten minutes left
            </span>
          ) : null}
        </div>
      ) : null}

      {sections.map((section, sectionIndex) => (
        <section key={section.name ?? sectionIndex} className="mt-10">
          {section.name ? (
            <div className="flex flex-wrap items-end justify-between gap-3">
              <h2 className="font-serif text-2xl">{section.name}</h2>
              <span className="text-xs text-faint">
                {section.questions.length} questions · {section.questions.length * MARKS} marks
              </span>
            </div>
          ) : null}
          {section.instruction ? (
            <p className="mt-2 text-sm text-muted">{section.instruction}</p>
          ) : null}

          <div className="mt-5 space-y-4">
            {entries
              .filter((entry) => entry.sectionIndex === sectionIndex)
              .map((entry) => {
                const question = entry.question
                const given = answers[entry.number]
                const ok = graded && isCorrect(question, given)
                const showOptions = question.type !== 'fill'
                const options =
                  question.type === 'tf' ? ['True', 'False'] : (question.options ?? [])

                return (
                  <article
                    key={entry.number}
                    className={cn(
                      'rounded-xl border bg-surface p-5 shadow-card transition-colors',
                      graded && ok ? 'border-success/40' : '',
                      graded && !ok ? 'border-danger/40' : '',
                    )}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 font-mono text-xs text-faint">
                          Q{pad(entry.number)}
                        </span>
                        <div
                          className="text-sm leading-7 text-ink/90"
                          dangerouslySetInnerHTML={{ __html: question.q }}
                        />
                      </div>
                      <span className="shrink-0 text-xs text-faint">({MARKS})</span>
                    </div>

                    {question.code ? (
                      <pre className="mt-4 overflow-x-auto rounded-lg border border-line bg-canvas p-4 text-[0.8rem] leading-6">
                        <code>{question.code}</code>
                      </pre>
                    ) : null}

                    {showOptions ? (
                      <div className="mt-4 grid gap-2" role="radiogroup" aria-label="Answer options">
                        {options.map((option, optionIndex) => {
                          const value =
                            question.type === 'tf'
                              ? optionIndex === 0
                                ? 'true'
                                : 'false'
                              : String(optionIndex)
                          const checked = given === value
                          const right = graded && optionIsRight(question, value)
                          const chosenWrong = graded && checked && !right
                          return (
                            <label
                              key={value}
                              className={cn(
                                'flex cursor-pointer items-start gap-3 rounded-lg border px-4 py-3 text-sm transition-colors',
                                checked
                                  ? 'border-accent/50 bg-accent-soft/50'
                                  : 'border-line bg-canvas hover:border-accent/30',
                                right ? 'border-success/50 bg-success-soft' : '',
                                chosenWrong ? 'border-danger/50 bg-danger-soft' : '',
                                graded ? 'cursor-default' : '',
                              )}
                            >
                              <input
                                type="radio"
                                name={`q${entry.number}`}
                                value={value}
                                checked={checked}
                                disabled={graded}
                                onChange={() =>
                                  setAnswers((previous) => ({ ...previous, [entry.number]: value }))
                                }
                                className="mt-1 accent-accent"
                              />
                              <span className="font-mono text-xs text-faint">
                                {String.fromCharCode(65 + optionIndex)}
                              </span>
                              <span className="text-ink/90">{option}</span>
                            </label>
                          )
                        })}
                      </div>
                    ) : (
                      <div className="mt-4">
                        <label
                          htmlFor={`q${entry.number}`}
                          className="text-xs font-medium uppercase tracking-[0.12em] text-muted"
                        >
                          Your answer
                        </label>
                        <input
                          id={`q${entry.number}`}
                          type="text"
                          autoComplete="off"
                          spellCheck={false}
                          value={given ?? ''}
                          disabled={graded}
                          onChange={(event) =>
                            setAnswers((previous) => ({
                              ...previous,
                              [entry.number]: event.target.value,
                            }))
                          }
                          placeholder="Type the missing word or term"
                          className="mt-2 w-full rounded-lg border border-line bg-canvas px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-accent/60"
                        />
                      </div>
                    )}

                    {graded ? (
                      <div
                        className={cn(
                          'mt-4 rounded-lg border px-4 py-3 text-sm',
                          ok
                            ? 'border-success/40 bg-success-soft/60'
                            : 'border-danger/40 bg-danger-soft/60',
                        )}
                      >
                        <p className={cn('font-semibold', ok ? 'text-success' : 'text-danger')}>
                          {ok ? 'Correct' : 'Incorrect'}
                        </p>
                        <p className="mt-1 text-ink/85">
                          <span className="font-semibold">Answer:</span> {correctLabel(question)}
                          {question.explain ? (
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ` — ${question.explain}`,
                              }}
                            />
                          ) : null}
                        </p>
                      </div>
                    ) : null}
                  </article>
                )
              })}
          </div>
        </section>
      ))}

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => setGraded(true)}
          disabled={graded}
          className={cn(
            'rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-canvas shadow-card transition-transform duration-200 ease-spring',
            graded ? 'cursor-default opacity-50' : 'hover:-translate-y-0.5 hover:bg-accent-strong',
          )}
        >
          {graded ? 'Submitted' : mode === 'exam' ? 'Submit exam' : 'Check answers'}
        </button>
        <button
          type="button"
          onClick={reset}
          className="rounded-md border border-line bg-canvas px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent/40 hover:text-accent-strong"
        >
          Try again
        </button>
        <span className="text-sm text-muted">
          {answered} of {entries.length} answered
        </span>
      </div>

      {graded && result ? (
        <section className="mt-10 rounded-xl border border-line bg-surface p-6 shadow-card sm:p-8">
          <h2 className="font-serif text-2xl">{heading}</h2>
          <p className="mt-2 text-lg text-ink">
            {result.earned} / {result.totalMarks}{' '}
            <span className="text-sm text-muted">
              · {result.percentage}% · {result.correct} of {result.total} correct
            </span>
          </p>
          <p className="mt-2 text-sm leading-6 text-muted">
            {mode === 'exam'
              ? 'Every question is worth 2 marks. The correct answer and an explanation appear under each question above.'
              : 'Read the explanation under every question you missed, then try again.'}
          </p>

          {mode === 'exam' ? (
            <div className="mt-5 overflow-hidden rounded-lg border border-line">
              <table className="w-full text-left text-sm">
                <thead className="bg-canvas text-xs uppercase tracking-[0.12em] text-muted">
                  <tr>
                    <th className="px-4 py-2.5 font-semibold">Section</th>
                    <th className="px-4 py-2.5 font-semibold">Correct</th>
                    <th className="px-4 py-2.5 font-semibold">Marks</th>
                  </tr>
                </thead>
                <tbody>
                  {result.sections.map((row) => (
                    <tr key={row.name} className="border-t border-line">
                      <td className="px-4 py-2.5 text-ink/90">{row.name}</td>
                      <td className="px-4 py-2.5 text-muted">
                        {row.correct} / {row.total}
                      </td>
                      <td className="px-4 py-2.5 text-muted">
                        {row.correct * MARKS} / {row.total * MARKS}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={reset}
              className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-canvas shadow-card transition-colors hover:bg-accent-strong"
            >
              {mode === 'exam' ? 'Retake this paper' : 'Retry this test'}
            </button>
            <Link
              to="/app-dev"
              className="rounded-md border border-line bg-canvas px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent/40 hover:text-accent-strong"
            >
              All App Dev
            </Link>
          </div>
        </section>
      ) : null}
    </div>
  )
}
