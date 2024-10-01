import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/shared/services/modal.service';
import { ProductsFacade } from '../products.facade';
import { Product } from 'src/app/api/nest-service/models';
import _ from "lodash";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit, ModalComponent {

  data: any;
  productData: Product;

  constructor(
    private activeModal: NgbActiveModal,
    private productsFacade: ProductsFacade
  ) { }

  ngOnInit(): void {
    this.productData = _.cloneDeep(this.data);
  }

  onSave(product: any) {
    this.productsFacade.patch(product.id, product);
    this.activeModal.dismiss();
  }


}
