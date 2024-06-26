import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function InvalidNameDirective(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

        const value = control.value;

        if (value == 'doublevpartners') {
            return {invalidName: true};
        }
        return null
    }
}