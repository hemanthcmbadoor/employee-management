import { Routes } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { OverviewComponent } from './modules/overview/overview.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SearchComponent } from './modules/search/search.component';

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
                redirectTo: 'overview', 
                pathMatch: 'full' 
            },
            { 
                path: 'not-found', 
                component: NotFoundComponent
            },
            {
                path: 'search',
                component: SearchComponent
            },
        ]
    },
    // Wildcard route for a 404 page
    { 
        path: '**',
        redirectTo: 'not-found'
    }
];
