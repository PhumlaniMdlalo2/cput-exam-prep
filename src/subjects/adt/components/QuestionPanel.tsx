import type { AnswerValue, Question } from '../content/types'
import { cn } from '../lib/cn'

const typeLabels: Record<Question['type'], string> = {
  mcq: 'Multiple choice',
  truefalse: 'True or false',
  matching: 'Matching',
  short: 'Short answer',
  application: 'Application',
  sql: 'SQL',
  essay: 'Essay',
}

interface QuestionPanelProps {
  question: Question
  number: string
  value: AnswerValue | undefined
  onChange: (value: AnswerValue) => void
  matchingOptions?: string[]
  flagged?: boolean
  onToggleFlag?: () => void
}

const optionLetter = (index: number): string => String.fromCharCode(65 + index)

export const QuestionPanel = ({
  question,
  number,
  value,
  onChange,
  matchingOptions,
  flagged = false,
  onToggleFlag,
}: QuestionPanelProps) => {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <span className="flex h-9 min-w-9 items-center justify-center rounded-md bg-accent px-2 font-mono text-sm font-semibold text-canvas">
          {number}
        </span>
        <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted">
          {typeLabels[question.type]}
        </span>
        <span className="rounded-full bg-gold-soft px-2.5 py-0.5 text-xs font-medium text-gold">
          {question.marks} {question.marks === 1 ? 'mark' : 'marks'}
        </span>
        {onToggleFlag ? (
          <button
            type="button"
            onClick={onToggleFlag}
            className={cn(
              'ml-auto rounded-md border px-3 py-1.5 text-xs font-medium transition-colors duration-200',
              flagged
                ? 'border-gold bg-gold-soft text-gold'
                : 'border-line text-muted hover:border-gold/50 hover:text-gold',
            )}
          >
            {flagged ? 'Flagged' : 'Flag for review'}
          </button>
        ) : null}
      </div>

      <p className="mt-5 whitespace-pre-wrap font-serif text-xl leading-snug text-ink">
        {question.prompt}
      </p>

      {question.type === 'mcq' ? (
        <fieldset className="mt-6 space-y-2.5">
          <legend className="sr-only">Choose one answer</legend>
          {question.options.map((option, index) => {
            const selected = value === index
            return (
              <label
                key={index}
                className={cn(
                  'flex cursor-pointer items-start gap-3 rounded-lg border px-4 py-3 transition-colors duration-200 focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/30',
                  selected
                    ? 'border-accent bg-accent-soft/70'
                    : 'border-line bg-surface hover:border-accent/40',
                )}
              >
                <input
                  type="radio"
                  name={question.id}
                  checked={selected}
                  onChange={() => onChange(index)}
                  className="sr-only"
                />
                <span
                  className={cn(
                    'mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-semibold',
                    selected
                      ? 'border-accent bg-accent text-canvas'
                      : 'border-line text-muted',
                  )}
                >
                  {optionLetter(index)}
                </span>
                <span className="text-[0.95rem] leading-6 text-ink/90">{option}</span>
              </label>
            )
          })}
        </fieldset>
      ) : null}

      {question.type === 'truefalse' ? (
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {[true, false].map((option) => {
            const selected = value === option
            return (
              <button
                key={String(option)}
                type="button"
                onClick={() => onChange(option)}
                className={cn(
                  'rounded-lg border px-5 py-4 text-left text-sm font-medium transition-colors duration-200',
                  selected
                    ? 'border-accent bg-accent-soft text-accent-strong'
                    : 'border-line bg-surface text-ink hover:border-accent/40',
                )}
              >
                {option ? 'True' : 'False'}
              </button>
            )
          })}
        </div>
      ) : null}

      {question.type === 'matching' ? (
        <div className="mt-6">
          <label className="block text-sm font-medium text-ink" htmlFor={`${question.id}-select`}>
            Choose the matching description
          </label>
          <select
            id={`${question.id}-select`}
            value={typeof value === 'number' ? value : ''}
            onChange={(event) =>
              onChange(event.target.value === '' ? null : Number(event.target.value))
            }
            className="mt-2 w-full rounded-lg border border-line bg-surface px-4 py-3 text-sm text-ink shadow-card focus:border-accent"
          >
            <option value="">Select a description…</option>
            {(matchingOptions ?? []).map((option, index) => (
              <option key={index} value={index}>
                {optionLetter(index)}. {option}
              </option>
            ))}
          </select>
        </div>
      ) : null}

      {question.type === 'short' ||
      question.type === 'application' ||
      question.type === 'sql' ||
      question.type === 'essay' ? (
        <div className="mt-6">
          <label className="block text-sm font-medium text-ink" htmlFor={`${question.id}-answer`}>
            Your answer
          </label>
          <textarea
            id={`${question.id}-answer`}
            value={typeof value === 'string' ? value : ''}
            onChange={(event) => onChange(event.target.value)}
            rows={question.type === 'short' ? 4 : question.type === 'application' ? 6 : 8}
            placeholder={
              question.type === 'sql'
                ? 'Write your SQL here…'
                : 'Write your answer in full sentences…'
            }
            className={cn(
              'mt-2 w-full rounded-lg border border-line bg-surface px-4 py-3 text-sm leading-7 text-ink shadow-card focus:border-accent',
              question.type === 'sql' && 'font-mono text-[0.82rem]',
            )}
          />
          <p className="mt-2 text-xs text-muted">
            Your answer is marked automatically against the model answer’s key points. Use the
            correct terminology.
          </p>
        </div>
      ) : null}
    </div>
  )
}
