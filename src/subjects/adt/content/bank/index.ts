import type { Question } from '../types'
import { ch09Bank } from './ch09'
import { ch10Bank } from './ch10'
import { ch11Bank } from './ch11'
import { ch12Bank } from './ch12'
import { ch13Bank } from './ch13'
import { ch14Bank } from './ch14'
import { ch19Bank } from './ch19'

export interface QuestionBank {
  chapterId: string
  questions: Question[]
}

export const questionBanks: QuestionBank[] = [
  { chapterId: 'ch09', questions: ch09Bank },
  { chapterId: 'ch10', questions: ch10Bank },
  { chapterId: 'ch11', questions: ch11Bank },
  { chapterId: 'ch12', questions: ch12Bank },
  { chapterId: 'ch13', questions: ch13Bank },
  { chapterId: 'ch14', questions: ch14Bank },
  { chapterId: 'ch19', questions: ch19Bank },
]

export const bankByChapterId = (chapterId: string): Question[] =>
  questionBanks.find((bank) => bank.chapterId === chapterId)?.questions ?? []

export const allQuestions: Question[] = questionBanks.flatMap((bank) => bank.questions)
