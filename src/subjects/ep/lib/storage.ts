export interface ProgressStore {
  studiedChapters: string[]
  examAttempts: Record<string, {
    score: number
    timestamp: number
    answers: any
  }>
  lastExamDate: Record<string, number>
}

const STORAGE_KEY = 'ep_progress'

export const loadProgress = (): ProgressStore => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return { studiedChapters: [], examAttempts: {}, lastExamDate: {} }
    return JSON.parse(stored)
  } catch {
    return { studiedChapters: [], examAttempts: {}, lastExamDate: {} }
  }
}

export const saveProgress = (data: ProgressStore): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {
    // Ignore storage errors
  }
}

export const markChapterStudied = (chapterId: string): void => {
  const progress = loadProgress()
  if (!progress.studiedChapters.includes(chapterId)) {
    progress.studiedChapters.push(chapterId)
    saveProgress(progress)
  }
}

export const unmarkChapterStudied = (chapterId: string): void => {
  const progress = loadProgress()
  progress.studiedChapters = progress.studiedChapters.filter(id => id !== chapterId)
  saveProgress(progress)
}

export const recordExamAttempt = (chapterId: string, score: number, answers: any): void => {
  const progress = loadProgress()
  progress.examAttempts[chapterId] = {
    score,
    timestamp: Date.now(),
    answers
  }
  saveProgress(progress)
}

export const getLastExamDate = (chapterId: string): number => {
  const progress = loadProgress()
  return progress.lastExamDate[chapterId] || 0
}

export const setLastExamDate = (chapterId: string): void => {
  const progress = loadProgress()
  progress.lastExamDate[chapterId] = Date.now()
  saveProgress(progress)
}