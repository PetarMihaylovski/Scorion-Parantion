import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestFeedbackPage } from './request-feedback.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: RequestFeedbackPage,
        children: [
            {
                path: 'lecturers',
                children: [
                    {
                        path: '',
                        loadChildren: './lecturers/lecturers.module#LecturersPageModule'
                    }
                ]
            },
            {
                path: 'courses',
                children: [
                    {
                        path: '',
                        loadChildren: './../request-feedback/courses/courses.module#CoursesPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/request-feedback/tabs/lecturers',
                pathMatch: 'full'
            }
        ]
    },
      {
        path: '',
        redirectTo: '/request-feedback/tabs/lecturers',
        pathMatch: 'full'
      }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RequestFeedbackRoutingModule {

}
