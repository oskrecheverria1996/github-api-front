import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

// import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
// import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LayoutComponent } from "./core/layout/layout.component";
import { HomeComponent } from "./core/home/home.component";

const routes: Routes =[
  {
    path: '',
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
