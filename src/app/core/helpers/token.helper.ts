
import { JwtHelperService } from "@auth0/angular-jwt";
import { checkNull } from "../custom-validations/return-functions";
const helper = new JwtHelperService();

export function hasToken() {
  return !!getToken();
}

export function getToken(): String {
  switch (true) {
    case checkNull(window.sessionStorage['PAYOUTADMINJWTTOKEN']): return window.sessionStorage['PAYOUTADMINJWTTOKEN'];
    case checkNull(window.sessionStorage['PAYOUTMERCHANTJWTTOKEN']): return window.sessionStorage['PAYOUTMERCHANTJWTTOKEN'];
    default: return window.sessionStorage['PAYOUTJWTTOKEN']
  }
}

export function saveToken(token: String, name) {
  window.sessionStorage[name] = token;
}

export function destroyToken() {


  window.sessionStorage.removeItem('PAYOUTJWTTOKEN');
  window.sessionStorage.removeItem('PAYOUTADMINJWTTOKEN');
  window.sessionStorage.removeItem('PAYOUTMERCHANTJWTTOKEN');
  window.sessionStorage.removeItem('sesUsr');
  window.sessionStorage.removeItem('sessionUser');
  window.sessionStorage.removeItem('ISOTPVERIFIED');
  window.sessionStorage.removeItem('VERIFYJWTTOKEN');
}

export function decodedToken() {
  var myRawToken = getToken() ?? '';
  return helper.decodeToken(String(myRawToken));
}

export function isTokenExpired(): boolean {
  const myRawToken = getToken().toString();
  return helper.isTokenExpired(myRawToken);
}


export function tokenExpirationDate(): Date {
  const myRawToken = getToken().toString();
  return helper.getTokenExpirationDate(myRawToken);
}

export function clearSessionData() {
  window.sessionStorage.setItem('sesUsr', JSON.stringify({}));
  // window.sessionStorage.setItem('TGLANG', '');
  // window.sessionStorage.setItem('TGDATEFORMAT', '');
  // window.sessionStorage.setItem('TGDATERAW', '');
  // window.sessionStorage.setItem('TGDATESEP', '');
  // window.sessionStorage.setItem('TGTIMEFORMAT', '');
  // window.sessionStorage.setItem('TGTHEME', '');
  // window.sessionStorage.setItem('TGFONT', '');
  window.sessionStorage.setItem('ISOTPVERIFIED', '');
}