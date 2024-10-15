import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesFacade } from '../categories.facade';
import { ModalData } from 'src/app/shared/components/modal/modal.component';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  @Input() category: any;
  @Input() data: ModalData;

  @Output() onSave?: EventEmitter<any> = new EventEmitter();
  
  constructor(
    private categoriesFacade: CategoriesFacade
  ) { }

  ngOnInit(): void {
  }

  onSaveModal(event) {
    this.onSave.emit(this.category);
  }

  modelChange(event) {
    
  }

}
