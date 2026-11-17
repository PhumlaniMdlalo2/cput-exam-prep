import type { Question } from '../types/content';

export interface ScoreResult {
  score: number;
  maxScore: number;
  details: Record<string, {
    score: number;
    maxScore: number;
    isCorrect?: boolean;
    feedback?: string;
  }>;
}

export function evaluateExam(questions: Question[], answers: Record<string, any>): ScoreResult {
  let totalScore = 0;
  let totalMaxScore = 0;
  const details: ScoreResult['details'] = {};

  for (const q of questions) {
    totalMaxScore += q.marks;
    const answer = answers[q.id];

    if (q.type === 'mcq' || q.type === 'truefalse') {
      const isCorrect = answer === q.correctOptionId;
      const score = isCorrect ? q.marks : 0;
      totalScore += score;
      details[q.id] = {
        score,
        maxScore: q.marks,
        isCorrect
      };
    } else if (q.type === 'calculation') {
      // Evaluate each part if available
      let qScore = 0;
      if (q.parts && typeof answer === 'object' && answer !== null) {
        for (const part of q.parts) {
          const partAnswer = parseFloat(answer[part.id]);
          let isPartCorrect = false;

          if (part.numericAnswer !== undefined && !isNaN(partAnswer)) {
            const tolerance = part.tolerance || 0.01;
            isPartCorrect = Math.abs(partAnswer - part.numericAnswer) <= tolerance;
          }

          const pScore = isPartCorrect ? part.marks : 0;
          qScore += pScore;
        }
      }
      totalScore += qScore;
      details[q.id] = {
        score: qScore,
        maxScore: q.marks,
        isCorrect: qScore === q.marks
      };
    } else {
      // Written/Essay/Short questions:
      // Require self-marking, but we can do a naive keyword count to suggest a score
      let suggestedScore = 0;
      if (typeof answer === 'string' && q.markingGuide) {
        const text = answer.toLowerCase();
        for (const point of q.markingGuide) {
          const matched = point.keywords?.some(kw => text.includes(kw.toLowerCase()));
          if (matched) {
            suggestedScore += point.marks || 1;
          }
        }
      }
      suggestedScore = Math.min(suggestedScore, q.marks);
      
      // Default to 0 until confirmed by user, or provide the suggested score
      details[q.id] = {
        score: answers[`${q.id}_selfScore`] !== undefined ? Number(answers[`${q.id}_selfScore`]) : suggestedScore,
        maxScore: q.marks
      };
      totalScore += details[q.id].score;
    }
  }

  return {
    score: totalScore,
    maxScore: totalMaxScore,
    details
  };
}
