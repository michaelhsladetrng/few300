import { Component, OnInit } from '@angular/core';
import { QuestionModel } from '../../models';
import { MathState, selectQuestionModel } from '../../reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  model$: Observable<QuestionModel>;

  constructor(private store: Store<MathState>) { }

  ngOnInit() {
    this.model$ = this.store.select(selectQestionModel);
  }

}
