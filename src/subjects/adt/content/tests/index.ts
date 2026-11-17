import type { ChapterTest, Question, QuestionKind } from '../types'
import { questionBanks } from '../bank'
import { chapters } from '../chapters'

const ofType = (questions: Question[], type: QuestionKind): Question[] =>
  questions.filter((question) => question.type === type)

export const chapterTests: ChapterTest[] = questionBanks.flatMap((bank) => {
  const chapter = chapters.find((candidate) => candidate.id === bank.chapterId)
  if (!chapter) return []
  const questions = [
    ...ofType(bank.questions, 'mcq').slice(0, 8),
    ...ofType(bank.questions, 'truefalse').slice(0, 4),
    ...ofType(bank.questions, 'short').slice(0, 2),
    ...ofType(bank.questions, 'application').slice(0, 1),
  ]
  return [
    {
      chapterId: chapter.id,
      title: `Chapter ${chapter.number} — ${chapter.title}`,
      instructions:
        'Answer all 15 questions. The test is untimed and worth 25 marks. Section A contains multiple-choice questions, Section B true/false questions, Section C short-answer questions worth 4 marks each, and Section D one application question worth 5 marks.',
      questions,
    },
  ]
})

export const testByChapterId: Record<string, ChapterTest> = Object.fromEntries(
  chapterTests.map((test) => [test.chapterId, test]),
)
