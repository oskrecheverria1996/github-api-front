import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable()
export class UsersDataState {
    private listUsers$ = new BehaviorSubject<any>([]);
    private loading$ = new BehaviorSubject<boolean>(false);
    private pageInfo$ = new BehaviorSubject<any>({});
    private userData$ = new BehaviorSubject<any>({});

    setListUsers(results: any[]) {
        this.listUsers$.next(results);
    }

    getListUsers$() {
        return this.listUsers$.asObservable();
    }

    setUserData(result) {
        this.userData$.next(result);
    }

    getUserData$(): Observable<any> {
        return this.userData$.asObservable();
    }

    isLoading$(): Observable<boolean> {
        return this.loading$.asObservable();
    }

    setLoading(isLoading: boolean): void {
        this.loading$.next(isLoading);
    }

    getPageInfo$(): Observable<any> {
        return this.pageInfo$.asObservable();
    }

    setPageInfo(page: any): void {
        this.pageInfo$.next(page);
    }
}