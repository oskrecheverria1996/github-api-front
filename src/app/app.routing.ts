import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from "./core/layout/layout.component";
import { HomeComponent } from "./core/home/home.component";
import { AuthLayoutComponent } from './auth/auth-layout/auth-layout.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'users-data', pathMatch: 'full' },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () =>
        import("./auth/auth.module").then(
          (m) => m.AuthModule
        ),
      }
    ]
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    children: [
      {
        path: "users-data",
        loadChildren: () =>
        import("./pages/users-data/users-data.module").then(
            (m) => m.UsersDataModule
        ),
      }
    ]
  }, { 
    path: '', 
    redirectTo: 'users-data', 
    pathMatch: 'full' 
  }, { 
    path: '**', 
    redirectTo: 'users-data' 
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
