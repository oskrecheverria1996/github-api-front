import { Injectable } from '@angular/core';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent, ModalDeleteModel } from '../components/delete-modal/delete-modal.component';


export interface ModalComponent {
  data: any;
  // dirty: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalService: NgbModal,) { }

  /**
     * Open modal loading a component
     *
     * @param component Must implement ModalComponent and use a modal layout to wrap the HTML content
     * @param componentData? Data to be used by the component
     * @param modalOptions? Modal options
     */
  loadComponent(
    component: any,
    componentData?: any,
    modalOptions?: NgbModalOptions,
    extraData?: any
  ): NgbModalRef {

    const modalRef = this.modalService.open(component, {
      centered: true,
      size: 'xl',
      backdrop: 'static',
      // beforeDismiss() {
      //   modalRef.componentInstance.dirty
      // },
      ...modalOptions,
    });

    modalRef.componentInstance.data = componentData;

    return modalRef;
  }

  deleteModal(data: ModalDeleteModel) {
    const modalRef = this.modalService.open(DeleteModalComponent, {
      centered: true,
      size: "sm",
      backdrop: "static",
    });
    modalRef.componentInstance.data = data;

    return modalRef.result;
  }

}
