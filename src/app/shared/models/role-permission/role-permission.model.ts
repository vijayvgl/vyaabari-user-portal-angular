import { IRolePermission } from "./role-permission.interface";

export class Role implements IRolePermission {
    public id: string;
    public name: string;
    public status?: string;
    public image: string
 
}