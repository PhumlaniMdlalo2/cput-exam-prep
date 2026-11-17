import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import type { AnswerMap, AnswerValue, Question } from '../content/types'
import { gradeAttempt } from '../lib/scoring'
import { loadProgress, recordAttempt, saveInProgress } from '../lib/storage'
import { cn } from '../lib/cn'
import { QuestionPanel } from './QuestionPanel'

export interface RunnerSection {
  id: string
  label: string
  title: string
  format?: string
  marks: number
  instructions?: string
  matchingOptions?: string[]
  questions: Question[]
}

interface ExamRunnerProps {
  kind: 'chapter-test' | 'mock-exam' | 'sql-exam'
  refId: string
  title: string
  instructions: string
  durationMinutes: number | null
  sections: RunnerSection[]
  backTo: string
  backLabel: string
}

const formatTime = (totalSeconds: number): string => {
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  const pad = (value: number) => String(value).padStart(2, '0')
  return hours > 0 ? `${hours}:${pad(minutes)}:${pad(seconds)}` : `${pad(minutes)}:${pad(seconds)}`
}

const isAnswered = (value: AnswerValue | undefined): boolean => {
  if (value === undefined || value === null) return false
  if (typeof value === 'string') return value.trim().length > 0
  return true
}

export const ExamRunner = ({
  kind,
  refId,
  title,
  instructions,
  durationMinutes,
  sections,
  backTo,
  backLabel,
}: ExamRunnerProps) => {
  const navigate = useNavigate()
  const stored = useMemo(() => {
    const progress = loadProgress().inProgress
    if (progress && progress.kind === kind && progress.refId === refId) return progress
    return null
  }, [kind, refId])

  const items = useMemo(
    () =>
      sections
        .reduce<{
          items: { question: Question; section: RunnerSection; number: string }[]
          count: number
        }>(
          (accumulator, section) => {
            const sectionItems = section.questions.map((question, index) => ({
              question,
              section,
              number: section.label
                ? `${section.label.replace('Section ', '')}${index + 1}`
                : String(accumulator.count + index + 1),
            }))
            return {
              items: [...accumulator.items, ...sectionItems],
              count: accumulator.count + section.questions.length,
            }
          },
          { items: [], count: 0 },
        )
        .items,
    [sections],
  )

  const totalMarks = useMemo(
    () => items.reduce((total, item) => total + item.question.marks, 0),
    [items],
  )

  const [phase, setPhase] = useState<'intro' | 'active'>(stored ? 'active' : 'intro')
  const [answers, setAnswers] = useState<AnswerMap>(stored?.answers ?? {})
  const [flagged, setFlagged] = useState<string[]>(stored?.flagged ?? [])
  const [currentIndex, setCurrentIndex] = useState(stored?.currentIndex ?? 0)
  const [startedAt, setStartedAt] = useState(() => stored?.startedAt ?? new Date().toISOString())
  const [remainingSeconds, setRemainingSeconds] = useState<number | null>(
    stored?.remainingSeconds ?? (durationMinutes !== null ? durationMinutes * 60 : null),
  )
  const [showConfirm, setShowConfirm] = useState(false)
  const answersRef = useRef(answers)
  const remainingRef = useRef(remainingSeconds)
  const submittedRef = useRef(false)

  useEffect(() => {
    answersRef.current = answers
  }, [answers])

  useEffect(() => {
    remainingRef.current = remainingSeconds
  }, [remainingSeconds])

  useEffect(() => {
    if (phase !== 'active') return
    saveInProgress({
      kind,
      refId,
      answers,
      flagged,
      startedAt,
      remainingSeconds: remainingRef.current,
      currentIndex,
    })
  }, [phase, kind, refId, answers, flagged, startedAt, currentIndex])

  const finish = useCallback(() => {
    if (submittedRef.current) return
    submittedRef.current = true
    const elapsed = Math.max(
      0,
      Math.floor((Date.now() - new Date(startedAt).getTime()) / 1000),
    )
    const result = gradeAttempt({
      kind,
      refId,
      title,
      startedAt,
      durationSeconds: elapsed,
      answers: answersRef.current,
      items: items.map((item) => ({
        question: item.question,
        number: item.number,
        sectionId: item.section.id,
        sectionLabel: item.section.label,
        sectionTitle: item.section.title,
        matchingOptions: item.section.matchingOptions,
      })),
      sections: sections.map((section) => ({
        id: section.id,
        label: section.label,
        title: section.title,
      })),
    })
    recordAttempt(result)
    navigate(`/adt/results/${result.id}`)
  }, [kind, refId, title, startedAt, items, sections, navigate])

  useEffect(() => {
    if (phase !== 'active' || durationMinutes === null) return
    const deadline = new Date(startedAt).getTime() + durationMinutes * 60 * 1000
    const tick = () => {
      const next = Math.max(0, Math.round((deadline - Date.now()) / 1000))
      setRemainingSeconds(Number.isFinite(next) ? next : 0)
    }
    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [phase, durationMinutes, startedAt])

  useEffect(() => {
    if (phase === 'active' && remainingSeconds === 0) finish()
  }, [phase, remainingSeconds, finish])

  const begin = () => {
    setStartedAt(new Date().toISOString())
    setRemainingSeconds(durationMinutes !== null ? durationMinutes * 60 : null)
    setPhase('active')
  }

  const updateAnswer = (questionId: string, value: AnswerValue) => {
    setAnswers((previous) => ({ ...previous, [questionId]: value }))
  }

  const toggleFlag = (questionId: string) => {
    setFlagged((previous) =>
      previous.includes(questionId)
        ? previous.filter((id) => id !== questionId)
        : [...previous, questionId],
    )
  }

  const answeredCount = items.filter((item) => isAnswered(answers[item.question.id])).length
  const current = items[currentIndex]

  if (phase === 'intro') {
    return (
      <div className="mx-auto max-w-3xl">
        <Link
          to={backTo}
          className="text-sm font-medium text-muted transition-colors hover:text-accent-strong"
        >
          ← {backLabel}
        </Link>
        <div className="mt-6 rounded-xl border border-line bg-surface p-6 shadow-card sm:p-8">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold">
            {kind === 'mock-exam'
              ? 'Mock examination'
              : kind === 'sql-exam'
                ? 'SQL examination'
                : 'Chapter test'}
          </p>
          <h1 className="mt-2">{title}</h1>
          <p className="mt-4 text-[0.95rem] leading-7 text-ink/85">{instructions}</p>

          <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-line bg-canvas px-4 py-3">
              <dt className="text-xs uppercase tracking-wide text-muted">Marks</dt>
              <dd className="mt-1 font-serif text-2xl text-ink">{totalMarks}</dd>
            </div>
            <div className="rounded-lg border border-line bg-canvas px-4 py-3">
              <dt className="text-xs uppercase tracking-wide text-muted">Questions</dt>
              <dd className="mt-1 font-serif text-2xl text-ink">{items.length}</dd>
            </div>
            <div className="rounded-lg border border-line bg-canvas px-4 py-3">
              <dt className="text-xs uppercase tracking-wide text-muted">Time</dt>
              <dd className="mt-1 font-serif text-2xl text-ink">
                {durationMinutes !== null ? `${durationMinutes} min` : 'Untimed'}
              </dd>
            </div>
          </dl>

          <ul className="mt-6 space-y-2 text-sm text-ink/85">
            <li>• Your progress is saved automatically in this browser.</li>
            <li>• You can flag questions and return to them before submitting.</li>
            <li>• Written answers are marked against the model answer’s key points.</li>
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={begin}
              className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-canvas shadow-card transition-transform duration-200 ease-spring hover:-translate-y-0.5 hover:bg-accent-strong active:translate-y-0"
            >
              Begin attempt
            </button>
            <Link
              to={backTo}
              className="rounded-md border border-line px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:border-accent/40 hover:text-ink"
            >
              Not now
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <Link
          to={backTo}
          className="text-sm font-medium text-muted transition-colors hover:text-accent-strong"
        >
          ← {backLabel}
        </Link>
        <span className="text-sm text-faint">|</span>
        <h1 className="font-serif text-xl sm:text-2xl">{title}</h1>
        <div className="ml-auto flex items-center gap-3">
          {remainingSeconds !== null ? (
            <span
              className={cn(
                'rounded-md border px-3 py-1.5 font-mono text-sm',
                remainingSeconds <= 300
                  ? 'border-danger/50 bg-danger-soft text-danger'
                  : 'border-line bg-surface text-ink',
              )}
            >
              {formatTime(remainingSeconds)}
            </span>
          ) : null}
          <button
            type="button"
            onClick={() => setShowConfirm(true)}
            className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-canvas transition-colors hover:bg-accent-strong"
          >
            Submit
          </button>
        </div>
      </div>

      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-line">
        <div
          className="h-full rounded-full bg-accent transition-[width] duration-500 ease-spring"
          style={{ width: `${items.length > 0 ? (answeredCount / items.length) * 100 : 0}%` }}
        />
      </div>
      <p className="mt-2 text-xs text-muted">
        {answeredCount} of {items.length} answered · {flagged.length} flagged
      </p>

      <div className="mt-6 grid gap-6 lg:grid-cols-[280px_1fr]">
        <aside className="order-2 lg:order-1">
          <div className="rounded-xl border border-line bg-surface p-4 shadow-card lg:sticky lg:top-24">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted">
              Question navigator
            </p>
            <div className="mt-4 space-y-4">
              {sections.map((section) => {
                const sectionItems = items.filter((item) => item.section.id === section.id)
                return (
                  <div key={section.id}>
                    <p className="text-xs font-medium text-muted">
                      {section.label ? `${section.label} · ` : ''}
                      {section.title}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {sectionItems.map((item) => {
                        const index = items.findIndex((candidate) => candidate.question.id === item.question.id)
                        const answered = isAnswered(answers[item.question.id])
                        const isFlagged = flagged.includes(item.question.id)
                        return (
                          <button
                            key={item.question.id}
                            type="button"
                            onClick={() => setCurrentIndex(index)}
                            className={cn(
                              'flex h-8 min-w-8 items-center justify-center rounded border px-1 font-mono text-xs transition-colors duration-150',
                              index === currentIndex
                                ? 'border-accent bg-accent text-canvas'
                                : answered
                                  ? 'border-accent/40 bg-accent-soft text-accent-strong'
                                  : 'border-line bg-canvas text-muted hover:border-accent/40',
                              isFlagged && index !== currentIndex && 'border-gold',
                            )}
                          >
                            {item.number}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="mt-5 flex flex-wrap gap-3 border-t border-line pt-4 text-[0.68rem] text-muted">
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-sm bg-accent" /> Current
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-sm bg-accent-soft" /> Answered
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-sm border border-gold" /> Flagged
              </span>
            </div>
          </div>
        </aside>

        <section className="order-1 rounded-xl border border-line bg-surface p-5 shadow-card sm:p-7 lg:order-2">
          {current ? (
            <>
              <QuestionPanel
                question={current.question}
                number={current.number}
                value={answers[current.question.id]}
                onChange={(value) => updateAnswer(current.question.id, value)}
                matchingOptions={current.section.matchingOptions}
                flagged={flagged.includes(current.question.id)}
                onToggleFlag={() => toggleFlag(current.question.id)}
              />
              <div className="mt-8 flex items-center justify-between gap-3 border-t border-line pt-5">
                <button
                  type="button"
                  onClick={() => setCurrentIndex((index) => Math.max(0, index - 1))}
                  disabled={currentIndex === 0}
                  className="rounded-md border border-line px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-accent/40 hover:text-ink disabled:cursor-not-allowed disabled:opacity-40"
                >
                  ← Previous
                </button>
                <span className="text-xs text-faint">
                  {currentIndex + 1} / {items.length}
                </span>
                {currentIndex === items.length - 1 ? (
                  <button
                    type="button"
                    onClick={() => setShowConfirm(true)}
                    className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-canvas transition-colors hover:bg-accent-strong"
                  >
                    Review and submit
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setCurrentIndex((index) => Math.min(items.length - 1, index + 1))}
                    className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-canvas transition-colors hover:bg-accent-strong"
                  >
                    Next →
                  </button>
                )}
              </div>
            </>
          ) : null}
        </section>
      </div>

      {showConfirm ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-xl border border-line bg-surface p-6 shadow-float">
            <h2 className="font-serif text-xl">Submit this attempt?</h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              You have answered {answeredCount} of {items.length} questions
              {flagged.length > 0 ? ` and flagged ${flagged.length}` : ''}. You cannot change your
              answers after submitting.
            </p>
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowConfirm(false)}
                className="rounded-md border border-line px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-ink"
              >
                Keep working
              </button>
              <button
                type="button"
                onClick={finish}
                className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-canvas transition-colors hover:bg-accent-strong"
              >
                Submit attempt
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
