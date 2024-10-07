import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/api/nest-service/models';
import { ICrudComponent } from 'src/app/shared/common/crud/crud-component.interface';
import { ListComponentBase } from 'src/app/shared/common/crud/list/list-component-base.class';
import { ModalService } from 'src/app/shared/services/modal.service';
import { CategoriesFacade } from './categories.facade';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent 
  extends ListComponentBase<Category>
  implements OnInit, ICrudComponent<Category> {

  constructor(
    private categoriesFacade: CategoriesFacade,
    private modalService: ModalService,
  ) {
    super(categoriesFacade);
  }

  ngOnInit(): void {
    this.loadByCriteria();
  }

  create(element?: Category): void {
    throw new Error('Method not implemented.');
  }
  delete(element: Category, event: Event) {
    throw new Error('Method not implemented.');
  }
  edit(element: Category, event: Event) {
    throw new Error('Method not implemented.');
  }


}
