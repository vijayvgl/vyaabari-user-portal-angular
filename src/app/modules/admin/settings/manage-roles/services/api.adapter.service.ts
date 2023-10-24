import { Injectable } from "@angular/core";
import { IRoleAPI } from "../model/roleapi.model";
import { RoleAdapter } from "./role.adapter.service";
import { Adapter } from "app/core/adapters";


@Injectable({
  providedIn: "root",
})
export class ApiAdapter implements Adapter<IRoleAPI> {
  constructor(private adapterRole: RoleAdapter) {}

  adapt(response: any): IRoleAPI {
    let rolesList = [];
    response.data.forEach((row) => {
      rolesList.push(this.adapterRole.adapt(row));
    });


    return {
      pageSize:response.count ?? 0,
      keyword: response.status == true ? 'success' : 'failure',
      message: response.message,
      roles: rolesList,
      count: response.count ?? 0,
      page: response.totalPages,
    };
  }
}
