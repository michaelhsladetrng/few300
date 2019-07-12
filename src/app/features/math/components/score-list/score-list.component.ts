import { Component, OnInit, Input } from '@angular/core';
import { ScoresModel } from '../../models';
import { Store } from '@ngrx/store';
import { MathState } from '../../reducers';
import * as actions from '../../actions/saved-scores.actions';

@Component({
  selector: 'app-score-list',
  templateUrl: './score-list.component.html',
  styleUrls: ['./score-list.component.scss']
})
export class ScoreListComponent implements OnInit {

  constructor(private store: Store<MathState>) { }

  @Input() scoresModel: ScoresModel = {
    numberOfQuestions: 0,
    numberCorrect: 0,
    numberWrong: 0,
    scores: []
  };
  
  saved: false;

  ngOnInit() {
  }

  saveScores()
  {
    this.store.dispatch(actions.saveScore(this.scoresModel.numberCorrect, this.scoresModel.numberWrong));
  }
}
