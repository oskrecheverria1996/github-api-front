import { Injectable } from "@angular/core";
import { ApiServicesService } from "../../api/api-services.service";
import { UsersDataState } from "./users-data.state";
import { finalize, map, tap } from "rxjs/operators";
import { Observable } from "rxjs";
import { NotificationsService } from "../../shared/common/notifications.service";

@Injectable()
export class UsersDataFacade {
    constructor(
        private apiServicesService: ApiServicesService,
        private usersDataState: UsersDataState,
        private notificationsService: NotificationsService
    ) { }

    
    getListUsers(name?) {
        this.usersDataState.setLoading(true)
        this.apiServicesService.getUsersList(name)
        .pipe(finalize(() => this.usersDataState.setLoading(false)))
        .pipe(map(x => x.items.slice(0, 10)))
        .subscribe(
            (res) => {
                this.usersDataState.setListUsers(res);
            },
            (err) => {
                this.notificationsService.error(err.error.message, 'Error');
            }
        )
    }
       
    getUserByName(name) {
        this.usersDataState.setLoadingSingle(true)
        this.apiServicesService.getUserByName(name)
        .pipe(finalize(() => this.usersDataState.setLoadingSingle(false)))
        .subscribe(
            (res) => {
                this.usersDataState.setUserData(res);
            },
            (err) => {
                this.notificationsService.error(err.error.message, 'Error')
            }
        )
    }

    getListUsers$(): Observable<any[]> {
        return this.usersDataState.getListUsers$();
    }

    getUserData$(): Observable<any[]> {
        return this.usersDataState.getUserData$();
    }

    isLoading$(): Observable<boolean> {
        return this.usersDataState.isLoading$();
    }
    
    isLoadingSingle$(): Observable<boolean> {
        return this.usersDataState.isLoadingSingle$();
    }
}