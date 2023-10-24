import { Injectable } from "@angular/core";
import { HttpParams } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";
import { ApiAdapter } from "./api.adapter.service";
import { Role } from "app/shared/models/role/role.model";
import { IRoleAPI } from "../model/roleapi.model";
import { ApiService } from "app/core/services/api.service";
import { checkIsNull } from "app/core/helpers/utils";

@Injectable({
  providedIn: "root",
})
export class RoleService {
  public recordAddedSubject = new BehaviorSubject<Role[]>([{}] as Role[]);
  public recordUpdatedSubject = new BehaviorSubject<Role[]>([{}] as Role[]);
  public userId: any = 0;
  constructor(private adapter: ApiAdapter, private apiService: ApiService) { }

  // create new record
  create(model: Role): Observable<IRoleAPI> {
    const formData = {
    "name":(model.name).replace(/\s+/g, ' ').trim()
    };
    return this.apiService
      .post(`role/create`, formData)
      .pipe(map((response) => this.adapter.adapt(response)));
  }

  // update form data
  // update(model: Role): Observable<IRoleAPI> {
  //   let formData = new FormData();
  //   formData.append("role_name", model.name);
  //   formData.append("acl_role_id", model.id);
  //   return this.apiService
  //     .put(`role/update`, formData)
  //     .pipe(map((response) => this.adapter.adapt(response)));
  // }

  update(body): Observable<IRoleAPI> {
    return this.apiService.put(`role/update`, body).pipe(map((response) => this.adapter.adapt(response)));
  }

  // active & delete & deactive

  status(body, status) {
    if (status != 2) {
      return this.apiService.put(`role/status`, body).pipe(map((response) => this.adapter.adapt(response)));
    } else return this.apiService.put(`role/delete/${body.id}`).pipe(map((response) => this.adapter.adapt(response)));
  }

  // get by One using ID - for edit form or view single record
  getOne(id: any): Observable<IRoleAPI> {
    return this.apiService
      .get(`role/view/${id}`)
      .pipe(map((response) => this.adapter.adapt(response)));
  }


  getRecordAddedSub(): Observable<Role[]> {
    return this.recordAddedSubject.asObservable();
  }
  
  getRecordUpdatedSub(): Observable<Role[]> {
    return this.recordUpdatedSubject.asObservable();
  }


  // list with filtering pagination
  getList(paginationDTO): Observable<IRoleAPI> {
    let params = new HttpParams();
    for (let key in paginationDTO) {
      if(checkIsNull(paginationDTO[key])){
        params = params.set(key, paginationDTO[key]);
        }
    }
    return this.apiService.get(`role`, params).pipe(map(response => this.adapter.adapt(response)));
  }


  getAllList(paginationDTO): Observable<IRoleAPI> {
    let params = new HttpParams();
    for (let key in paginationDTO) {
      if(checkIsNull(paginationDTO[key])){
        params = params.set(key, paginationDTO[key]);
        }
    }
    return this.apiService.get(`role/list`, params).pipe(map(response => this.adapter.adapt(response)));
  }
}
