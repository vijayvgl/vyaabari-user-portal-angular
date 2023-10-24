import { Role } from "app/shared/models/role/role.model";

export interface IRoleAPI {
   
    count: number;
    keyword: string,
    message: string,
    roles: Role[],
    pageSize?: number;
    page?: number;
}