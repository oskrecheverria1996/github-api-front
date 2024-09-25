import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { CrudStateBase } from "src/app/shared/common/crud/crud-state-base.class";

@Injectable()
export class ProductsState extends CrudStateBase<any>{

    constructor() {
        super("products");
    }

}