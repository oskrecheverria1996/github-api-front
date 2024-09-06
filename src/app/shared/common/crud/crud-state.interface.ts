import { Observable } from "rxjs";

export interface ICrudState<T> {
    isLoading$(): Observable<boolean>;
    setLoading(isLoading: boolean): void;
    isLoadingSingle$(): Observable<boolean>;
    setLoadingSingle(isLoading: boolean): void;
    getList$(): Observable<any>;
    setList(results: T[]): void;
    getSingle$(): Observable<T>;
}