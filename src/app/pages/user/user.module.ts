import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutes } from './user-routing.module';

import { EditUserComponent } from './edit-user/edit-user.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    EditUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes),
    SharedModule
  ]
})
export class UserModule { }
