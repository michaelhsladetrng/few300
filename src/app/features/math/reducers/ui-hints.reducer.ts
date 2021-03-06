import { Action } from '@ngrx/store';

export interface UiHintsState {
  hasError: boolean;
  errorMessage: string;
}

const initialState: UiHintsState = {
  hasError: false,
  errorMessage: ''
};

export function reducer(state: UiHintsState = initialState, action: Action) {
  switch (action.type) {

    case '[math] dismiss error': {
      return {
        hasError: false,
        errorMessage: ''
      };
    }
     case '[math] save scored failed': {
      return {
        hasError: true,
        errorMessage: 'Could not save scores. Sorry, Jill. Quit Cheating!'
      };
    }
    default: {
      return state;
    }
  }
}
