import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RequestFeedbackPage } from './request-feedback.page';
import { RequestFeedbackRoutingModule } from './request-feedback-routing.module';

const routes: Routes = [
  {
    path: '',
    component: RequestFeedbackPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestFeedbackRoutingModule
   // RouterModule.forChild(routes)
  ],
  declarations: [RequestFeedbackPage]
})
export class RequestFeedbackPageModule {}
