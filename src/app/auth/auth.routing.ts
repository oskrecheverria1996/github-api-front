import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from '../../pages/register/register.component';

export const AuthRoutes: Routes = [
    { 
        path: 'login',
        component: LoginComponent 
    },
    // { path: 'register',       component: RegisterComponent }
];