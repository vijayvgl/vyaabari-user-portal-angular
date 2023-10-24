import { ValidatorFn, AbstractControl, ValidationErrors, FormGroup, FormControl } from "@angular/forms";
import { checkNull } from "./return-functions";


export const AmountValidation: ValidatorFn = (formgroup: FormGroup) => {
    const from = formgroup.get(`from`).value;
    const to = formgroup.get(`to`).value;
    const commisison = formgroup.get(`commission`).value;

    if (checkNull(from) && checkNull(to)) {
        switch (false) {
            case Number(from) <= Number(to): return { fromTo: true };
            case ((Number(commisison) <= Number(from)) || (Number(commisison) >= Number(from))): return { fromCommision: true };
            case (Number(commisison) < Number(to)): return { toCommision: true };
            default: return null
        }
    } else {
        return null
    }

}



export const SlabAlreadyExists: ValidatorFn = (form: FormGroup) => {
    let value: any[] = form.value.commissions
    let slabs: any[] = [];
    let index: any[] = [];
    value.forEach((ele: any, inx: any) => {
        if (checkNull(ele?.from) && checkNull(ele?.to)) {
            const hasSome = slabs.some((val: any) => ((val?.from == ele?.from)) && (val.to == ele?.to))
            if (!hasSome) {
                slabs.push(ele)
            } else {
                index.push(inx)
            }
        }
    })
    if (checkNull(index.length > 0)) {
        return { alreadyexists: true, index: index }
    } else {
        return null
    }
}



export class TransctionLimitValidator {


    static Validate(d: string, w: string, m: string): ValidatorFn {
        return (formGroup: AbstractControl): ValidationErrors | null => {

            const dayControl = formGroup.get(d) as FormControl;
            const weekControl = formGroup.get(w) as FormControl;
            const monthControl = formGroup.get(m) as FormControl;

            const day = formGroup.get(d).value
            const week = formGroup.get(w).value
            const month = formGroup.get(m).value

            // Condition is day < week < month



            switch (true) {
                // Day and week
                case (checkNull(day) && checkNull(week)) && (Number(day) >= Number(week)): {
                    const error = { dayWeek: true }
                    dayControl.setErrors(error);
                    weekControl.setErrors(error);
                    return error
                }
                // week and month 
                case (checkNull(week) && checkNull(month)) && (Number(week) >= Number(month)): {
                    const error = { weekMonth: true }
                    monthControl.setErrors(error);
                    weekControl.setErrors(error);
                    return error
                }
                // week and month 
                case (checkNull(day) && checkNull(month)) && (Number(day) >= Number(month)): {
                    const error = { dayMonth: true }
                    monthControl.setErrors(error);
                    dayControl.setErrors(error);
                    return error
                }
                default: {
                    first()
                    second()
                    third()
                    fourth()
                    return null
                }
            }


            function first() {
                if (dayControl.hasError('dayWeek') || weekControl.hasError('dayWeek')) {
                    dayControl.hasError('dayWeek') ? delete dayControl.errors.dayWeek : '';
                    weekControl.hasError('dayWeek') ? delete weekControl.errors.dayWeek : '';
                    dayControl.updateValueAndValidity();
                }
            }

            function second() {
                if (monthControl.hasError('weekMonth') || weekControl.hasError('weekMonth')) {
                    weekControl.hasError('weekMonth') ? delete weekControl.errors?.weekMonth : '';
                    monthControl.hasError('weekMonth') ? delete monthControl.errors?.weekMonth : '';
                    dayControl.updateValueAndValidity();
                    monthControl.updateValueAndValidity();
                    weekControl.updateValueAndValidity()
                }
            }

            function third() {
                if (dayControl.hasError('dayMonth') || monthControl.hasError('dayMonth')) {
                    monthControl.hasError('dayMonth') ? delete monthControl.errors.dayMonth : '';
                    dayControl.hasError('dayMonth') ? delete dayControl.errors.dayMonth : '';
                    dayControl.updateValueAndValidity();
                    monthControl.updateValueAndValidity();
                    weekControl.updateValueAndValidity()
                }
            }

            function fourth() {
                if (dayControl.hasError('undefined') || monthControl.hasError('undefined') || weekControl.hasError('undefined')) {
                    monthControl.hasError('undefined') ? delete monthControl.errors.undefined : '';
                    dayControl.hasError('undefined') ? delete dayControl.errors.undefined : '';
                    weekControl.hasError('undefined') ? delete weekControl.errors.undefined : ''
                    dayControl.updateValueAndValidity();
                    monthControl.updateValueAndValidity();
                    weekControl.updateValueAndValidity()
                }
            }

        };
    }
}



export const MinMaxAmount: ValidatorFn = (formgroup: FormGroup) => {
    const min = formgroup.get(`minAmount`).value;
    const max = formgroup.get(`maxAmount`).value;
    const cashAmount = formgroup.get(`cashAmount`).value;

    if (checkNull(min) && checkNull(max)) {
        switch (false) {
            case Number(min) <= Number(max): return { minMax: true };
            case ((Number(cashAmount) <= Number(min)) || (Number(cashAmount) >= Number(min))): return { cashMinMax: true };
            case (Number(cashAmount) < Number(max)): return { maxCash: true };
            default: return null
        }
    } else {
        return null
    }

}


export class MinMaxAmountValidator {
    static Validate(minimum, maximum, cashAmount): ValidatorFn {
        return (formGroup: AbstractControl): ValidationErrors | null => {

            const minControl = formGroup.get(minimum) as FormControl;
            const maxControl = formGroup.get(maximum) as FormControl;
            const cashControl = formGroup.get(cashAmount) as FormControl;

            const min = Number(minControl.value)
            const max = Number(maxControl.value)
            const cash = Number(cashControl.value)


            switch (true) {

                case checkNull(min) && checkNull(max) && (min > max): {
                    const error = { minMax: true }
                    minControl.setErrors(error);
                    maxControl.setErrors(error);
                    return error
                }

                // case checkNull(min) && checkNull(cash) && (min > cash): {
                //     const error = { minCash: true }
                //     minControl.setErrors(error);
                //     cashControl.setErrors(error);
                //     return error
                // }
                // maxCash minMax

                case checkNull(max) && checkNull(cash) && (max < cash): {
                    const error = { maxCash: true }
                    maxControl.setErrors(error);
                    cashControl.setErrors(error);
                    return error
                }

                default: {
                    first()
                    second()
                    third()
                    return null
                }
            }


            function first() {
                if (minControl.invalid && minControl.touched && checkNull(min)) {
                    minControl.hasError('minMax') ? delete minControl.errors.minMax :
                        minControl.hasError('undefined') ? delete minControl.errors.undefined : minControl.setErrors(null);
                    minControl.updateValueAndValidity()
                }
            }

            function second() {
                if (maxControl.invalid && maxControl.touched && checkNull(max)) {
                    maxControl.hasError('minMax') ? delete maxControl.errors.minMax :
                        maxControl.hasError('maxCash') ? delete maxControl.errors.maxCash :
                            maxControl.hasError('undefined') ? delete maxControl.errors.undefined : maxControl.setErrors(null);
                    maxControl.updateValueAndValidity()
                }
            }

            function third() {
                if (cashControl.invalid && cashControl.touched && checkNull(cash)) {
                    cashControl.hasError('maxCash') ? delete cashControl.errors.maxCash :
                        cashControl.hasError('undefined') ? delete cashControl.errors.undefined : cashControl.setErrors(null);
                    cashControl.updateValueAndValidity()
                }
            }

        }
    }
}
