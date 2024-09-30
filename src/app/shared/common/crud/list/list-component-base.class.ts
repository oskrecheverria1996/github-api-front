import { HostListener, Injectable, OnDestroy } from "@angular/core";
import { SortEvent } from "primeng/api";
import { Observable, Subscription } from "rxjs";
// import { ScreenService } from "src/app/shared/services/screen/screen.service";
// import { PageMetadata } from "../../../models/page-metadata.model";
import { IListComponent } from "./list-component.interface";
import { Page } from "src/app/shared/models/page.model";

@Injectable({
    providedIn: "root",
})
export abstract class ListComponentBase<T> implements OnDestroy {
    subscription: Subscription = new Subscription();

    listResult$: Observable<{}>;
    isLoading$: Observable<boolean>;
    page$: Observable<Page>;

    params: any;
    currentSortField: string;
    currentSortOrder: number;

    screenClasses: string; //Resize p-table

    currentPage: number = 1;
    limit: number = 10;

    constructor(private currentFacade: IListComponent<T>) {
        this.page$ = this.currentFacade.getPage$();
        this.isLoading$ = this.currentFacade.isLoading$();
        this.listResult$ = this.currentFacade.getList$();
        this.resetSearchSortCriteria();

        this.subscription.add(
            this.currentFacade.loadList({ page: this.currentPage, limit: this.limit }),

            // this.currentFacade
            //     .searchCriteriaHasChanged$()
            //     .subscribe((criteria) => {
            //         this.currentFacade.loadList(criteria);
            //     })
        );
    }

    loadByCriteria(filters?: any) {
        
    }

    changePage(pageEvent) {
        this.currentPage = pageEvent.first
        let filters = {
            page: pageEvent.page + 1,
            limit: pageEvent.rows
        }
        this.currentFacade.loadList(filters);
    }

    customSort(event: SortEvent) {

    }

    clearSearch($event?) {

    }

    resetSearchSortCriteria() {

    }

    searchByCriteria() {
        this.loadByCriteria(this.params.search);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
