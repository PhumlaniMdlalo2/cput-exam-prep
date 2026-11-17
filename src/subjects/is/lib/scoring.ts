import type {
  AnswerMap,
  AttemptResult,
  MarkingPoint,
  Question,
  QuestionResult,
  SectionResult,
} from '../content/types'

export interface GradableItem {
  question: Question
  number: string
  sectionId?: string
  sectionLabel?: string
  sectionTitle?: string
  matchingOptions?: string[]
}

const normalise = (value: string): string =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s/<>=-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

const asText = (value: unknown): string => {
  if (value === null || value === undefined) return ''
  if (typeof value === 'string') return value
  if (typeof value === 'number' || typeof value === 'boolean') return String(value)
  return ''
}

const correctText = (item: GradableItem): string => {
  const { question } = item
  if (question.type === 'mcq') return question.options[question.correctIndex] ?? ''
  if (question.type === 'matching')
    return item.matchingOptions?.[question.correctIndex] ?? ''
  if (question.type === 'truefalse') return question.correct ? 'True' : 'False'
  return question.modelAnswer
}

const userText = (item: GradableItem, answer: unknown): string => {
  const { question } = item
  if (question.type === 'mcq') {
    return typeof answer === 'number' ? question.options[answer] ?? 'No answer' : 'No answer'
  }
  if (question.type === 'matching') {
    return typeof answer === 'number'
      ? item.matchingOptions?.[answer] ?? 'No answer'
      : 'No answer'
  }
  if (question.type === 'truefalse') {
    if (answer === true || answer === 'true') return 'True'
    if (answer === false || answer === 'false') return 'False'
    return 'No answer'
  }
  const text = asText(answer).trim()
  return text.length > 0 ? text : 'No answer'
}

const detectPoints = (
  text: string,
  guide: MarkingPoint[],
): { detected: MarkingPoint[]; missed: MarkingPoint[] } => {
  const haystack = normalise(text)
  const detected: MarkingPoint[] = []
  const missed: MarkingPoint[] = []
  for (const point of guide) {
    const hit = point.keywords.some((keyword) => {
      const needle = normalise(keyword)
      return needle.length > 0 && haystack.includes(needle)
    })
    if (hit) detected.push(point)
    else missed.push(point)
  }
  return { detected, missed }
}

export const gradeItem = (item: GradableItem, answer: unknown): QuestionResult => {
  const { question } = item
  const base = {
    questionId: question.id,
    questionNumber: item.number,
    sectionId: item.sectionId,
    sectionLabel: item.sectionLabel,
    type: question.type,
    prompt: question.prompt,
    marksAvailable: question.marks,
    correctAnswer: correctText(item),
    userAnswer: userText(item, answer),
    explanation: question.explanation,
    modelAnswer: question.modelAnswer,
    markingGuide: question.markingGuide,
    commonMistakes: question.commonMistakes,
    sqlSolution: question.sqlSolution,
  }

  if (question.type === 'mcq' || question.type === 'matching') {
    const selected = typeof answer === 'number' ? answer : -1
    const isCorrect = selected === question.correctIndex
    return {
      ...base,
      marksAwarded: isCorrect ? question.marks : 0,
      isCorrect,
    }
  }

  if (question.type === 'truefalse') {
    const answered =
      answer === true || answer === false || answer === 'true' || answer === 'false'
    const selected = answer === true || answer === 'true'
    const isCorrect = answered && selected === question.correct
    return {
      ...base,
      marksAwarded: isCorrect ? question.marks : 0,
      isCorrect,
    }
  }

  const text = asText(answer)
  if (text.trim().length === 0) {
    return { ...base, marksAwarded: 0, isCorrect: null }
  }

  if (question.markingGuide && question.markingGuide.length > 0) {
    const { detected, missed } = detectPoints(text, question.markingGuide)
    const awarded = Math.min(
      question.marks,
      detected.reduce((total, point) => total + point.marks, 0),
    )
    return {
      ...base,
      marksAwarded: awarded,
      isCorrect: null,
      detectedPoints: detected.map((point) => point.point),
      missedPoints: missed.map((point) => point.point),
    }
  }

  if (question.acceptableAnswers && question.acceptableAnswers.length > 0) {
    const haystack = normalise(text)
    const matched = question.acceptableAnswers.some((candidate) => {
      const needle = normalise(candidate)
      return needle.length > 0 && haystack.includes(needle)
    })
    return {
      ...base,
      marksAwarded: matched ? question.marks : 0,
      isCorrect: matched,
    }
  }

  return { ...base, marksAwarded: 0, isCorrect: null }
}

export interface GradeParams {
  kind: 'chapter-test' | 'mock-exam' | 'sql-exam'
  refId: string
  title: string
  startedAt: string
  durationSeconds: number
  items: GradableItem[]
  answers: AnswerMap
  sections?: { id: string; label: string; title: string }[]
}

export const makeId = (): string => {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID()
  }
  return `attempt-${Date.now()}-${Math.random().toString(16).slice(2)}`
}

export const gradeAttempt = (params: GradeParams): AttemptResult => {
  const questionResults = params.items.map((item) =>
    gradeItem(item, params.answers[item.question.id]),
  )

  const marksAvailable = questionResults.reduce(
    (total, result) => total + result.marksAvailable,
    0,
  )
  const marksAwarded = questionResults.reduce(
    (total, result) => total + result.marksAwarded,
    0,
  )

  let sectionResults: SectionResult[] | undefined
  if (params.sections && params.sections.length > 0) {
    sectionResults = params.sections.map((section) => {
      const results = questionResults.filter(
        (result) => result.sectionId === section.id,
      )
      return {
        sectionId: section.id,
        label: section.label,
        title: section.title,
        marksAvailable: results.reduce(
          (total, result) => total + result.marksAvailable,
          0,
        ),
        marksAwarded: results.reduce(
          (total, result) => total + result.marksAwarded,
          0,
        ),
      }
    })
  }

  return {
    id: makeId(),
    kind: params.kind,
    refId: params.refId,
    title: params.title,
    startedAt: params.startedAt,
    completedAt: new Date().toISOString(),
    durationSeconds: params.durationSeconds,
    marksAwarded,
    marksAvailable,
    percentage:
      marksAvailable > 0 ? Math.round((marksAwarded / marksAvailable) * 100) : 0,
    sectionResults,
    questionResults,
  }
}
