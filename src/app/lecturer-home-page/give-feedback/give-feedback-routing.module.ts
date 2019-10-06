import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiveFeedbackPage } from './give-feedback.page';


const routes: Routes = [
    {
        path: 'tabs',
        component: GiveFeedbackPage,
        children: [
            {
                path: 'students',
                children: [
                    {
                        path: '',
                        loadChildren: './students/students.module#StudentsPageModule'
                    }
                ]
            },
            {
                path: 'student-classes',
                children: [
                    {
                        path: '',
                        loadChildren: './student-classes/student-classes.module#StudentClassesPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/give-feedback/tabs/students',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/give-feedback/tabs/students',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GiveFeedbackRoutingModule {

}
