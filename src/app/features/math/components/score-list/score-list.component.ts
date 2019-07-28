import { Component, OnInit, Input } from '@angular/core';
import { ScoresModel } from '../../models';
import { Store } from '@ngrx/store';
import { MathState, selectUiHintsHasError, selectUiHints } from '../../reducers';
import * as actions from '../../actions/saved-scores.actions';
import { UiHintsState } from '../../reducers/ui-hints.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-score-list',
  templateUrl: './score-list.component.html',
  styleUrls: ['./score-list.component.scss']
})
export class ScoreListComponent implements OnInit {

  @Input() scoresModel: ScoresModel = {
    numberOfQuestions: 0,
    numberCorrect: 0,
    numberWrong: 0,
    scores: []
  };

  @Input() uiHints: UiHintsState = {
    hasError: false,
    errorMessage: ''
  };

  uiHasError$: Observable<boolean>;

  saved = false;
  constructor(private store: Store<MathState>) { }

  ngOnInit() {
    this.uiHasError$ = this.store.select(selectUiHintsHasError);
  }

  saveScores() {
    this.store.dispatch(actions.saveScore(this.scoresModel.numberCorrect, this.scoresModel.numberWrong));
    this.saved = true;
  }

  dimissError() {
    this.store.dispatch(actions.dismissError({ id: 1, reason: 'Error Dismissed' }));
  }
}
