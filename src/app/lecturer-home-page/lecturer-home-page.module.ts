import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LecturerHomePagePage } from './lecturer-home-page.page';
import { HomeFeedbackOptionsPopoverComponent } from '../home-feedback-options-popover/home-feedback-options-popover.component';
import { SettingsPopoverComponent } from '../settings-popover/settings-popover.component';
import { FeedbackModalComponent } from '../feedback-modal/feedback-modal.component';

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
  entryComponents: [HomeFeedbackOptionsPopoverComponent, SettingsPopoverComponent, FeedbackModalComponent],
  declarations: [LecturerHomePagePage, HomeFeedbackOptionsPopoverComponent, SettingsPopoverComponent, FeedbackModalComponent]
})
export class LecturerHomePagePageModule {}
