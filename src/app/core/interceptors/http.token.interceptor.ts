import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getToken } from '../helpers/token.helper';
import { environment } from 'environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headersConfig = {
      //'Content-Type': 'application/json',
      // 'Accept': 'application/json'
    };
    const token = getToken();
    const cashFreeToken = window.sessionStorage.getItem('VERIFYJWTTOKEN');
    const ipURL = 'https://api.ipify.org?format=json'
    if (token && req.url != ipURL) {
      headersConfig['Authorization'] = `Bearer ${token}`;
    }
    // else if(cashFreeToken && req.url.indexOf('cash-free') >= 0){
    //   headersConfig['Authorization'] = `Bearer ${cashFreeToken}`;
    // }
    const request = req.clone({ setHeaders: headersConfig });
    return next.handle(request);
  }
}

/**
 * 
 * const token = window.sessionStorage.getItem('TGJWTTOKEN');
  if (req.url.indexOf('payout/v1/authorize') >= 0 || req.url.indexOf('https://sandbox.cashfree.com/verification/') >= 0) {
        headersConfig['X-Client-Id'] = `${environment.cliendId}`,
        headersConfig['X-Client-Secret'] = `${environment.cliendSecret}`
    }else{
      if(token && req.url.indexOf('payout/v1') < 0 && req.url.indexOf('https://sandbox.cashfree.com/verification/') < 0){
        headersConfig['Authorization'] = `Bearer ${token}`;
      }else if(cashFreeToken && req.url.indexOf('payout/v1') >= 0 && req.url.indexOf('https://sandbox.cashfree.com/verification/') < 0){
        headersConfig['Authorization'] = `Bearer ${cashFreeToken}`;
      }
       
    }
 */