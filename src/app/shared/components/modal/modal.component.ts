import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

export interface ModalData {
  title?: string;
  icon?: string
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() data: ModalData;
  @Output() save?: EventEmitter<any> = new EventEmitter();

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  savePressed($event) {
    // if (!this.saveDisabled) {
        this.save.emit({ activeModal: this.activeModal, event: $event });
    // }
  }

}
