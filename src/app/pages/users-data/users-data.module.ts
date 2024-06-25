import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersDataComponent } from './users-data.component';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
// import { BsDropdownModule } from "ngx-bootstrap";
import { CheckboxModule } from "primeng/checkbox";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { MenuModule } from "primeng/menu";
import { MultiSelectModule } from "primeng/multiselect";
import { StepsModule } from "primeng/steps";
import { TableModule } from "primeng/table";
import { TabViewModule } from "primeng/tabview";
import { TreeModule } from "primeng/tree";
import { TreeTableModule } from "primeng/treetable";
import { PaginatorModule } from "primeng/paginator";
import { ReactiveFormsModule } from '@angular/forms';
import { UsersDataFacade } from "./users-data.facade";
import { UsersDataState } from "./users-data.state";
import { UsersDataRoutes } from "./users-data.routing";
import { UserProfileComponent } from "./user-profile/user-profile.component";

@NgModule({
  declarations: [
    UsersDataComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModule,
    CheckboxModule,
    InputTextModule,
    InputTextareaModule,
    MenuModule,
    MultiSelectModule,
    StepsModule,
    TableModule,
    TabViewModule,
    TreeModule,
    TreeTableModule,
    PaginatorModule,
    ReactiveFormsModule,
    RouterModule.forChild(UsersDataRoutes),
  ],
  providers: [
    UsersDataFacade,
    UsersDataState
  ]
})
export class UsersDataModule { }
