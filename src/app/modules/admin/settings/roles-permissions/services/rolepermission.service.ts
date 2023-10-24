import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ApiService } from 'app/core/services/api.service';
import { PaginationDTO } from 'app/shared/models/role-permission/paginationDTO';
import { map, Observable } from 'rxjs';
import { ApiAdapter } from '../../manage-roles/services/api.adapter.service';
import { checkIsNull } from 'app/core/helpers/utils';

@Injectable({
  providedIn: 'root'
})

export class RolepermissionService {

  

  constructor(
    private apiService: ApiService,
    private roleAdapter: ApiAdapter,) {

  }
 
  getRoleslist(permDTO : PaginationDTO): Observable<any> {

    let params  = new HttpParams()
    for (let data in permDTO){
      if(checkIsNull(permDTO[data])){
        params = params.append(data , permDTO[data])
      }
    }
    return this.apiService.get(`role`,params).pipe(map(response => this.roleAdapter.adapt(response)));
  }

  getlist(id): Observable<any> {
    return this.apiService.get(`permission/detail/${id}`);
  }

  status(body, status) {
    if (status != 2) {
      return this.apiService.put(`role/status`, body).pipe(map(response => this.roleAdapter.adapt(response)));
    } else return this.apiService.put(`role/delete/${body.id}`).pipe(map(response => this.roleAdapter.adapt(response)));
  }

  update(body){
    return this.apiService.post(`permission`, body);
  }
}
