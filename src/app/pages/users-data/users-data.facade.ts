import { Injectable } from "@angular/core";
import { ApiServicesService } from "../../api/api-services.service";
import { UsersDataState } from "./users-data.state";
import { finalize, map, tap } from "rxjs/operators";
import { Observable } from "rxjs";
import { NotificationsService } from "../../shared/common/notifications.service";
import { SearchService, UsersService } from "src/app/api/github-service/services";

@Injectable()
export class UsersDataFacade {
    constructor(
        private apiServicesService: ApiServicesService,
        private usersDataState: UsersDataState,
        private notificationsService: NotificationsService,
        private searchService: SearchService,
        private usersService: UsersService
    ) { }

    
    getListUsers(q?) {
        this.usersDataState.setLoading(true)
        let per_page = 10;
        // this.apiServicesService.getUsersList(name)
        this.searchService.searchUsers({q, per_page})
        .pipe(finalize(() => this.usersDataState.setLoading(false)))
        // .pipe(map(x => x.items.slice(0, 10)))
        .subscribe(
            (res) => {
                this.usersDataState.setListUsers(res.items);
            },
            (err) => {
                this.notificationsService.error(err.error.message, 'Error');
            }
        )
    }
       
    getUserByName(username) {
        this.usersDataState.setLoadingSingle(true);
        // this.apiServicesService.getUserByName(name)
        this.usersService.usersGetByUsername({username})
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