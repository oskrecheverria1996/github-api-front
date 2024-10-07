import { Injectable } from '@angular/core';
import { CrudFacadeBase } from 'src/app/shared/common/crud/crud-facade-base.class';
import { IEditComponent } from 'src/app/shared/common/crud/edit/edit-component.interface';
import { IListComponent } from 'src/app/shared/common/crud/list/list-component.interface';
import { ProductsState } from "./products.state";
// import { ProductsService } from 'src/app/api/products.service';
import { ProductsService } from 'src/app/api/nest-service/services';
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
    this.productsService.productsControllerFindAll(filters)
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
    this.productsState.setLoadingSingle(true);
    this.productsService.productsControllerFindOne({id})
        .pipe(finalize(() => this.productsState.setLoadingSingle(false)))
        .subscribe((res) => {
          this.productsState.setSingle(res);
        },
        (err) => {
            this.notificationsService.error(err.error.message, 'Error');
        })
  }

  post(body): void {
    this.productsService.productsControllerCreate({body})
        .pipe()
        .subscribe((res) => {
          this.loadList({ page: 1, limit: 10 });
        },
        (err) => {
            this.notificationsService.error(err.error.message, 'Error');
        })
  }

  patch(id, body): void {
    this.productsService.productsControllerUpdate({id, body})
        .pipe()
        .subscribe((res) => {
          this.loadList({ page: 1, limit: 10 })
        },
        (err) => {
          this.notificationsService.error(err.error.message, 'Error');
        })
  }

  delete(id): void {
    this.productsService.productsControllerRemove({id})
        .pipe()
        .subscribe((res) => {
          this.loadList({ page: 1, limit: 10 })
        },
        (err) => {
          this.notificationsService.error(err.error.message, 'Error');
        })
  }

  changeSearchCriteria(searchCriteria?: any): void {
    let filters
    if (searchCriteria !== undefined && searchCriteria !== null && Object.keys(searchCriteria).length !== 0) {
      filters = {
        ...this.productsState.getRqlFilterValue(),
        // search: searchCriteria,
      //   search: JSON.stringify({
      //     $and: [
      //      {
      //        name: {
      //            $regex: searchCriteria,
      //        },
      //      },
      //    ],
      //  })
      };
    }
    this.productsState.setRqlFilter(filters);
  }

}
