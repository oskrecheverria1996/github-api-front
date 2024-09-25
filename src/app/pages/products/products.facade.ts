import { Injectable } from '@angular/core';
import { CrudFacadeBase } from 'src/app/shared/common/crud/crud-facade-base.class';
import { IEditComponent } from 'src/app/shared/common/crud/edit/edit-component.interface';
import { IListComponent } from 'src/app/shared/common/crud/list/list-component.interface';
import { ProductsState } from "./products.state";
import { ProductsService } from 'src/app/api/products.service';
import { finalize } from 'rxjs';
import { NotificationsService } from 'src/app/shared/common/notifications.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsFacade extends CrudFacadeBase<any>
implements IListComponent<any>, IEditComponent<any> {

  constructor(
    private productsState: ProductsState,
    private productsService: ProductsService,
    private notificationsService: NotificationsService,
  ) {
    super(productsState);
  }

  loadList(filters: any): void {
    this.productsState.setLoading(true);
    this.productsService.getProductsList()
        .pipe(finalize(() => this.productsState.setLoading(false)))
        .subscribe((res) => {
            this.productsState.setList(res.content);
            this.productsState.setPage(res.page);
        },
        (err) => {
            this.notificationsService.error(err.error.message, 'Error');
        })
  }

  loadById(id: string): void {
    throw new Error('Method not implemented.');
  }
}
