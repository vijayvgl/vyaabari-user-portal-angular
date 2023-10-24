import { HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { checkNull } from 'app/core/custom-validations/return-functions';
import { ApiService } from 'app/core/services/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  readonly notificationList$: EventEmitter<any> = new EventEmitter<any>();
  constructor(private apiservice: ApiService) { } 

    getNotificationList(): Observable<any> {
    return this.apiservice.get(``)
  }

  readNotification(dto: any): Observable<any> {
    let params = new HttpParams()
    for (let data in dto) {
      if (checkNull(dto[data])) {
        params = params.append(data, dto[data])
      }
    }
    return this.apiservice.post(``, params)
  }
}
