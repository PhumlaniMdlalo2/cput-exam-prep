import type {
  ExamSection,
  MockExam,
  Question
} from '../../types/content';
import { ch11Bank } from './objective/ch11';
import { ch12Bank } from './objective/ch12';
import { ch14Bank } from './objective/ch14';
import { ch15Bank } from './objective/ch15';
import type { ObjectiveBank } from './types';
import { calcBank } from './calcBank';
import { ch11Written } from './written/ch11';
import { ch12Written } from './written/ch12';
import { ch15Written } from './written/ch15';

interface MockTheme {
  title: string;
  theme: string;
  description: string;
}

const themes: MockTheme[] = [
  {
    title: 'Mock Exam 1 — Foundations',
    theme: 'Risk and quality foundations',
    description:
      'A first full-length paper weighted toward definitions, processes and the core concepts in Chapters 11 and 12.'
  },
  {
    title: 'Mock Exam 2 — Application',
    theme: 'Applying the processes',
    description:
      'A full-length paper that tests how the risk, quality, monitoring and closing processes are applied.'
  },
  {
    title: 'Mock Exam 3 — Analysis',
    theme: 'Analysis and trade-offs',
    description:
      'A full-length paper with a stronger emphasis on analysis, change control, earned value and case reasoning.'
  },
  {
    title: 'Mock Exam 4 — Integration',
    theme: 'Integrated performance',
    description:
      'A full-length paper that combines measurement, quality, risk and closing in integrated scenarios.'
  },
  {
    title: 'Mock Exam 5 — Exam Simulation',
    theme: 'Full simulation',
    description:
      'A full-length paper designed to simulate the final exam under time pressure across all four chapters.'
  }
];

const ch11WrittenIndexes = [
  [0, 1],
  [2, 3],
  [4, 9],
  [5, 6],
  [7, 8]
];
const ch12WrittenIndexes = [
  [0, 1],
  [2, 3],
  [4, 5],
  [6, 9],
  [7, 8]
];
const ch15WrittenIndexes = [[0], [1], [2], [3], [4]];

function take(bank: ObjectiveBank, mockIndex: number) {
  const mcqStart = mockIndex * 3;
  const tfStart = mockIndex * 2;

  return {
    mcq: bank.mcq.slice(mcqStart, mcqStart + 3),
    tf: bank.tf.slice(tfStart, tfStart + 2)
  };
}

function takeCh14or15(bank: ObjectiveBank, mockIndex: number) {
  const mcqStart = mockIndex * 2;
  const tfStart = mockIndex * 3;

  return {
    mcq: bank.mcq.slice(mcqStart, mcqStart + 2),
    tf: bank.tf.slice(tfStart, tfStart + 3)
  };
}

function sectionA(mockIndex: number): ExamSection {
  const ch11 = take(ch11Bank, mockIndex);
  const ch12 = take(ch12Bank, mockIndex);
  const ch14 = takeCh14or15(ch14Bank, mockIndex);
  const ch15 = takeCh14or15(ch15Bank, mockIndex);

  const mcq = [...ch11.mcq, ...ch12.mcq, ...ch14.mcq, ...ch15.mcq];
  const tf = [...ch11.tf, ...ch12.tf, ...ch14.tf, ...ch15.tf];

  return {
    id: `mock-${mockIndex + 1}-a`,
    title: 'Section A — Objective questions',
    instructions: [
      'Answer all 20 questions.',
      'Each question carries 1 mark, for 20 marks in total.',
      'Select the best answer for each question.'
    ],
    questions: [...mcq, ...tf]
  };
}

function sectionB(mockIndex: number): ExamSection {
  const indexes = [mockIndex, mockIndex + 5, mockIndex + 10];
  return {
    id: `mock-${mockIndex + 1}-b`,
    title: 'Section B — Calculations',
    instructions: [
      'Answer all 3 questions.',
      'Each question carries 10 marks, for 30 marks in total.',
      'Show the formula, the substitution and the final answer with the correct unit.',
      'State the interpretation where the question asks for it.'
    ],
    questions: indexes.map((index) => calcBank[index])
  };
}

function sectionC(mockIndex: number): ExamSection {
  const ch11 = ch11WrittenIndexes[mockIndex].map((index) => ch11Written[index]);
  const ch12 = ch12WrittenIndexes[mockIndex].map((index) => ch12Written[index]);
  const ch15 = ch15WrittenIndexes[mockIndex].map((index) => ch15Written[index]);

  return {
    id: `mock-${mockIndex + 1}-c`,
    title: 'Section C — Written questions',
    instructions: [
      'Answer all 5 questions.',
      'Each question carries 10 marks, for 50 marks in total.',
      'Use full sentences and support your answer with examples where appropriate.',
      'Marks are awarded for accurate content, application and clear structure.'
    ],
    questions: [...ch11, ...ch12, ...ch15]
  };
}

function buildMock(index: number): MockExam {
  const theme = themes[index];

  return {
    id: `mock-${index + 1}`,
    title: theme.title,
    theme: theme.theme,
    description: theme.description,
    timeLimitMinutes: 120,
    sections: [sectionA(index), sectionB(index), sectionC(index)]
  };
}

export const mocks: MockExam[] = themes.map((_, index) => buildMock(index));

export const mockById: Record<string, MockExam> = Object.fromEntries(
  mocks.map((mock) => [mock.id, mock])
);

export function getMock(id: string): MockExam | undefined {
  return mockById[id];
}

export function mockQuestions(mock: MockExam): Question[] {
  return mock.sections.flatMap((section) => section.questions);
}
