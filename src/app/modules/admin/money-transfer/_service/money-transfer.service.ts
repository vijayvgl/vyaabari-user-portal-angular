import { Injectable } from '@angular/core';
import { IAPI } from 'app/api/api.model';
import { ServerService } from 'app/api/server.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoneyTransferService {

  constructor(
    private apiservice: ServerService
  ) { }



  getCustomerDetails(data: any): Observable<IAPI> {
    return this.apiservice.post('dmtApiServerAddress', '/api/paysprint/GetCustomerInfo', data)
  }



}
