import { Injectable } from '@angular/core';
import { IAPI } from 'app/api/api.model';
import { ServerService } from 'app/api/server.service';
import { Observable, map } from 'rxjs';

interface SignInData {
  ip: any
  mac_id: any
  password: any
  user_id: any
  account_type_ref_id: any
}

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(
    private apiservice: ServerService
  ) { }




  signIn(data: SignInData): Observable<IAPI> {
    return this.apiservice.post('authApiServerAddress', '/api/auth/Login', data)
  }

  lookUp(data: any): Observable<IAPI> {
    return this.apiservice.post('authApiServerAddress', '/api/auth/Lookup', data)
  }

  verifyOTP(data: any): Observable<IAPI> {
    return this.apiservice.post('authApiServerAddress', '/api/auth/AuthOTPCheck', data)
  }

  sendOTPForgotPassword(data: any): Observable<IAPI> {
    return this.apiservice.post('authApiServerAddress', '/api/auth/SendOTPForForgetPWD', data)
  }

  verifyOTPForgotPassword(data: any): Observable<IAPI> {
    return this.apiservice.post('authApiServerAddress', '/api/auth/ForgotPassword', data)
  }

  changePassword(data: any): Observable<IAPI> {
    return this.apiservice.post('authApiServerAddress', '/api/auth/ChangePassword', data)
  }



}
