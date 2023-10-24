import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
function checkNull(data: any) {
  return (
    data != null &&
    data != undefined &&
    data != '' &&
    (Array.isArray(data) ? data.length > 0 : true)
  );
}


@Injectable({
  providedIn: 'root'
})
export class SelectBoxService {

  constructor(
    private http: HttpClient
  ) { }



  getOptions(endpoint: String, params?: any, queryParams?: any): Observable<any> {
    const url: any = checkNull(params) ? `${endpoint}/${params}` : endpoint;
    let query: any = new HttpParams()
    for (let data in queryParams) {
      if (checkNull(queryParams[data])) {
        query = query.append(data, queryParams[data])
      }
    }
    return this.http.get(url, { observe: 'response', params: query })
  }

}
