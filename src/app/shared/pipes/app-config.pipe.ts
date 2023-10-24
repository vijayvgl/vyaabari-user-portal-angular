import { Pipe, PipeTransform } from "@angular/core";
import {
    DomSanitizer,
    SafeHtml,
    SafeStyle,
    SafeScript,
    SafeUrl,
    SafeResourceUrl,
} from "@angular/platform-browser";
import { format, isValid } from "date-fns";
import * as moment from "moment";
import { getDateFnsFormat, getDateTimeFnsFormat, getTimeFnsFormat } from 'app/core/helpers/app-config.helper';

@Pipe({ name: 'serverDate' })
export class AppServerDatePipe implements PipeTransform {
    transform(value: string): string {
        value = value ? value : '';
        return value.length > 0 ? format(new Date(value), 'YYYY-MM-DD') : '';
    }
}
@Pipe({
    name: "safeHtml",
})
export class SafePipe {
    constructor(protected sanitizer: DomSanitizer) { }
    transform(htmlString: string): any {
        return this.sanitizer.bypassSecurityTrustHtml(htmlString);
    }
}


@Pipe({ name: 'displayDate' })
export class AppDisplayDatePipe implements PipeTransform {
    transform(value: string): string {
        var dateValue = new Date(value);
        return isValid(dateValue) ? format(dateValue, getDateFnsFormat()) : '';
    }
}

@Pipe({ name: 'displayTime' })
export class AppDisplayTimePipe implements PipeTransform {
    transform(value: string): string {
        let formattedDate = moment().format('YYYY-MM-DD');
        let formattedTime = value;
        let format = getTimeFnsFormat();
        let dispTime = moment(`${formattedDate} ${formattedTime}`).format(format);
        return value ? dispTime : '';
    }
}

