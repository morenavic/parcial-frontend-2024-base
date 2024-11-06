import {Routes} from '@angular/router';
import {AuthGuard} from "./auth/guards/auth.guard";
import {FullLayoutComponent} from "./layouts/full/full-layout.component";
import {ContentLayoutComponent} from "./layouts/content/content-layout.component";
import {PublicGuard} from "./auth/guards/public.guard";
import { MisCursosComponent } from './cursos/mis-cursos/mis-cursos.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: ContentLayoutComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./auth/pages/login-page/login-page.component')
      },
      {
        path: 'forgot-password',
        loadComponent: () => import('./auth/pages/forgot-password/forgot-password.component')
      },
      {
        path: 'recovery-password',
        loadComponent: () => import('./auth/pages/recovery-password/recovery-password.component')
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
    // canActivate: [PublicGuard],
    // canMatch: [PublicGuard]
  },
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/pages/home/home.component')
      },
      {
        path: 'my-profile',
        loadComponent: () => import('./profile/pages/my-profile/my-profile.component')
      },
      {
        path: '404',
        loadComponent: () => import('./shared/pages/error-page/error-page.component')
      },
      {
        path: 'mis-cursos', component: MisCursosComponent
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: '404',
      }
      
    ]
    // canActivate: [AuthGuard],
    // canMatch: [AuthGuard]
  }
];
