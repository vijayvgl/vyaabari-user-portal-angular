import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'environments/environment';
import { decodedToken } from '../helpers/token.helper';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  token: any;
  constructor(
    private http: HttpClient,
  ) {
    this.token = decodedToken();
   }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.apiURL}${path}`, { params });
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.apiURL}${path}`,
      body
    );
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.apiURL}${path}`,
      body
    );
  }


  delete(path): Observable<any> {
    return this.http.delete(
      `${environment.apiURL}${path}`
    );
  }



  downloadFile(path: string, paramsConfig = { fileName: 'E' }): Observable<HttpEvent<Blob>> {

    if (!paramsConfig.fileName) {
      console.error('mention fileName with your params');
      return;
    }

    let params = new HttpParams();
    for (let key in paramsConfig) {
      params = params.set(key, paramsConfig[key]);
    }

    return this.http.request(new HttpRequest(
      'GET',
      `${environment.apiURL}${path}`,
     
      params,
      {
        reportProgress: true,
        responseType: 'blob'
      }));
  }


 

  FilterDownloadFile(path: string, params: HttpParams = new HttpParams(),paramsConfig = { fileName: 'E' }): Observable<HttpEvent<Blob>> {
    return this.http.request(new HttpRequest(
      'GET',
      `${environment.apiURL}${path}`,
      {
        params: params,
        reportProgress: true,
        responseType: 'blob'
      }));
  }

  uploadFile(file: Blob, path = "upload"): Observable<HttpEvent<void>> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.request(new HttpRequest(
      'POST',
      `${environment.apiURL}${path}`,
      formData,
      {
        reportProgress: true
      }));
  }
  
}
