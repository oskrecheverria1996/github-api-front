import { Injectable } from "@angular/core";
import { CrudStateBase } from "src/app/shared/common/crud/crud-state-base.class";

@Injectable()
export class CategoriesState extends CrudStateBase<any>{

    constructor() {
        super("category");
    }

}