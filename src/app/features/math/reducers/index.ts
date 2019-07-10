export const featureName = 'mathFeature';
import * as fromQuestions from './questions.reducer';

export interface MathState {
  questions: fromQuestions.MathQuestionsState;
}

export const reducers = {
  questions: fromQuestions.reducer
};
