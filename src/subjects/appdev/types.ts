export type QuestionType = 'tf' | 'mcq' | 'fill'

export type Question = {
  type: QuestionType
  q: string
  options?: string[]
  answer: boolean | number | string | string[]
  explain?: string
  code?: string
}

export type Topic = {
  title: string
  note?: string
  intro?: string
  questions: Question[]
}

export type ExamSection = {
  name?: string
  instruction?: string
  questions: Question[]
}

export type Exam = {
  title: string
  minutes: number
  sections: ExamSection[]
}

export type Note = {
  key: string
  title: string
  folder: string
  file: string
  markdown: string
}
