import { HostListener, Injectable, OnDestroy } from "@angular/core";
import { SortEvent } from "primeng/api";
import { Observable, Subscription } from "rxjs";
// import { ScreenService } from "src/app/shared/services/screen/screen.service";
// import { PageMetadata } from "../../../models/page-metadata.model";
import { IListComponent } from "./list-component.interface";

@Injectable({
    providedIn: "root",
})
export abstract class ListComponentBase<T> implements OnDestroy {
    subscription: Subscription = new Subscription();

    listResult$: Observable<{}>;
    isLoading$: Observable<boolean>;
    // pageMetadata$: Observable<PageMetadata>;

    params: any;
    currentSortField: string;
    currentSortOrder: number;

    screenClasses: string; //Resize p-table

    constructor(private currentFacade: IListComponent<T>) {
        // this.pageMetadata$ = this.currentFacade.getPageMetadata$();
        this.isLoading$ = this.currentFacade.isLoading$();
        this.listResult$ = this.currentFacade.getList$();
        this.resetSearchSortCriteria();

        this.subscription.add(
            this.currentFacade.loadList('{}'),

            // this.currentFacade
            //     .searchCriteriaHasChanged$()
            //     .subscribe((criteria) => {
            //         this.currentFacade.loadList(criteria);
            //     })
        );
    }

    loadByCriteria(filters?: any) {
        // this.currentFacade.changeSearchCriteria(filters);
    }

    changePage(pageEvent) {
        // this.currentFacade.changePage(pageEvent);
    }

    customSort(event: SortEvent) {
        // if (
        //     event.field !== this.currentSortField ||
        //     event.order !== this.currentSortOrder
        // ) {
        //     this.currentSortField = event.field;
        //     this.currentSortOrder = event.order;
        //     this.currentFacade.changeSort(event);
        // }
    }

    clearSearch($event?) {
        // if (
        //     this.params?.search === undefined ||
        //     (this.params.search.constructor === Object &&
        //         Object.keys(this.params.search).length !== 0)
        // ) {
        //     this.resetSearchSortCriteria();
        //     this.currentFacade.changeSearchCriteria(this.params.search);
        // }
    }

    resetSearchSortCriteria() {
        this.params = {
            search: {
            },
        };
        this.currentSortField = null;
        this.currentSortOrder = null;
    }

    searchByCriteria() {
        this.loadByCriteria(this.params.search);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
