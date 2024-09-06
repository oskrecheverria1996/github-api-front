import { IEditComponent } from "./edit-component.interface";
import { Subscription, Observable } from "rxjs";

export class EditComponentBase<T> {
    result$: Observable<{}>;
    isLoadingSingle$: Observable<boolean>;
    isSubmitting$: Observable<boolean>;

    constructor(private currentFacade: IEditComponent<T>) {
        this.isLoadingSingle$ = this.currentFacade.isLoadingSingle$();
        this.isSubmitting$ = this.currentFacade.isSubmitting$();
        this.result$ = this.currentFacade.getById$();
    }

    loadById(id: string): void {
        this.currentFacade.loadById(id);
    }

    getById$(): Observable<T> {
        return this.currentFacade.getSingle$()
    }

    loadSingleResult(data: any): void
    {
        return this.currentFacade.loadSingle$(data);
    }

    getSingleResult$(): Observable<T> {
        return this.currentFacade.getSingle$()
    }

}
