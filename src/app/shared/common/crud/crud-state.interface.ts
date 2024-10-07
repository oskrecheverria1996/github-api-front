import { Observable } from "rxjs";
import { Page } from "../../models/page.model";

export interface ICrudState<T> {
    isLoading$(): Observable<boolean>;
    setLoading(isLoading: boolean): void;
    isLoadingSingle$(): Observable<boolean>;
    setLoadingSingle(isLoading: boolean): void;
    getList$(): Observable<any>;
    setList(results: T[]): void;
    getSingle$(): Observable<T>;
    getPage$(): Observable<Page>;
    setPage(page): void;

    searchCriteriaHasChanged$(): Observable<any>;
    setRqlFilter(rql: any);
}