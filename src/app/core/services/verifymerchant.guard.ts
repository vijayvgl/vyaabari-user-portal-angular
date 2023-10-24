import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { get } from 'lodash';
import { Observable } from 'rxjs';
import { PORTALTYPE } from '../helpers/enum.helper';
import { decodedToken } from '../helpers/token.helper';

@Injectable({
  providedIn: 'root'
})
export class VerifymerchantGuard implements CanActivate {
  constructor(
    private router: Router,
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const getMerchantToken = window.sessionStorage.getItem("PAYOUTMERCHANTJWTTOKEN");
    let checkOTP = sessionStorage.getItem("ISOTPVERIFIED") ? true : false;
    const token = decodedToken();
    let portalType = get(token, "portal") ? get(token, "portal") : "";
    if ((getMerchantToken) && checkOTP) {
      if (portalType == PORTALTYPE.MERCHANT && getMerchantToken) {
        this.router.navigate(["/merchant/dashboard"]);
        return false;
      } else {
        this.router.navigate([`/merchant`]);
        return false;
      }
    } else {
      return true;
    }
  }

}
