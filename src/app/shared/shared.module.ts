import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from "./components/modal/modal.component";
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from "./services/modal.service";
import { DelayInputDirective } from './directives/delay-input.directive';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageBodyComponent } from './components/page-body/page-body.component';
import { NgSelectModule } from "@ng-select/ng-select";
// import { ButtonsModule } from "ngx-bootstrap";

@NgModule({
  declarations: [
    ModalComponent,
    DelayInputDirective,
    PageHeaderComponent,
    PageBodyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    NgSelectModule,
    // ButtonsModule,
  ],
  providers: [
    ModalService
  ],
  exports: [
    ModalComponent,
    PageHeaderComponent,
    PageBodyComponent,
    DelayInputDirective,
    NgSelectModule
  ]
})
export class SharedModule { }
