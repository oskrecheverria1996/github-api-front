import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from "./core/layout/layout.component";
import { HomeComponent } from "./core/home/home.component";
import { AuthLayoutComponent } from './auth/auth-layout/auth-layout.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
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
        path: "home",
        component: HomeComponent,
        pathMatch: "full",
      },
      {
        path: "users-data",
        loadChildren: () =>
        import("./pages/users-data/users-data.module").then(
            (m) => m.UsersDataModule
        ),
      },
      {
        path: "products",
        loadChildren: () =>
        import("./pages/products/products.module").then(
            (m) => m.ProductsModule
        ),
      },
      {
        path: "categories",
        loadChildren: () =>
        import("./pages/categories/categories.module").then(
            (m) => m.CategoriesModule
        ),
      }
    ]
  }, { 
    path: '', 
    redirectTo: 'auth/login', 
    pathMatch: 'full' 
  }, { 
    path: '**', 
    redirectTo: 'auth/login' 
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
