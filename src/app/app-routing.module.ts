import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  { path: 'student-home', loadChildren: './student-home-page/student-home-page.module#StudentHomePagePageModule' },
  { path: 'lecturer-home', loadChildren: './lecturer-home-page/lecturer-home-page.module#LecturerHomePagePageModule' },
  { path: 'feedback-request-submit',
  loadChildren: './feedback-request-submit/feedback-request-submit.module#FeedbackRequestSubmitPageModule' },
  { path: 'courses', loadChildren: './courses/courses.module#CoursesPageModule' },
  { path: 'classes', loadChildren: './classes/classes.module#ClassesPageModule' },
  { path: 'lecturer-feedback-given',
  loadChildren: './lecturer-feedback-given/lecturer-feedback-given.module#LecturerFeedbackGivenPageModule'},
  { path: 'request-feedback', loadChildren: './student-home-page/request-feedback/request-feedback.module#RequestFeedbackPageModule' },
  { path: 'give-feedback', loadChildren: './lecturer-home-page/give-feedback/give-feedback.module#GiveFeedbackPageModule' }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
