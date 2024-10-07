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

    params: any = {
        search: ''
    };
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

        // this.subscription.add(
        //     this.currentFacade.loadList({ page: this.currentPage, limit: this.limit }),
        // );
        this.subscription.add( 
            this.currentFacade
                .searchCriteriaHasChanged$()
                .subscribe((criteria) => {
                    console.log(criteria);
                    this.currentFacade.loadList(criteria);
                })
        )
    }

    loadByCriteria(filters?: any) {
        this.currentFacade.changeSearchCriteria(filters);
    }

    changePage(pageEvent) {
        this.currentPage = pageEvent.first
        this.currentFacade.changePage(pageEvent);
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
