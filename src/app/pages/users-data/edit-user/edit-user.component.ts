import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent, ModalService } from 'src/app/shared/services/modal.service';
import _ from "lodash";
import { UsersDataFacade } from "../users-data.facade";

interface User {
  username: string;
  type: string;
}

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit, ModalComponent {

  data: any;
  
  userData: any;

  constructor(
    private usersDataFacade: UsersDataFacade,
    private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.userData = _.cloneDeep(this.data);
  }

  modelChange(event) {
    
  }
  
  onSave(user: any) {
    // this.usersDataFacade.post(command, !this.openFromOuterModule);
    console.log(user);
    this.activeModal.dismiss();
  }

}
