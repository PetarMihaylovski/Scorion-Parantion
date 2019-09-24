import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  { path: 'student-home-page', loadChildren: './student-home-page/student-home-page.module#StudentHomePagePageModule' },
  { path: 'lecturer-home-page', loadChildren: './lecturer-home-page/lecturer-home-page.module#LecturerHomePagePageModule' },
  { path: 'feedback-request-submit',
  loadChildren: './feedback-request-submit/feedback-request-submit.module#FeedbackRequestSubmitPageModule' },
  { path: 'courses', loadChildren: './courses/courses.module#CoursesPageModule' },
  { path: 'classes', loadChildren: './classes/classes.module#ClassesPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
