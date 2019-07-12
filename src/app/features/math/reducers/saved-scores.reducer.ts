import { createReducer, Action, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import * as actions from '../actions/saved-scores.actions';

export interface SavedScoreModel {
  id: number;
  who: string;
  right: number;
  wrong: number;
  when: string;
}

export interface SavedScoresState extends EntityState<SavedScoreModel> {

}

export const adapter = createEntityAdapter<SavedScoreModel>();
const initialState: SavedScoresState = adapter.getInitialState();

const reducer = createReducer(
  initialState,
  on(actions.loadSavedScoresSucceeded, (state, action) => adapter.addAll(action.scores, state))
);

export function savedScoresReducer(state: SavedScoresState | undefined, action: Action) {
  return reducer(state, action);
}