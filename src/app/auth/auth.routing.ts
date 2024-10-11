import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';

export const AuthRoutes: Routes = [
    { 
        path: 'login',
        component: LoginComponent 
    },
    { 
        path: 'register',
        component: SigninComponent 
    }
];