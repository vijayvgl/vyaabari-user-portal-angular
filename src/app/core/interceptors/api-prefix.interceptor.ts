import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

/**
 * Prefixes all requests not starting with `http[s]` with `environment.apiURL`.
 */

@Injectable({
  providedIn: 'root'
})
export class ApiPrefixInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let urlWithPrefix = '';
    if (!/^(http|https):/i.test(request.url)) {
      urlWithPrefix = environment.apiURL + request.url;

    } else {
      urlWithPrefix = request.url;
    }

    let pathName = window.location.pathname;
    let splitPath = pathName.split('/');
    // this.checkEndPoint(splitPath);
    let backEndAPI = this.returnEndPoint(splitPath);
    let hostDomain = window.location.hostname;
    let parts = hostDomain.split('.');
    var tenant = parts.length >= 3 ? (parts.includes('www') ? parts[1] : parts[0]) : '';
    let urlTenant = urlWithPrefix.replace('{tenant}', tenant);
    let urlWithEndPoint = urlTenant.replace('{endPoint}', backEndAPI);
    if (!request.url.includes('/assets/i18n/') && !request.url.includes('assets/icons/')) {
      request = request.clone({ url: urlWithEndPoint });
    }
    return next.handle(request);
  }

  returnEndPoint(splitPath) {

    return splitPath.includes('merchant') ? '' : ''
  }

}
