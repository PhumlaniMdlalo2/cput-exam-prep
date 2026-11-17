export interface SubjectProgress {
  studied: number
  attempts: number
  average: number | null
}

const read = (key: string): unknown => {
  try {
    const raw = window.localStorage.getItem(key)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

const empty: SubjectProgress = { studied: 0, attempts: 0, average: null }

const fromAttempts = (key: string): SubjectProgress => {
  const parsed = read(key) as
    | { studiedChapters?: string[]; attempts?: { percentage?: number }[] }
    | null
  if (!parsed) return empty
  const attempts = Array.isArray(parsed.attempts) ? parsed.attempts : []
  const scores = attempts
    .map((attempt) => attempt.percentage)
    .filter((score): score is number => typeof score === 'number')
  return {
    studied: Array.isArray(parsed.studiedChapters) ? parsed.studiedChapters.length : 0,
    attempts: attempts.length,
    average:
      scores.length > 0
        ? Math.round(scores.reduce((total, score) => total + score, 0) / scores.length)
        : null,
  }
}

const fromRecords = (key: string): SubjectProgress => {
  const parsed = read(key) as
    | {
        completedExams?: Record<string, { score?: number }>
        completedChapters?: Record<string, { score?: number }>
      }
    | null
  if (!parsed) return empty
  const exams = Object.values(parsed.completedExams ?? {})
  const chapters = Object.values(parsed.completedChapters ?? {})
  const records = [...exams, ...chapters]
  const scores = records
    .map((record) => record.score)
    .filter((score): score is number => typeof score === 'number')
  return {
    studied: chapters.length,
    attempts: records.length,
    average:
      scores.length > 0
        ? Math.round(scores.reduce((total, score) => total + score, 0) / scores.length)
        : null,
  }
}

export const subjectProgress = (subjectId: string): SubjectProgress => {
  if (subjectId === 'pm') return fromRecords('pm_exam_progress')
  if (subjectId === 'is') return fromAttempts('is-exam-progress-v1')
  if (subjectId === 'adt') return fromAttempts('appdev-exam-prep-progress-v1')
  return empty
}
