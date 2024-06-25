import { Injectable } from "@angular/core";
import { ApiServicesService } from "../../api/api-services.service";
import { UsersDataState } from "./users-data.state";
import { finalize, map } from "rxjs/operators";
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
        .subscribe(
            (res) => {
                this.usersDataState.setListUsers(res.body.items);
            },
            (err) => {
                this.notificationsService.error(err.error.message, 'Error');
            }
        )
    }
       
    getUserByName(name) {
        this.usersDataState.setLoading(true)
        this.apiServicesService.getUserByName(name)
        .pipe(finalize(() => this.usersDataState.setLoading(false)))
        .subscribe(
            (res) => {
                this.usersDataState.setUserData(res.body);
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
    
    getPageInfo$(): Observable<any> {
        return this.usersDataState.getPageInfo$();
    }

    isLoading$(): Observable<boolean> {
        return this.usersDataState.isLoading$();
    }
}