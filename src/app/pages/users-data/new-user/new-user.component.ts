import { Component, OnInit } from '@angular/core';
import { ModalComponent } from 'src/app/shared/services/modal.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit, ModalComponent {

  constructor(
    private activeModal: NgbActiveModal
  ) { }
  data: any;
  userData: any;

  ngOnInit(): void {
    this.userData = {
      username: '',
      type: '',
      description: ''
    }
  }
   
  onSave(user: any) {
    // this.usersDataFacade.post(command, !this.openFromOuterModule);
    console.log(user);
    this.activeModal.dismiss();
  }


}
