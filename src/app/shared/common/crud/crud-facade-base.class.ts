import { Injectable } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { ICrudState } from "./crud-state.interface";
import { Page } from "../../models/page.model";

@Injectable({
    providedIn: "root",
})

export abstract class CrudFacadeBase<T> {
    constructor(private currentState: ICrudState<T>) { }

    
    getList$(): Observable<any[]> {
        return this.currentState.getList$();
    }

    getSingle$(): Observable<T> {
        return this.currentState.getSingle$();
    }

    isLoading$(): Observable<boolean> {
        return this.currentState.isLoading$();
    }
    
    isLoadingSingle$(): Observable<boolean> {
        return this.currentState.isLoadingSingle$();
    }

    getPage$(): Observable<Page> {
        return this.currentState.getPage$();
    }
    
    getById$(): Observable<T> {
        return this.currentState.getSingle$();
    }

    isSubmitting$(): Observable<boolean> {
        throw new Error("Method not implemented.");
    }

    loadSingle$(data: any): void {
        throw new Error("Method not implemented.");
    }

    // isSubmited$(): Observable<boolean> {
    //     return this.currentState.isSubmited$();
    // }

    // getSubmitResult$(): Observable<any> {
    //     return this.currentState.getSubmitResult$();
    // }

    // setSubmitResult() {
    //     this.currentState.setSubmitResult(null);
    // }

    searchCriteriaHasChanged$() {
        return this.currentState.searchCriteriaHasChanged$();
    }

    changePage(page): void {
        this.currentState.setRqlFilter({
            page: page.page + 1,
            limit: page.rows
        })
    }

}