import { Routes } from '@angular/router';
import { getContact as newfunc } from './app.component';

export const routes: Routes = [
    {
        path:"app",
        loadComponent:()=>import('../app/home/home.component').then(m=>m.HomeComponent),
        resolve: { id: () => newfunc() }
    }
];
