import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/api/nest-service/models';
import { CategoriesFacade } from '../../categories/categories.facade';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  @Input() product: any;

  @Output() onSave?: EventEmitter<any> = new EventEmitter();
  
  isLoadingCategories$: Observable<boolean>;
  categories$: Observable<any>;

  constructor(
    private categoriesFacade: CategoriesFacade
  ) {
    this.isLoadingCategories$ = this.categoriesFacade.isLoading$();
    this.categories$ = this.categoriesFacade.getList$();
   }

  ngOnInit(): void {
    this.categoriesFacade.loadList({});
  }

  onSaveModal(event) {
    this.onSave.emit(this.product);
  }

  modelChange(event) {
    
  }

}
