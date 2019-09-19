import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FeedbackRequestSubmitPage } from './feedback-request-submit.page';

const routes: Routes = [
  {
    path: '',
    component: FeedbackRequestSubmitPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FeedbackRequestSubmitPage]
})
export class FeedbackRequestSubmitPageModule {}
