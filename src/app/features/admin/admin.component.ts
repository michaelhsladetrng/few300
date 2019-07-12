import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  nickName = new FormControl();

  personalInformationGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    lastName: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

  doIt() {
    this.nickName.setValue("HUGE!!");
  }

  saveIt() {
    console.log('Saving:', this.personalInformationGroup.value);
  }
}
