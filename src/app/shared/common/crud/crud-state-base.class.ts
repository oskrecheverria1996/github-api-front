import { BehaviorSubject, Observable, Subject } from "rxjs";
import { ICrudState } from "./crud-state.interface";
import { Page } from "../../models/page.model";

export abstract class CrudStateBase<T> implements ICrudState<T> {

    private loading$ = new BehaviorSubject<boolean>(false);
    private loadingSingle$ = new BehaviorSubject<boolean>(false);
    private list$ = new BehaviorSubject<any>([]);
    private single$ = new BehaviorSubject<any>({});
    private page$ = new BehaviorSubject<Page>({});

    private rqlFilter$ = new Subject<any>();

    private currentPage: number = 1;
    private limit: number = 10;
    private currentRqlValue: any;

    constructor(private CRUD_TAG: string) {}
    
    setList(results: any[]) {
        this.list$.next(results);
    }

    getList$() {
        return this.list$.asObservable();
    }

    setSingle(result) {
        this.single$.next(result);
    }

    getSingle$(): Observable<any> {
        return this.single$.asObservable();
    }

    isLoading$(): Observable<boolean> {
        return this.loading$.asObservable();
    }

    setLoading(isLoading: boolean): void {
        this.loading$.next(isLoading);
    }

    isLoadingSingle$(): Observable<boolean> {
        return this.loadingSingle$.asObservable();
    }

    setLoadingSingle(isLoadingSingle: boolean): void {
        this.loadingSingle$.next(isLoadingSingle);
    }

    getPage$(): Observable<Page> {
        return this.page$.asObservable();
    }

    setPage(page: any): void {
        this.page$.next(page);
    }

    searchCriteriaHasChanged$(): Observable<any> {
        return this.rqlFilter$.asObservable();
    }

    
    getRqlFilterValue(): any {
        return this.currentRqlValue;
    }

    setRqlFilter(rql: any) {

        if (rql === undefined || rql === null || Object.keys(rql).length === 0) {
            rql = this.getInitialRql();
        }

        this.currentRqlValue = rql;
        this.rqlFilter$.next(rql);
    }

    getInitialRql() {
        return { page: this.currentPage, limit: this.limit }
    }
}