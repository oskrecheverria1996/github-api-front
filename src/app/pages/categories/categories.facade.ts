import { Injectable } from '@angular/core';
import { CrudFacadeBase } from 'src/app/shared/common/crud/crud-facade-base.class';
import { IEditComponent } from 'src/app/shared/common/crud/edit/edit-component.interface';
import { IListComponent } from 'src/app/shared/common/crud/list/list-component.interface';
import { CategoriesState } from "./categories.state";
import { finalize } from 'rxjs';
import { NotificationsService } from 'src/app/shared/common/notifications.service';
import { CategoriesService } from 'src/app/api/nest-service/services';

@Injectable({
  providedIn: 'root'
})
export class CategoriesFacade extends CrudFacadeBase<any>
implements IListComponent<any>, IEditComponent<any> {

  constructor(
    private categoriesState: CategoriesState,
    private categoriesService: CategoriesService,
    private notificationsService: NotificationsService,
  ) {
    super(categoriesState);
  }

  loadList(filters: any): void {
    this.categoriesState.setLoading(true);
    this.categoriesService.categoriesControllerFindAll(filters)
        .pipe(finalize(() => this.categoriesState.setLoading(false)))
        .subscribe((res) => {
            this.categoriesState.setList(res.content);
            this.categoriesState.setPage(res.page);
        },
        (err) => {
            this.notificationsService.error(err.error.message, 'Error');
        })
  }

  loadById(id: string): void {
    this.categoriesState.setLoadingSingle(true);
    this.categoriesService.categoriesControllerFindOne({id})
        .pipe(finalize(() => this.categoriesState.setLoadingSingle(false)))
        .subscribe((res) => {
          this.categoriesState.setSingle(res);
        },
        (err) => {
            this.notificationsService.error(err.error.message, 'Error');
        })
  }

  post(body): void {
    this.categoriesService.categoriesControllerCreate({body})
        .pipe()
        .subscribe((res) => {
          this.loadList({ page: 1, limit: 10 });
        },
        (err) => {
            this.notificationsService.error(err.error.message, 'Error');
        })
  }

  patch(id, body): void {
    this.categoriesService.categoriesControllerUpdate({id, body})
        .pipe()
        .subscribe((res) => {
          this.loadList({ page: 1, limit: 10 })
        },
        (err) => {
          this.notificationsService.error(err.error.message, 'Error');
        })
  }

  delete(id): void {
    this.categoriesService.categoriesControllerRemove({id})
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
        ...this.categoriesState.getRqlFilterValue(),
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
    this.categoriesState.setRqlFilter(filters);
  }

}
