import { Observable } from "rxjs";

export interface IEditComponent<T> {
    isLoadingSingle$(): Observable<boolean>;
    isSubmitting$(): Observable<boolean>;

    loadById(id: string): void;
    getById$(): Observable<T>;

    loadSingle$(data:any):void;
    getSingle$():Observable<T>;

}
