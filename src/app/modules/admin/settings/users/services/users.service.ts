import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiAdapter } from './api.adapter.service';
import { Role } from 'app/shared/models/role/role.model';
import { User } from 'app/shared/models/user/user.model';
import { IUserAPI } from '../model/userapi.model';
import { ApiService } from 'app/core/services/api.service';
import { checkIsNull } from 'app/core/helpers/utils';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  public recordAddedSubject = new BehaviorSubject<User[]>([{}] as User[]);
  public recordUpdatedSubject = new BehaviorSubject<User[]>([{}] as User[]);
  constructor(
    private adapter: ApiAdapter,
    private apiService: ApiService,
  ) {

  }


  // create new record
  create(model: User): Observable<IUserAPI> {
    let formData = { 
    'role_id': model.roleId,
    'name': model.name,
    'mobileno':model.mobileNumber,
    'email':model.email,
    'password': model.password
    }
    return this.apiService.post(`users/create`, formData).pipe(map(response => this.adapter.adapt(response)));
  }

  update(body): Observable<IUserAPI> {
    return this.apiService.put(`users/update`, body).pipe(map(response => this.adapter.adapt(response)));
  }

  // active & delete & deactive 

  status(body,status): Observable<IUserAPI> {
    if(status != 2){
      return this.apiService.put(`users/status`, body).pipe(map((response) => this.adapter.adapt(response)));
    }else{
      return this.apiService.put(`users/delete/${body.id}`).pipe(map((response) => this.adapter.adapt(response)));
    }
     
  }



  // list with filtering pagination
  getList(paginationDTO): Observable<IUserAPI> {
    let params = new HttpParams();
    for (let key in paginationDTO) {
      if(checkIsNull(paginationDTO[key])){
      params = params.set(key, paginationDTO[key]);
      }
    }
    return this.apiService.get(`users`, params).pipe(map(response => this.adapter.adapt(response)));
  }

  getLeads(paginationDTO): Observable<any> {
    let params = new HttpParams();
    for (let key in paginationDTO) {
      params = params.set(key, paginationDTO[key]);
    }
    return this.apiService.get(`admin/lead/list`, params);
  }


  getRecordAddedSub(): Observable<User[]> {
    return this.recordAddedSubject.asObservable();
  }
  getRecordUpdatedSub(): Observable<User[]> {
    return this.recordUpdatedSubject.asObservable();
  }

  getOne(id):Observable<IUserAPI>{
    return this.apiService.get(`users/view/${id}`).pipe(map(response => this.adapter.adapt(response)))

  }

}
