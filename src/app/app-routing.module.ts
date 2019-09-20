import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    //loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    loadChildren: () => import('./feedback-request-submit/feedback-request-submit.module').then(m => m.FeedbackRequestSubmitPageModule)
  }//,
  // { path: 'feedback-request-submit', loadChildren: './feedback-request-submit/feedback-request-submit.module#FeedbackRequestSubmitPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
