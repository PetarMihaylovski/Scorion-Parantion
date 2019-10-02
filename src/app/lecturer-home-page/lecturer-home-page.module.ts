import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LecturerHomePagePage } from './lecturer-home-page.page';
import { HomeFeedbackOptionsPopoverComponent } from '../home-feedback-options-popover/home-feedback-options-popover.component';
import { SettingsPopoverComponent } from '../settings-popover/settings-popover.component';

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
  entryComponents: [HomeFeedbackOptionsPopoverComponent, SettingsPopoverComponent],
  declarations: [LecturerHomePagePage, HomeFeedbackOptionsPopoverComponent, SettingsPopoverComponent]
})
export class LecturerHomePagePageModule {}
