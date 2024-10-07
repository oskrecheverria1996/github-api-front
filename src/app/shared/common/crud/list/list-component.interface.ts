import { Observable } from "rxjs";
import { Page } from "src/app/shared/models/page.model";

export interface IListComponent<T> {
    isLoading$(): Observable<boolean>;
    loadList(filters): void;
    getList$(): Observable<T[]>;
    getPage$(): Observable<Page>;

    changeSearchCriteria(searchCriteria?: any): void;
    searchCriteriaHasChanged$(): Observable<any>;
    changePage(page): void;
}