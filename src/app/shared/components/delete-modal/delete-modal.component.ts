import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalComponent } from '../../services/modal.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

export interface ModalDeleteModel {
  title: string;
  name: string;
}

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit, ModalComponent {

  data: ModalDeleteModel;
  
  constructor(
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit(): void {
  }

  delete() {
    this.activeModal.close(true);
  }


}
