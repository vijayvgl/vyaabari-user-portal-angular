

import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";
import { format } from "date-fns";
import { checkNull } from "./return-functions";
interface OBJ {
    date: number
    month: number
    year: number
    hours: number
    mins: number
}
function getOBJ(date?: any): OBJ {


    return {
        date: date ? new Date(date ?? '').getDate() : new Date().getDate(),
        month: date ? new Date(date ?? '').getMonth() + 1 : new Date().getMonth() + 1,
        year: date ? new Date(date ?? '').getFullYear() : new Date().getFullYear(),
        hours: date ? new Date(date ?? '').getHours() : new Date().getHours(),
        mins: date ? new Date(date ?? '').getMinutes() : new Date().getMinutes()
    }
}
function getTimeOBJ($time) {
    const time = $time.split(':');
    const hours = Number(time[0]);
    const minutes = Number(time[1]);
    return {
        hours: hours,
        mins: minutes
    }
}

export function formatTime(data: string) {
    const splitted: any[] = data.split(' ')[1].split(':');
    return `${splitted[0]}:${splitted[1]}`
}

export function FormatGivenDate(data: any) {
    const date = new Date(data)

    return format(new Date(date), "dd-MM-yyyy")
}

export function returnDateString(data: any) {
    let date = new Date(data)
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}

export function FormatAPI(data: any) {
    const date = new Date(data);
    return format(new Date(date), "yyyy-MM-dd");
}




/**********************************************From Date Alone******************************************************* */
function checkFromDate(fDate) {
    const currentDate = new Date().getDate()
    const fromDate = new Date(fDate).getDate();

    const currentMonth = new Date().getMonth() + 1
    const fromMonth = new Date(fDate).getMonth() + 1;

    const currentYear = new Date().getFullYear()
    const fromYear = new Date(fDate).getFullYear();

    if (fromYear >= currentYear) {

        if (fromYear == currentYear) {
            if (fromMonth >= currentMonth) {

                if (fromMonth == currentMonth) {
                    if (fromDate >= currentDate) {
                        return true
                    } else {
                        return false
                    }
                } else {
                    return true
                }

            } else {
                return false
            }

        } else {
            return true
        }


    } else {
        return false
    }
}

export const FromDate: ValidatorFn = (formgroup: FormGroup) => {
    const from = formgroup.get(`from_date`).value
    if (checkNull(from)) {
        if (checkFromDate(from)) {
            return null
        } else {
            return { invalid_from_date: true }
        }
    } else {
        return null

    }
}

/*******************************************************From And To date validations**************************************************/
function checkFromDateToDate(fromDate, todate) {
    let from = new Date(fromDate);
    let to = new Date(todate);
    if ((from.getFullYear() <= to.getFullYear())) {

        if ((from.getFullYear() == to.getFullYear())) {
            if (((from.getMonth() + 1) <= (to.getMonth() + 1))) {
                if (((from.getMonth() + 1) == (to.getMonth() + 1))) {
                    if ((from.getDate() <= to.getDate())) {
                        return true
                    } else {
                        return false
                    }
                } else {
                    return true
                }
            } else {
                return false
            }
        } else {
            return true
        }
    } else {
        return false
    }
}


export const FromDateToDate: ValidatorFn = (formgroup: FormGroup) => {
    const from = formgroup.get(`from_date`).value;
    const to = formgroup.get(`to_date`).value
    if (checkNull(from) && checkNull(to)) {
        if (checkFromDateToDate(from, to)) {
            return null
        } else {
            return { invalid_dates: true }
        }
    } else {
        return null
    }


}

export const NeedTwoDates: ValidatorFn = (formgroup: FormGroup) => {
    const from = formgroup.get(`from_date`).value;
    const to = formgroup.get(`to_date`).value
    if (checkNull(from) || checkNull(to)) {
        if (checkNull(from) && checkNull(to)) {
            return null
        } else {
            return { needTwoDates: true }
        }
    } else {
        return null
    }
}

export const NeedFromDate: ValidatorFn = (formgroup: FormGroup) => {
    const from = formgroup.get(`from_date`).value;
    const to = formgroup.get(`to_date`).value
    if (checkNull(to)) {
        if (checkNull(from) && checkNull(to)) {
            return null
        } else {
            return { FromDateIsRequired: true }
        }
    } else {
        return null
    }
}

export const NeedDistrict: ValidatorFn = (formgroup: FormGroup) => {
    const state = formgroup.get(`state`).value;
    const district = formgroup.get(`district`).value
    if (checkNull(state)) {
        if (NUEL(district) && NUEL(district)) {
            return null
        } else {
            return { NeedDistricts: true }
        }
    } else {
        return null
    }
}

export function NUEL(data: '' | null | any[] | any) {
    if (data != null && data != '' && data != undefined) {
        if (data instanceof Array) {
            return data.length <= 0 ? false : true
        } else {
            return true
        }
    } else {
        return false
    }
}


/*******copy */
export const FromDateToDate2: ValidatorFn = (formgroup: FormGroup) => {
    const from = formgroup.get(`fromdate`).value;
    const to = formgroup.get(`todate`).value
    if (checkNull(from) && checkNull(to)) {
        if (checkFromDateToDate(from, to)) {
            return null
        } else {
            return { invalid_dates: true }
        }
    } else {
        return null
    }


}
export const NeedFromDate2: ValidatorFn = (formgroup: FormGroup) => {
    const from = formgroup.get(`fromdate`).value;
    const to = formgroup.get(`todate`).value
    if (checkNull(to)) {
        if (checkNull(from) && checkNull(to)) {
            return null
        } else {
            return { FromDateIsRequired: true }
        }
    } else {
        return null
    }
}


/**************************************FromDate Todate FromTime ToTime Validations**************************************/
export class DateTimeValidator {


    static validate(FD, TD, FT, TT): ValidatorFn {
        return (formGroup: AbstractControl): ValidationErrors | null => {
            const fromDateControl = formGroup.get(FD) as FormControl;
            const toDateControl = formGroup.get(TD) as FormControl;
            const fromTimeControl = formGroup.get(FT) as FormControl;
            const toTimeControl = formGroup.get(TT) as FormControl;

            const fromdate = formGroup.get(FD).value
            const todate = formGroup.get(TD).value
            const fromtime = formGroup.get(FT).value
            const totime = formGroup.get(TT).value
            const notNull = checkNull(fromdate) && checkNull(todate) && checkNull(fromtime) && checkNull(totime)

            switch (true) {
                case checkNull(fromdate) && !notPastDate(fromdate): {
                    const error = { pastFromDate: true }
                    fromDateControl.setErrors(error);
                    return error
                }
                // pastFromDate  pastFromTime invalidDate pastToTime  invalidTime
                case checkNull(fromtime) && checkNull(fromdate) && !notPastTime(fromdate, fromtime): {
                    const error = { pastFromTime: true }
                    fromTimeControl.setErrors(error);
                    return error
                }
                case checkNull(fromdate) && checkNull(todate) && !validFromToDate(fromdate, todate): {
                    const error = { invalidDate: true }
                    fromDateControl.setErrors(error);
                    toDateControl.setErrors(error)
                    return error
                }
                case checkNull(totime) && checkNull(todate) && !notPastTime(todate, totime): {
                    const error = { pastToTime: true }
                    toTimeControl.setErrors(error);
                    return error
                }

                case notNull && !hasSomeInterval(fromdate, todate, fromtime, totime): {
                    const error = { invalidTime: true }
                    fromTimeControl.setErrors(error);
                    toTimeControl.setErrors(error);
                    return error
                }
                default: {
                    one()
                    two()
                    three()
                    four()
                    return null
                }

                    function one() {
                        // From date Control errors
                        if (fromDateControl.invalid && fromDateControl.touched && checkNull(fromdate)) {
                            fromDateControl.hasError('pastFromDate') ? delete fromDateControl.errors.pastFromDate :
                                fromDateControl.hasError('invalidDate') ? delete fromDateControl.errors.invalidDate :
                                    fromDateControl.hasError('undefined') ? delete fromDateControl.errors.undefined : fromDateControl.setErrors(null);
                            fromDateControl.updateValueAndValidity()
                        }



                    }

                    function two() {
                        //To date control errors
                        if (toDateControl.invalid && toDateControl.touched && checkNull(todate)) {
                            toDateControl.hasError('pastFromDate') ? delete toDateControl.errors.pastFromDate :
                                toDateControl.hasError('invalidDate') ? delete toDateControl.errors.invalidDate :
                                    toDateControl.hasError('undefined') ? delete toDateControl.errors.undefined : toDateControl.setErrors(null);
                            toDateControl.updateValueAndValidity()
                        }

                    }

                    function three() {
                        // From time control errors
                        if (fromTimeControl.invalid && fromTimeControl.touched && checkNull(fromtime)) {
                            fromTimeControl.hasError('pastFromTime') ? delete fromTimeControl.errors.pastFromTime :
                                fromTimeControl.hasError('invalidTime') ? delete fromTimeControl.errors.invalidTime :
                                    fromTimeControl.hasError('undefined') ? delete fromTimeControl.errors.undefined : fromTimeControl.setErrors(null);
                            fromTimeControl.updateValueAndValidity()
                        }
                    }

                    function four() {
                        // From time control errors
                        if (toTimeControl.invalid && toTimeControl.touched && checkNull(totime)) {
                            toTimeControl.hasError('pastToTime') ? delete toTimeControl.errors.pastToTime :
                                toTimeControl.hasError('invalidTime') ? delete toTimeControl.errors.invalidTime :
                                    toTimeControl.hasError('undefined') ? delete toTimeControl.errors.undefined : toTimeControl.setErrors(null);
                            toTimeControl.updateValueAndValidity()
                        }

                    }
            }
        }
    }
}



export class FilterDateValidator {

    static validate(FD: any, TD: any): ValidatorFn {
        return (formGroup: AbstractControl): ValidationErrors | null => {
            const fromDateControl = formGroup.get(FD) as FormControl;
            const toDateControl = formGroup.get(TD) as FormControl;

            const fromdate = formGroup.get(FD).value
            const todate = formGroup.get(TD).value

            const notNull = checkNull(fromdate) && checkNull(todate)

            switch (true) {

                case checkNull(todate) && !checkNull(fromdate): {
                    const error = { fromDateRequired: true }
                    fromDateControl.setErrors(error);
                    return error
                }
                case notNull && !validFilterFromToDate(fromdate, todate): {
                    const error = { inValidDate: true }
                    fromDateControl.setErrors(error);
                    toDateControl.setErrors(error)
                    return error
                }

                default: {
                    one()
                    two()
                    return null

                }

            }


            function one() {
                // From date Control errors
                if (fromDateControl.invalid && fromDateControl.touched && checkNull(fromdate)) {
                    fromDateControl.hasError('fromDateRequired') ? delete fromDateControl.errors.fromDateRequired :
                        fromDateControl.hasError('invalidDate') ? delete fromDateControl.errors.invalidDate :
                            fromDateControl.hasError('undefined') ? delete fromDateControl.errors.undefined : fromDateControl.setErrors(null);
                    fromDateControl.updateValueAndValidity()
                }
            }

            function two() {
                // From date Control errors
                if (toDateControl.invalid && toDateControl.touched && checkNull(todate)) {
                    toDateControl.hasError('fromDateRequired') ? delete toDateControl.errors.fromDateRequired :
                        toDateControl.hasError('invalidDate') ? delete toDateControl.errors.invalidDate :
                            toDateControl.hasError('undefined') ? delete toDateControl.errors.undefined : toDateControl.setErrors(null);
                    toDateControl.updateValueAndValidity()
                }
            }

        }



    }
}


/**
 * 
 * @Notes1 First check the  From Date is not the past date;
 * @Notes2 Check the From date and from time .If (from date) is { today} then check the (time to )
 * @Notes3 check 
 */


function notPastDate(value: any): boolean {
    const current = getOBJ();
    const date = getOBJ(value);
    if (date.year >= current.year) {
        if (date.year == current.year) {
            if (date.month >= current.month) {
                if (date.month == current.month) {
                    if (date.date >= current.date) {
                        return true
                    } else {
                        return false
                    }
                } else {
                    return true
                }
            } else {
                return false
            }
        } else {
            return true
        }
    } else {
        return false
    }
}
function notPastTime($date, $time): boolean {
    const from = getOBJ($date);
    const current = getOBJ()

    const hours = getTimeOBJ($time).hours;
    const minutes = getTimeOBJ($time).mins;

    if (notPastDate($date)) {
        if (from.date == current.date) {

            if (hours >= current.hours) {
                if (hours == current.hours) {
                    if (minutes >= current.mins) {
                        return true
                    } else {
                        return false
                    }

                } else {
                    return true
                }

            } else {
                return false
            }

        } else {
            return true
        }
    } else {
        return false
    }

}
function validFromToDate(fromDate, toDate): boolean {
    const from = getOBJ(fromDate);
    const to = getOBJ(toDate)

    if (notPastDate(fromDate) && notPastDate(toDate)) {

        if (from.year <= to.year) {
            if (from.year == to.year) {
                if (from.month <= to.month) {
                    if (from.month == to.month) {
                        if (from.date <= to.date) {
                            return true
                        } else {
                            return false
                        }
                    } else {
                        return true
                    }
                } else {
                    return true
                }

            } else {
                return true
            }

        } else {
            return false
        }

    } else {
        return false
    }
}

function validFilterFromToDate(fromDate, toDate): boolean {
    const from = getOBJ(fromDate);
    const to = getOBJ(toDate)
    if (from.year <= to.year) {
        if (from.year == to.year) {
            if (from.month <= to.month) {
                if (from.month == to.month) {
                    if (from.date <= to.date) {
                        return true
                    } else {
                        return false
                    }
                } else {
                    return true
                }
            } else {
                return true
            }

        } else {
            return true
        }

    } else {
        return false
    }
}


function hasSomeInterval(FD, TD, FT, TT) {

    const from = getOBJ(FD);
    const to = getOBJ(TD);
    const fromTime = getTimeOBJ(FT);
    const toTime = getTimeOBJ(TT)

    if (notPastDate(FD) && notPastDate(TD)) {
        if (from.date == to.date) {
            if (fromTime.hours <= toTime.hours) {
                if (fromTime.hours == toTime.hours) {
                    if (fromTime.mins <= toTime.mins) {
                        return true
                    } else {
                        return false
                    }
                } else {
                    return true
                }
            } else {
                return false
            }
        } else {
            return true
        }
    } else {
        return false
    }


}





function checkUpcoming(SD) {
    const start = getOBJ(SD)
    const current = getOBJ()

    if (start.year >= current.year) {
        if (start.year == current.year) {
            if (start.month >= current.month) {
                if (start.month == current.month) {
                    if (start.date >= current.date) {
                        if (start.date == current.date) {
                            if (start.hours >= current.hours) {
                                if (start.hours == current.hours) {
                                    if (start.mins >= current.mins) {
                                        if (start.mins == current.mins) {
                                            return false
                                        } else {
                                            return true
                                        }

                                    } else {
                                        return false
                                    }
                                } else {
                                    return true
                                }
                            } else {
                                return false
                            }
                        } else {
                            return true
                        }
                    } else {
                        return false
                    }
                } else {
                    return true
                }
            } else {
                return false
            }
        } else {
            return true
        }
    } else {
        return false
    }
}


function checkExpired(ED) {
    const end = getOBJ(ED)
    const current = getOBJ()

    if (end.year >= current.year) {
        if (end.year == current.year) {
            if (end.month >= current.month) {
                if (end.month == current.month) {
                    if (end.date >= current.date) {
                        if (end.date == current.date) {
                            if (end.hours >= current.hours) {
                                if (end.hours == current.hours) {
                                    if (end.mins >= current.mins) {
                                        if (end.mins == current.mins) {
                                            return false
                                        } else {
                                            return true
                                        }

                                    } else {
                                        return false
                                    }
                                } else {
                                    return true
                                }
                            } else {
                                return false
                            }
                        } else {
                            return true
                        }
                    } else {
                        return false
                    }
                } else {
                    return true
                }
            } else {
                return false
            }
        } else {
            return true
        }
    } else {
        return false
    }
}