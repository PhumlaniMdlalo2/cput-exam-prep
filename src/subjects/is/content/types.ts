export type BlockVariant = 'note' | 'important' | 'tip' | 'warning' | 'added'

export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: 2 | 3 | 4; text: string; id: string }
  | { type: 'list'; ordered?: boolean; items: string[] }
  | { type: 'definition'; term: string; definition: string }
  | { type: 'code'; language: string; code: string; caption?: string }
  | { type: 'table'; caption?: string; headers: string[]; rows: string[][] }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'callout'; variant: BlockVariant; title?: string; text: string }

export interface ChapterSection {
  id: string
  title: string
  blocks: ContentBlock[]
}

export interface Chapter {
  id: string
  number: number
  title: string
  subtitle: string
  description: string
  examWeight: string
  sections: ChapterSection[]
  summary: ContentBlock[]
  keyTerms: { term: string; definition: string }[]
}

export type QuestionKind =
  | 'mcq'
  | 'truefalse'
  | 'short'
  | 'application'
  | 'sql'
  | 'matching'
  | 'essay'

export interface MarkingPoint {
  point: string
  keywords: string[]
  marks: number
}

export interface BaseQuestion {
  id: string
  type: QuestionKind
  prompt: string
  marks: number
  explanation: string
  modelAnswer: string
  markingGuide?: MarkingPoint[]
  commonMistakes?: string
  sqlSolution?: string
}

export interface McqQuestion extends BaseQuestion {
  type: 'mcq'
  options: string[]
  correctIndex: number
}

export interface TrueFalseQuestion extends BaseQuestion {
  type: 'truefalse'
  correct: boolean
}

export interface MatchingQuestion extends BaseQuestion {
  type: 'matching'
  correctIndex: number
}

export interface WrittenQuestion extends BaseQuestion {
  type: 'short' | 'application' | 'sql' | 'essay'
  acceptableAnswers?: string[]
}

export type Question =
  | McqQuestion
  | TrueFalseQuestion
  | MatchingQuestion
  | WrittenQuestion

export interface ChapterTest {
  chapterId: string
  title: string
  instructions: string
  questions: Question[]
}

export interface ExamSection {
  id: string
  label: string
  title: string
  format: string
  marks: number
  instructions: string
  matchingOptions?: string[]
  questions: Question[]
}

export interface MockExam {
  id: string
  title: string
  description: string
  focus: string
  totalMarks: number
  durationMinutes: number
  instructions: string
  sections: ExamSection[]
}

export type AnswerValue = string | number | boolean | null

export type AnswerMap = Record<string, AnswerValue>

export interface QuestionResult {
  questionId: string
  questionNumber: string
  sectionId?: string
  sectionLabel?: string
  type: QuestionKind
  prompt: string
  marksAvailable: number
  marksAwarded: number
  correctAnswer: string
  userAnswer: string
  isCorrect: boolean | null
  explanation: string
  modelAnswer: string
  markingGuide?: MarkingPoint[]
  detectedPoints?: string[]
  missedPoints?: string[]
  commonMistakes?: string
  sqlSolution?: string
}

export interface SectionResult {
  sectionId: string
  label: string
  title: string
  marksAvailable: number
  marksAwarded: number
}

export interface AttemptResult {
  id: string
  kind: 'chapter-test' | 'mock-exam' | 'sql-exam'
  refId: string
  title: string
  startedAt: string
  completedAt: string
  durationSeconds: number
  marksAwarded: number
  marksAvailable: number
  percentage: number
  sectionResults?: SectionResult[]
  questionResults: QuestionResult[]
}

export interface InProgressAttempt {
  kind: 'chapter-test' | 'mock-exam' | 'sql-exam'
  refId: string
  answers: AnswerMap
  flagged: string[]
  startedAt: string
  remainingSeconds: number | null
  currentIndex: number
}

export interface ProgressState {
  studiedChapters: string[]
  attempts: AttemptResult[]
  theme: 'light' | 'dark'
  lastLocation: string | null
  inProgress: InProgressAttempt | null
}
