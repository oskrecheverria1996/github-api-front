import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from "./components/modal/modal.component";
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from "./services/modal.service";
// import { ButtonsModule } from "ngx-bootstrap";

@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    // ButtonsModule,
  ],
  providers: [
    ModalService
  ],
  exports: [
    ModalComponent
  ]
})
export class SharedModule { }
