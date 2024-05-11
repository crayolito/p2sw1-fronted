import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'welcome',
    loadComponent: () => import('./welcome/welcome.component').then(m => m.default)
  }, {
    path: '', redirectTo: '/welcome', pathMatch: 'full'
  }
];
