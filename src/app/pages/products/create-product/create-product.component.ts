import { Component, EventEmitter, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/shared/services/modal.service';
import { ProductsFacade } from '../products.facade';
import { ModalData } from 'src/app/shared/components/modal/modal.component';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit, ModalComponent {
  
  data: any;
  productData = {
    name: '',
    price: '',
    description: ''
  }
  modalData: ModalData = {
    title: 'Nuevo producto'
  }

  constructor(
    private activeModal: NgbActiveModal,
    private productsFacade: ProductsFacade) { }

  ngOnInit(): void {
  }
     
  onSave(product: any) {
    this.productsFacade.post(product);
    this.activeModal.dismiss();
  }


}
