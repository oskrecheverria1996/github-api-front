import { Observable } from "rxjs";

export interface IListComponent<T> {
    isLoading$(): Observable<boolean>;
    loadList(filters): void;
    getList$(): Observable<T[]>;
}