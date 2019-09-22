import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LecturerFeedbackGivenPage } from './lecturer-feedback-given.page';

const routes: Routes = [
  {
    path: '',
    component: LecturerFeedbackGivenPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LecturerFeedbackGivenPage]
})
export class LecturerFeedbackGivenPageModule {}
