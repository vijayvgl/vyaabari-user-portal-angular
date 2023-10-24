import { Role } from "app/shared/models/role/role.model";
import { User } from "app/shared/models/user/user.model";

export interface IUserAPI {
    keyword: string,
    message: string,
    user: User[],
    pageSize?: number;
    page?: number;
}