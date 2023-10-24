import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, Params } from "@angular/router";
import { decodedToken } from '../helpers/token.helper';

interface IRoutePart {
  title: string,
  breadcrumb: string,
  params?: Params,
  url: string,
  urlSegments: any[]
}

@Injectable({
  providedIn: 'root'
})
export class RoutePartsService {
  public routeParts: IRoutePart[];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  generateRouteParts(snapshot: ActivatedRouteSnapshot): IRoutePart[] {
    var routeParts = <IRoutePart[]>[];
    const getToken = window.sessionStorage.getItem('PRINTAPPADMIN');
    let checkOTP = sessionStorage.getItem('ISOTPVERIFIED') ? true : false;
    const token = decodedToken();
   
    if (snapshot) {
   
      if (snapshot.firstChild) {
        routeParts = routeParts.concat(this.generateRouteParts(snapshot.firstChild));
      }
      if (snapshot.data['title'] && snapshot.url.length) {
        routeParts.push({
          title: snapshot.data['title'],
          breadcrumb: snapshot.data['breadcrumb'],
          url: snapshot.url[0].path,
          urlSegments: snapshot.url,
          params: snapshot.params
        });
      }
      if (getToken && checkOTP) {
        routeParts = routeParts.filter(x =>  x.title != "Signin");
        routeParts = routeParts.filter(x =>  x.title != "Login With OTP");
        routeParts = routeParts.filter(x =>  x.title != "Forgot password");
        routeParts = routeParts.filter(x =>  x.title != "Reset Password");
        }
    }
    return routeParts;
  }
}