import { Component, OnInit } from '@angular/core';
import { ICrudComponent } from 'src/app/shared/common/crud/crud-component.interface';
import { ListComponentBase } from 'src/app/shared/common/crud/list/list-component-base.class';
import { ProductsFacade } from "./products.facade";
import { ModalService } from 'src/app/shared/services/modal.service';
import { CreateProductComponent } from './create-product/create-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent 
  extends ListComponentBase<any>
  implements OnInit, ICrudComponent<any> {

  constructor(
    private productsFacade: ProductsFacade,
    private modalService: ModalService,
  ) {
    super(productsFacade);
  }

  ngOnInit(): void {
    this.loadByCriteria()
  }

  create(element?: any): void {
    this.modalService.loadComponent(CreateProductComponent, 
      {  },
      { size: "lg", container: "body" }
    );
  }
  delete(element: any, event: Event) {
    this.productsFacade.delete(element.id);
  }
  edit(element: any, event: Event) {
    this.modalService.loadComponent(UpdateProductComponent, 
      element.data,
      { size: "lg", container: "body" }
    );
  }
  clone(element: any, event: Event) {
    throw new Error('Method not implemented.');
  }

}
