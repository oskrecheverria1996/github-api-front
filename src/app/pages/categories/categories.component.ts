import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/api/nest-service/models';
import { ICrudComponent } from 'src/app/shared/common/crud/crud-component.interface';
import { ListComponentBase } from 'src/app/shared/common/crud/list/list-component-base.class';
import { ModalService } from 'src/app/shared/services/modal.service';
import { CategoriesFacade } from './categories.facade';
import { NewCategoryComponent } from './new-category/new-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';

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
    this.modalService.loadComponent(NewCategoryComponent, 
      {  },
      { size: "lg", container: "body" }
    );
  }

  delete(element: any, event: Event) {
    let data = {
      title: "Eliminar categoria",
      name: element.name
    }
    this.modalService.deleteModal(data).then((result) => {
      if(result) {
        this.categoriesFacade.delete(element.id)
      }
    })
  }

  edit(element: any, event: Event) {
    this.modalService.loadComponent(UpdateCategoryComponent, 
      element.data,
      { size: "lg", container: "body" }
    );
  }


}
