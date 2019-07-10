import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathComponent } from './math.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'math',
    component: MathComponent
  }
];

@NgModule({
  declarations: [MathComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MathModule { }
