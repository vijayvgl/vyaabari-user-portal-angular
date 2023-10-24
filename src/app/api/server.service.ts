import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

export type ServerType = 'authApiServerAddress' | 'dmtApiServerAddress' | 'cacheApiServerAddress' | 'rechargeApiServerAddress' | 'epanelBaseUrl' | 'travelBaseUrl'

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) {

  }
  get(server: ServerType, path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment[server]}${path}`, { params });
  }

  put(server: ServerType, path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment[server]}${path}`,
      body
    );
  }

  post(server: ServerType, path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment[server]}${path}`,
      body
    );
  }

  emppost(server: ServerType, path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment[server]}${path}`,
      body
    );
  }

  delete(server: ServerType, path): Observable<any> {
    return this.http.delete(
      `${environment[server]}${path}`
    );
  }
}
