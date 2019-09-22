import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
 path: '', // 'student-home-page',
 loadChildren: './student-home-page/student-home-page.module#StudentHomePagePageModule'
},  { path: 'lecturer-home-page', loadChildren: './lecturer-home-page/lecturer-home-page.module#LecturerHomePagePageModule' }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
