import { Injectable } from "@angular/core";
import { ApiServicesService } from "../../api/api-services.service";
import { UsersDataState } from "./users-data.state";
import { finalize, map, tap } from "rxjs/operators";
import { Observable } from "rxjs";
import { NotificationsService } from "../../shared/common/notifications.service";
import { SearchService, UsersService } from "src/app/api/github-service/services";
import { CrudFacadeBase } from "src/app/shared/common/crud/crud-facade-base.class";
import { IListComponent } from "src/app/shared/common/crud/list/list-component.interface";
import { IEditComponent } from "src/app/shared/common/crud/edit/edit-component.interface";

@Injectable()
export class UsersDataFacade 
    extends CrudFacadeBase<any>
    implements IListComponent<any>, IEditComponent<any>
     {
    constructor(
        private apiServicesService: ApiServicesService,
        private usersDataState: UsersDataState,
        private notificationsService: NotificationsService,
        private searchService: SearchService,
        private usersService: UsersService
    ) {
        super(usersDataState)
     }
     

    // ILIST

    loadList(q?: any): void {
        this.usersDataState.setLoading(true);
        let per_page = 10;
        let sort = "followers";

        this.searchService.searchUsers({q, per_page, sort: 'followers'})
            .pipe(finalize(() => this.usersDataState.setLoading(false)))
            .subscribe((res) => {
                this.usersDataState.setList(res.items);
            },
            (err) => {
                this.notificationsService.error(err.error.message, 'Error');
            })
    };
    
    // IEDIT

    loadById(username: string): void { // cambiar por id y no por username
        this.usersDataState.setLoadingSingle(true);

        this.usersService.usersGetByUsername({username})
            .pipe(finalize(() => this.usersDataState.setLoadingSingle(false)))
            .subscribe(
            (res) => {
                this.usersDataState.setSingle(res);
            },
            (err) => {
                this.notificationsService.error(err.error.message, 'Error')
            }
        )
    }
       
}