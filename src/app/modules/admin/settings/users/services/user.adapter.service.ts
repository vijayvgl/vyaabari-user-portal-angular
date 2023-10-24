import { Injectable } from "@angular/core";
import { Adapter } from "app/core/adapters";
import { User } from "app/shared/models/user/user.model";


@Injectable({
    providedIn: "root"
})
export class UserAdapter implements Adapter<User> {
    users: User;
    adapt(item: any): User {
        this.users =  new User();        
        this.users.id = item.id; 
        this.users.name = item.name ?? '';
        this.users.email = item.email ?? '';
        this.users.password = item.password ?? '';
        this.users.mobileNumber = item.mobileno ?? '';
        this.users.status = item.status ?? '';
        this.users.roleName = item.roleName ?? '';
        this.users.roleId = item.roleId ?? '';
        return this.users;
    }
}