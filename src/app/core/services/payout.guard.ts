import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { checkNull } from '../custom-validations/return-functions';
import { SessionUserService } from 'app/api/session-user.service';

@Injectable({
  providedIn: 'root'
})
export class PayoutAuthgaurdGuard implements CanActivate {

  constructor(
    private router: Router,
    private userService: SessionUserService
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.loggedIn()
  }


  loggedIn() {
    const sessionId = window.sessionStorage.getItem('sid')
    if (checkNull(sessionId)) {
      return true
    } else {
      this.userService.logoutRouter()
      return false
    }
  }

}



