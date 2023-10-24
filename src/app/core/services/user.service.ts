import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { saveToken, destroyToken, hasToken, decodedToken, clearSessionData } from '../helpers/token.helper';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { get } from "lodash";
import { PORTALTYPE } from "../helpers/enum.helper";
import { IAPI } from 'app/shared/models/API/api.interface';
import { SessionAdapter } from 'app/shared/models/session-models/session.adapter';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject = new BehaviorSubject<any>({} as any);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isScrollToTop = new Subject();
  portalType = '';

  // settings routing restriction

  public isInSettingsMenu = new Subject();

  // sos notification

  public arrayOfSosSub = new Subject();

  //nomovement notification
  public arrayOfNomovementSub = new ReplaySubject(1000);

  // patient details notification

  public arrayOfPatientSub = new ReplaySubject(1000);


  constructor(
    private apiService: ApiService,
    private router: Router,
    private sessionAdapter: SessionAdapter
  ) {

    this.isAuthenticatedSubject.next(hasToken());
    this.currentUserSubject.next(this.getSessionUser());

  }

  // Verify JWT in localstorage with server & load user's info.
  // This runs once on application startup.
  signin(formData): Observable<IAPI> {
    return this.apiService.post(`auth/login`, formData).pipe(map((ele: any) => this.sessionAdapter.adaptAdmin(ele)))
  }

  forgetpassword(formData): Observable<IAPI> {
    return this.apiService.post(`/forget`, formData).pipe(map(ele => this.sessionAdapter.forgotAdapt(ele)));
  }

  resetPassword(formData): Observable<any> {
    return this.apiService.post(`reset`, formData).pipe(map(ele => this.sessionAdapter.resetAdapt(ele)));;
  }

  otpVerify(formData, type?: string): Observable<any> {
    return this.apiService.post(`${type}/login`, formData)
  }




  setAuth(user: any, name: any) {
    // Save JWT sent from server in localstorage
    saveToken(user.token, name);
    window.sessionStorage.setItem('sessionUser', JSON.stringify(user));
    // Set current user data into observable
    this.currentUserSubject.next(user);
    // Set isAuthenticated to true

    this.isAuthenticatedSubject.next(true);
  }

  purgeAuth() {
    // Remove JWT from localstorage
    destroyToken();
    clearSessionData();
    // Set current user to an empty object
    this.currentUserSubject.next({} as any);
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);

  }





  chagePassword(model: any): Observable<any> {
    const formData = new FormData();
    const token = decodedToken();
    formData.append('old_password', model.oldPassword);
    formData.append('new_password', model.newPassword);
    formData.append('email', get(token, 'aud'));
    return this.apiService.post('changepassword', formData);
  }

  getCurrentUser(): any {
    return JSON.parse(window.sessionStorage.getItem('sessionUser'));
  }


  get isLoggedIn() {
    return this.isAuthenticatedSubject.asObservable();
  }

  logout() {
    this.getPortalType();
    this.purgeAuth();
    this.goToLogin();
  }

  getSessionUser(): any {
    return JSON.parse(window.sessionStorage.getItem('sessionUser'));
  }


  goToLogin() {
    if (this.portalType == PORTALTYPE.ADMIN) {
      this.router.navigate(['/']);
    } else if (this.portalType == PORTALTYPE.MERCHANT) {
      this.router.navigate(['/merchant']); //default
    } else {
      this.router.navigate(['/']);
    }
  }



  getPortalType() {
    const token = decodedToken();
    this.portalType = get(token, 'portal') ?? '';
  }


  pushSosNotifies(sos) {
    this.arrayOfSosSub.next(sos)
  }

}
