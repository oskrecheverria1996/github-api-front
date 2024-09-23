import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from "src/app/shared/shared.module";
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenuModule } from 'primeng/menu';
import { MultiSelectModule } from 'primeng/multiselect';
import { PaginatorModule } from 'primeng/paginator';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { ProductsRoutes } from './products.routing';


@NgModule({
  declarations: [
    ProductsComponent
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
    RouterModule.forChild(ProductsRoutes),
    SharedModule,
  ]
})
export class ProductsModule { }
