import { Injectable } from '@angular/core';
import { decodedToken } from '../helpers/token.helper';
import { get } from "lodash";
import { constant } from '../helpers/global.helper';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appSetting = {
    portalType: '',
    customerId: '',
    branchId: '',
    userType: '',
    userId: '',
    roleId: '',
    roletype: '',
    employeeId: '',
    permission: '',
    domain: '',
    language: '',
    timezone: '',
    currencyCode: '',
    currencySymbol: '',
    themeColour: '',
    themeFont: '',
    dateSeparator: '',
    dateRawFormat: '',
    dateFormat: '',
    timeFormat: '',
  };

  constructor(
  ) {


  }

  init() {
    const token = decodedToken();
    this.appSetting.portalType = get(token, 'portal') ? get(token, 'portal') : '';
    this.appSetting.userType = get(token, 'user_type') ?? '';
    this.appSetting.userId = get(token, 'acl_user_id') ?? '';
    this.appSetting.customerId = get(token, 'customer_id') ?? '';
    this.appSetting.branchId = get(token, 'branch_id') ?? '';
    this.appSetting.domain = get(token, 'domain_name') ?? '';
    this.appSetting.roleId = get(token, 'acl_role_id') ?? '';
    this.appSetting.roletype = get(token, 'employee_type') ?? '';
    this.appSetting.employeeId = get(token, 'employee_id') ?? '';
    this.appSetting.permission = get(token, 'permission') ?? '';
    this.appSetting.language = this.storedConfig.lang ? this.storedConfig.lang : get(token, 'language') ? get(token, 'language') : 'en';
    this.appSetting.timezone = get(token, 'timezone') ?? '';
    this.appSetting.currencyCode = get(token, 'currency_code') ?? '';
    this.appSetting.currencySymbol = get(token, 'currency_symbol') ?? '';
    this.appSetting.themeColour = this.storedConfig.themeColor ? this.storedConfig.themeColor : get(token, 'theme_colour') ? get(token, 'theme_colour') : '';
    this.appSetting.themeFont = this.storedConfig.themeFont ? this.storedConfig.themeFont : get(token, 'theme_font') ? get(token, 'theme_font') : '';
    this.appSetting.dateSeparator = this.storedConfig.dateSep ? this.storedConfig.dateSep : get(token, 'date_separator') ? get(token, 'date_separator') : '';
    this.appSetting.dateRawFormat = this.storedConfig.dateRawFormat ? this.storedConfig.dateRawFormat : get(token, 'date_format') ? get(token, 'date_format') : '';
    this.appSetting.timeFormat = this.storedConfig.timeFormat ? this.storedConfig.timeFormat : get(token, 'time_format') ? get(token, 'time_format') : '';
    this.appSetting.dateFormat = this.storedConfig.dateRawFormat ? this.storedConfig.dateRawFormat : this.appSetting.dateRawFormat ? this.appSetting.dateRawFormat : '';
    this.appSetting.dateFormat = this.appSetting.dateFormat.replace(/\s/g, this.appSetting.dateSeparator);
  }

  get dateFormat() {
    return this.appSetting.dateRawFormat;
  }

  get portalType() {
    return this.appSetting.portalType;
  }

  get customerId() {
    return this.appSetting.customerId;
  }

  get branchId() {
    return this.appSetting.branchId;
  }

  get domain() {
    return this.appSetting.domain;
  }

  get userType() {
    return this.appSetting.userType;
  }

  get userId() {
    return this.appSetting.userId;
  }

  get roleId() {
    return this.appSetting.roleId;
  }

  get employeeId() {
    return this.appSetting.employeeId;
  }

  get permission() {
    return this.appSetting.permission;
  }

  get language() {
    return this.appSetting.language;
  }

  get timezone() {
    return this.appSetting.timezone;
  }

  get currencyCode() {
    return this.appSetting.currencyCode;
  }
  get currencySymbol() {
    return this.appSetting.currencySymbol;
  }

  get themeColour() {
    return this.appSetting.themeColour;
  }

  get themeFont() {
    return this.appSetting.themeFont;
  }

  get dateSeparator() {
    return this.appSetting.dateSeparator;
  }

  get dateRawFormat() {
    return this.appSetting.dateRawFormat;
  }

  get timeFormat() {
    return this.appSetting.timeFormat;
  }

  get storedConfig() {
    return {
      lang: window.sessionStorage.getItem(constant().app.config.lang),
      dateFormat: window.sessionStorage.getItem(constant().app.config.dateFormat),
      dateRawFormat: window.sessionStorage.getItem(constant().app.config.dateRawFormat),
      dateSep: window.sessionStorage.getItem(constant().app.config.dateSep),
      timeFormat: window.sessionStorage.getItem(constant().app.config.timeFormat),
      themeColor: window.sessionStorage.getItem(constant().app.config.themeColor),
      themeFont: window.sessionStorage.getItem(constant().app.config.themeFont),
    };
  }



  // setDateRawFormat(datefm: string) {
  //   window.sessionStorage.setItem(constant().app.config.dateRawFormat, datefm);
  // }

  // setDateSep(datesep: string) {
  //   window.sessionStorage.setItem(constant().app.config.dateSep, datesep);
  // }

  // setTimeFormat(timefm: string) {
  //   window.sessionStorage.setItem(constant().app.config.timeFormat, timefm);
  // }
  // setThemeColor(temecolor: string) {
  //   window.sessionStorage.setItem(constant().app.config.themeColor, temecolor);
  // }
  // setThemefont(temefont: string) {
  //   window.sessionStorage.setItem(constant().app.config.themeFont, temefont);
  // }
  // setLanguage(temelanguage: string) {
  //   window.sessionStorage.setItem(constant().app.config.lang, temelanguage);
  // }
}
