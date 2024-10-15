import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenuModule } from 'primeng/menu';
import { MultiSelectModule } from 'primeng/multiselect';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { PaginatorModule } from 'primeng/paginator';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoriesFacade } from './categories.facade';
import { CategoriesState } from './categories.state';
import { CategoriesRoutes } from './categories.routiing';
import { CategoryFormComponent } from './category-form/category-form.component';
import { NewCategoryComponent } from './new-category/new-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';

@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryFormComponent,
    NewCategoryComponent,
    UpdateCategoryComponent
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
    RouterModule.forChild(CategoriesRoutes),
    SharedModule,
  ],
  providers: [
    CategoriesFacade,
    CategoriesState
  ]
})
export class CategoriesModule { }
