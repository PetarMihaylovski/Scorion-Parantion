import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LecturerHomePagePage } from './lecturer-home-page.page';
import { HomeFeedbackOptionsPopoverComponent } from '../home-feedback-options-popover/home-feedback-options-popover.component';

const routes: Routes = [
  {
    path: '',
    component: LecturerHomePagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [HomeFeedbackOptionsPopoverComponent],
  declarations: [LecturerHomePagePage, HomeFeedbackOptionsPopoverComponent]
})
export class LecturerHomePagePageModule {}
