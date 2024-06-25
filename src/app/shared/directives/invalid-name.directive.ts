import { Directive, Input, OnChanges, SimpleChanges, ChangeDetectorRef } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: "[appInvalidName]",
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: InvalidNameDirective,
            multi: true,
        },
    ],
})

export class InvalidNameDirective implements Validator {
    
    validate(control: AbstractControl): { [key: string]: any } | null {
        return null;
    }
}