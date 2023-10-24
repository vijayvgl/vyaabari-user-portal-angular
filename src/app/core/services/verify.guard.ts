import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { get } from 'lodash';
import { Observable } from 'rxjs';
import { decodedToken } from '../helpers/token.helper';
import { PORTALTYPE } from '../helpers/enum.helper';
import { checkNull } from '../custom-validations/return-functions';

@Injectable({
  providedIn: 'root'
})
export class VerifyGuard implements CanActivate {
  constructor(
    private router: Router,
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const sessionId = window.sessionStorage.getItem('sid')
    if (checkNull(sessionId)) {
      if (checkNull(sessionId)) {
        this.router.navigate(["/dashboard"]);
        return false;
      } else {
        this.router.navigate([`/`]);
        return false;
      }
    } else {
      return true;
    }
  }

}
