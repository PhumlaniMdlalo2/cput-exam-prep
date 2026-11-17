import type {
  MarkingPoint,
  McqQuestion,
  TrueFalseQuestion,
  WrittenQuestion,
} from './types'

export const mp = (
  point: string,
  keywords: string[],
  marks = 1,
): MarkingPoint => ({ point, keywords, marks })

export const mcq = (
  id: string,
  prompt: string,
  options: string[],
  correctIndex: number,
  explanation: string,
  marks = 1,
): McqQuestion => ({
  id,
  type: 'mcq',
  prompt,
  options,
  correctIndex,
  marks,
  explanation,
  modelAnswer: options[correctIndex] ?? '',
})

export const tf = (
  id: string,
  prompt: string,
  correct: boolean,
  explanation: string,
  marks = 1,
): TrueFalseQuestion => ({
  id,
  type: 'truefalse',
  prompt,
  correct,
  marks,
  explanation,
  modelAnswer: correct ? 'True' : 'False',
})

type WrittenKind = 'short' | 'application' | 'essay'

const written =
  (kind: WrittenKind) =>
  (
    id: string,
    prompt: string,
    marks: number,
    modelAnswer: string,
    markingGuide: MarkingPoint[],
    commonMistakes?: string,
  ): WrittenQuestion => ({
    id,
    type: kind,
    prompt,
    marks,
    modelAnswer,
    markingGuide,
    commonMistakes,
    explanation: modelAnswer,
  })

export const short = written('short')
export const app = written('application')
export const essay = written('essay')
