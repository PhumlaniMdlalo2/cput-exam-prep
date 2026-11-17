import type {
  AttemptResult,
  InProgressAttempt,
  ProgressState,
} from '../content/types'

const STORAGE_KEY = 'is-exam-progress-v1'

const emptyProgress = (): ProgressState => ({
  studiedChapters: [],
  attempts: [],
  theme: 'light',
  lastLocation: null,
  inProgress: null,
})

export const loadProgress = (): ProgressState => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return emptyProgress()
    const parsed = JSON.parse(raw) as Partial<ProgressState>
    return {
      ...emptyProgress(),
      ...parsed,
      studiedChapters: Array.isArray(parsed.studiedChapters)
        ? parsed.studiedChapters
        : [],
      attempts: Array.isArray(parsed.attempts) ? parsed.attempts : [],
    }
  } catch {
    return emptyProgress()
  }
}

export const saveProgress = (state: ProgressState): void => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // Storage can be unavailable (private mode, quota). The app still works in memory.
  }
}

export const updateProgress = (
  updater: (state: ProgressState) => ProgressState,
): ProgressState => {
  const next = updater(loadProgress())
  saveProgress(next)
  return next
}

export const recordAttempt = (attempt: AttemptResult): ProgressState =>
  updateProgress((state) => ({
    ...state,
    attempts: [attempt, ...state.attempts].slice(0, 100),
    inProgress: null,
  }))

export const markChapterStudied = (chapterId: string): ProgressState =>
  updateProgress((state) => ({
    ...state,
    studiedChapters: state.studiedChapters.includes(chapterId)
      ? state.studiedChapters
      : [...state.studiedChapters, chapterId],
  }))

export const unmarkChapterStudied = (chapterId: string): ProgressState =>
  updateProgress((state) => ({
    ...state,
    studiedChapters: state.studiedChapters.filter((id) => id !== chapterId),
  }))

export const setThemePreference = (theme: 'light' | 'dark'): ProgressState =>
  updateProgress((state) => ({ ...state, theme }))

export const setLastLocation = (location: string): ProgressState =>
  updateProgress((state) => ({ ...state, lastLocation: location }))

export const saveInProgress = (attempt: InProgressAttempt): ProgressState =>
  updateProgress((state) => ({ ...state, inProgress: attempt }))

export const clearInProgress = (): ProgressState =>
  updateProgress((state) => ({ ...state, inProgress: null }))

export const findAttempt = (attemptId: string): AttemptResult | undefined =>
  loadProgress().attempts.find((attempt) => attempt.id === attemptId)

export const bestPercentageFor = (
  attempts: AttemptResult[],
  kind: 'chapter-test' | 'mock-exam' | 'sql-exam',
  refId: string,
): number | null => {
  const relevant = attempts.filter(
    (attempt) => attempt.kind === kind && attempt.refId === refId,
  )
  if (relevant.length === 0) return null
  return Math.max(...relevant.map((attempt) => attempt.percentage))
}
