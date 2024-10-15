import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/shared/services/modal.service';
import { CategoriesFacade } from '../categories.facade';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss']
})
export class NewCategoryComponent implements OnInit, ModalComponent {

  data: any;
  categoryData = {
    name: '',
    price: '',
    description: ''
  }
  modalData = {
    title: 'Nueva categoria'
  }

  constructor(
    private activeModal: NgbActiveModal,
    private categoriesFacade: CategoriesFacade
  ) { }

  ngOnInit(): void {
  }
     
  onSave(category: any) {
    this.categoriesFacade.post(category);
    this.activeModal.dismiss();
  }

}
