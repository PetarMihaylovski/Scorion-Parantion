import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LecturerHomePagePage } from './lecturer-home-page.page';


const routes: Routes = [
    {
        path: 'tabs',
        component: LecturerHomePagePage,
        children: [
            {
                path: 'requests',
                children: [
                    {
                        path: '',
                        loadChildren: './requests/requests.module#RequestsPageModule'
                    }
                ]
            },
            {
                path: 'given',
                children: [
                    {
                        path: '',
                        loadChildren: './given/given.module#GivenPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/lecturer-home-page/tabs/requests',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/lecturer-home-page/tabs/requests',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LecturerHomePageRoutingModule {

}
