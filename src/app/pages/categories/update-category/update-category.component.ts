import { Component, OnInit } from '@angular/core';
import { CategoriesFacade } from '../categories.facade';
import { ModalComponent } from 'src/app/shared/services/modal.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Category } from 'src/app/api/nest-service/models';
import _ from "lodash";
import { ModalData } from 'src/app/shared/components/modal/modal.component';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent implements OnInit, ModalComponent {
  
  data: any;
  categoryData: Category;
  modalData: ModalData = {
    title: 'Editar categoria'
  }

  constructor(
    private activeModal: NgbActiveModal,
    private categoriesFacade: CategoriesFacade
  ) { }

  ngOnInit(): void {
    this.categoryData = _.cloneDeep(this.data);
  }
  
  onSave(product: any) {
    this.categoriesFacade.patch(product.id, product);
    this.activeModal.dismiss();
  }

}
