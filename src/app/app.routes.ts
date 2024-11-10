import { Routes } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { OverviewComponent } from './modules/overview/overview.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddEmployeeComponent } from './modules/add-employee/add-employee.component';
import { EditEmployeeComponent } from './modules/edit-employee/edit-employee.component';

export const routes: Routes = [
    {
        path: '',
        component: ShellComponent,
        children: [
            {
                path: 'overview',
                component: OverviewComponent
            },
            { 
                path: '', 
                redirectTo: 'add-employee', 
                pathMatch: 'full' 
            },
            { 
                path: 'not-found', 
                component: NotFoundComponent
            },
            {
                path: 'add-employee',
                component: AddEmployeeComponent
            },
            {
                path: 'edit-employee/:id',
                component: EditEmployeeComponent
            }
        ]
    },
    // Wildcard route for a 404 page
    { 
        path: '**',
        redirectTo: 'not-found'
    }
];
