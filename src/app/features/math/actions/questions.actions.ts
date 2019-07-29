import { createAction, props } from '@ngrx/store';

let currentTempId = 99;

export const answerProvided = createAction(
  '[math] answer provided',
  props<{ guess: number }>()
);

export const playAgain = createAction(
  '[math] play again'
);

export const addQuestion = createAction(
  '[math] add question',
  ({ question, answer }: { question: string, answer: number }) => {
    return {
      entity: {
        id: currentTempId++,
        question,
        answer
      }
    };
  }
);
