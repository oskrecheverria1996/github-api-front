import { Component, OnInit } from '@angular/core';
import { ICrudComponent } from 'src/app/shared/common/crud/crud-component.interface';
import { ListComponentBase } from 'src/app/shared/common/crud/list/list-component-base.class';
import { ProductsFacade } from "./products.facade";

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
  ) {
    super(productsFacade);
  }

  ngOnInit(): void {
    
  }

  create(element?: any): void {
    throw new Error('Method not implemented.');
  }
  delete(element: any, event: Event) {
    throw new Error('Method not implemented.');
  }
  edit(element: any, event: Event) {
    throw new Error('Method not implemented.');
  }
  clone(element: any, event: Event) {
    throw new Error('Method not implemented.');
  }

}
