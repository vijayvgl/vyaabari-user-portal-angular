import { Injectable } from "@angular/core";
import { Role } from "app/shared/models/role/role.model";
import { Adapter } from "app/core/adapters";


@Injectable({
    providedIn: "root"
})
export class RoleAdapter implements Adapter<Role> {
    roles: Role;
    
    adapt(item: any): Role {
        this.roles =  new Role();        
        this.roles.id = item.id ?? '';
        this.roles.name = item.name ?? '';
        this.roles.status = item.status ?? '';
        this.roles.createdAt = item.createdAt ?? '';
        this.roles.updatedAt = item.updatedAt ?? '';
        this.roles.createdBy = item.created_by ?? '';
        this.roles.updatedBy = item.updated_by ?? '';
        return this.roles;
    }
}