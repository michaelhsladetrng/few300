import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-questions',
  templateUrl: './new-questions.component.html',
  styleUrls: ['./new-questions.component.scss']
})
export class NewQuestionsComponent implements OnInit {

  newQuestionGroup = new FormGroup({
    question: new FormControl('', [Validators.required, Validators.maxLength(15)]),
    answer: new FormControl('', [Validators.required ])
  });

  constructor() { }

  ngOnInit() {
  }

  doIt() {
    //this.nickName.setValue("HUGE!!");
  }

  get question() {
    return this.newQuestionGroup.get('question');
  }

  saveIt() {
    console.log('Saving:', this.newQuestionGroup.value);
    this.newQuestionGroup.reset();
  }
}
