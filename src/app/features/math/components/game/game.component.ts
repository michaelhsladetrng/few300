import { Component, OnInit } from '@angular/core';
import { QuestionModel } from '../../models';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  model: QuestionModel = {
    num: 3,
    of: 10,
    question: 'What is 2 * 2'
  };

  constructor() { }

  ngOnInit() {
  }

}
