import { get } from "lodash";
import { constant } from '../helpers/global.helper';
import { decodedToken } from '../helpers/token.helper';


var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];


var daysShort = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
];

const monthFullNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const monthNames = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
];

export function getDateFnsFormat() {
    var configDF = appSetting().dateFormat;
    var dateFnsFormat = '';
    if (configDF == 'DD-MM-YYYY') {
        dateFnsFormat = 'DD-MM-YYYY';
    }

    if (configDF == 'DD/MM/YYYY') {
        dateFnsFormat = 'DD/MM/YYYY';
    }

    if (configDF == 'YYYY-MM-DD') {
        dateFnsFormat = 'YYYY-MM-DD';
    }

    if (configDF == 'YYYY/MM/DD') {
        dateFnsFormat = 'YYYY/MM/DD';
    }

    if (configDF == 'MM-DD-YYYY') {
        dateFnsFormat = 'MM-DD-YYYY';
    }

    if (configDF == 'MM/DD/YYYY') {
        dateFnsFormat = 'MM/DD/YYYY';
    }

    return dateFnsFormat;
}


export function getUniqDateFnsFormat() {
    var configDF = appSetting().dateFormat;
    var dateFnsFormat = '';
    if (configDF == 'DD-MM-YYYY') {
        dateFnsFormat = 'DD-MMM-YYYY';
    }

    if (configDF == 'DD/MM/YYYY') {
        dateFnsFormat = 'DD-MMM-YYYY';
    }

    if (configDF == 'YYYY-MM-DD') {
        dateFnsFormat = 'YYYY-MMM-DD';
    }

    if (configDF == 'YYYY/MM/DD') {
        dateFnsFormat = 'YYYY-MMM-DD';
    }

    if (configDF == 'MM-DD-YYYY') {
        dateFnsFormat = 'MMM-DD-YYYY';
    }

    if (configDF == 'MM/DD/YYYY') {
        dateFnsFormat = 'MMM-DD-YYYY';
    }

    return dateFnsFormat;
}



export function getDateTimeFnsFormat() {
    return `${getDateFnsFormat()} ${getTimeFnsFormat()}`;
}

export function getFullDayName(d: Date) {
    return days[d.getDay()] ?? "";
}

export function getTimeFnsFormat() {
    return appSetting().timeFormat == '12' ? 'hh:mm:ss a' : 'HH:mm:ss';
}

export function appSetting() {
    const token = decodedToken();
    var dateSep = storedConfig().dateSep ? storedConfig().dateSep : get(token, 'date_separator') ? get(token, 'date_separator') : '';
    var dateRawFor = storedConfig().dateRawFormat ? storedConfig().dateRawFormat : get(token, 'date_format') ? get(token, 'date_format') : '';
    var timeFor = storedConfig().timeFormat ? storedConfig().timeFormat : get(token, 'time_format') ? get(token, 'time_format') : '';
    var dateFor = storedConfig().dateRawFormat ? storedConfig().dateRawFormat : dateRawFor ? dateRawFor : '';
    dateFor = dateRawFor.replace(/\s/g, dateSep);
    return {
        dateSeparator: dateSep,
        dateRawFormat: dateRawFor,
        timeFormat: timeFor,
        dateFormat: dateFor
    }
}



function storedConfig() {
    return {
        dateFormat: window.sessionStorage.getItem(constant().app.config.dateFormat),
        dateRawFormat: window.sessionStorage.getItem(constant().app.config.dateRawFormat),
        dateSep: window.sessionStorage.getItem(constant().app.config.dateSep),
        timeFormat: window.sessionStorage.getItem(constant().app.config.timeFormat),
    };
}