import { BehaviorSubject, Observable, Subject } from "rxjs";
import { ICrudState } from "./crud-state.interface";
import { Page } from "../../models/page.model";

export abstract class CrudStateBase<T> implements ICrudState<T> {

    private loading$ = new BehaviorSubject<boolean>(false);
    private loadingSingle$ = new BehaviorSubject<boolean>(false);
    private list$ = new BehaviorSubject<any>([]);
    private single$ = new BehaviorSubject<any>({});
    private page$ = new BehaviorSubject<Page>({});

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
}