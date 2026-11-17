import type {
  AnswerPart,
  MarkingPoint,
  Question,
  QuestionOption,
  QuestionType
} from '../types/content';

const labels = ['a', 'b', 'c', 'd', 'e'];

export function options(texts: string[]): QuestionOption[] {
  return texts.map((text, index) => ({ id: labels[index], text }));
}

export function mp(
  text: string,
  keywords: string[],
  marks = 1
): MarkingPoint {
  return { text, keywords, marks };
}

export function mcq(
  id: string,
  prompt: string,
  optionTexts: string[],
  correctOptionId: string,
  explanation: string,
  commonMistake?: string
): Question {
  return {
    id,
    type: 'mcq',
    marks: 1,
    prompt,
    options: options(optionTexts),
    correctOptionId,
    explanation,
    commonMistake
  };
}

export function tf(
  id: string,
  prompt: string,
  correct: boolean,
  explanation: string,
  commonMistake?: string
): Question {
  return {
    id,
    type: 'truefalse',
    marks: 1,
    prompt,
    options: [
      { id: 'true', text: 'True' },
      { id: 'false', text: 'False' }
    ],
    correctOptionId: correct ? 'true' : 'false',
    explanation,
    commonMistake
  };
}

export function written(
  id: string,
  type: Extract<QuestionType, 'short' | 'essay'>,
  marks: number,
  prompt: string,
  modelAnswer: string,
  markingGuide: MarkingPoint[],
  explanation: string,
  commonMistake?: string
): Question {
  return {
    id,
    type,
    marks,
    prompt,
    modelAnswer,
    markingGuide,
    explanation,
    commonMistake
  };
}

export function shortQ(
  id: string,
  marks: number,
  prompt: string,
  modelAnswer: string,
  markingGuide: MarkingPoint[],
  explanation: string,
  commonMistake?: string
): Question {
  return written(id, 'short', marks, prompt, modelAnswer, markingGuide, explanation, commonMistake);
}

export function essayQ(
  id: string,
  marks: number,
  prompt: string,
  modelAnswer: string,
  markingGuide: MarkingPoint[],
  explanation: string,
  commonMistake?: string
): Question {
  return written(id, 'essay', marks, prompt, modelAnswer, markingGuide, explanation, commonMistake);
}

export function part(
  id: string,
  label: string,
  prompt: string,
  marks: number,
  modelAnswer: string,
  options: {
    numericAnswer?: number;
    tolerance?: number;
    unit?: string;
    formula?: string;
    markingGuide?: MarkingPoint[];
  } = {}
): AnswerPart {
  return {
    id,
    label,
    prompt,
    marks,
    modelAnswer,
    ...options
  };
}

export function calcQ(
  id: string,
  prompt: string,
  parts: AnswerPart[],
  explanation: string,
  commonMistake?: string,
  caseText?: string
): Question {
  return {
    id,
    type: 'calculation',
    marks: parts.reduce((sum, item) => sum + item.marks, 0),
    prompt,
    parts,
    caseText,
    explanation,
    commonMistake
  };
}

export function caseQ(
  id: string,
  marks: number,
  prompt: string,
  caseText: string,
  modelAnswer: string,
  markingGuide: MarkingPoint[],
  explanation: string,
  commonMistake?: string
): Question {
  return {
    id,
    type: 'essay',
    marks,
    prompt,
    caseText,
    modelAnswer,
    markingGuide,
    explanation,
    commonMistake
  };
}
