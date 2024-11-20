import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './edit-user/edit-user.component';

export const UserRoutes: Routes = [
  // {
  //     path: '',
  //     component: UsersDataComponent,
  // },
  {
      path: 'edit-user',
      component: EditUserComponent,
  }
]