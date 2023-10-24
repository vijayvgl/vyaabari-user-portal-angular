import { Injectable } from "@angular/core";

import { UserAdapter } from "./user.adapter.service";
import { IUserAPI } from "../model/userapi.model";
import { Adapter } from "app/core/adapters";

@Injectable({
  providedIn: "root",
})
export class ApiAdapter implements Adapter<IUserAPI> {
  constructor(private adapterRole: UserAdapter) {}

  adapt(response: any): IUserAPI {
    let userList = [];
    response.data.forEach((row) => {
      userList.push(this.adapterRole.adapt(row));
    });

    return {
      keyword: response.status == true ? 'success' : 'failure',
      message: response.message,
      user: userList,
      pageSize: response.count ?? 0,
      page: response.totalPages,
    };
  }
}
