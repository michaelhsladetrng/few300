import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { QuestionModel } from '../../models';
import { MathState } from '../../reducers';
import { addQuestion } from '../../actions/questions.actions';

@Component({
  selector: 'app-new-questions',
  templateUrl: './new-questions.component.html',
  styleUrls: ['./new-questions.component.scss']
})
export class NewQuestionsComponent implements OnInit {

  newQuestionGroup = new FormGroup({
    question: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
    answer: new FormControl('', [Validators.required ])
  });

  constructor(private store: Store<MathState>) { }

  ngOnInit() {
  }

  doIt() {
    //this.nickName.setValue("HUGE!!");
  }

  get question() {
    return this.newQuestionGroup.get('question');
  }

  get answer() {
    return this.newQuestionGroup.get('answer');
  }
  saveIt() {
    console.log('Saving:', this.newQuestionGroup.value);

    // var question1 = this.newQuestionGroup.get('question');
    // var answer1 = this.newQuestionGroup.get('answer');

    // console.log('Question:', question1);
    // console.log('Answer:', answer1);

    this.store.dispatch(addQuestion(this.newQuestionGroup.value));
    this.newQuestionGroup.reset();
  }
}
