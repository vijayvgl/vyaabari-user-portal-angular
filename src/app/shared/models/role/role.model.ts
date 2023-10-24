import { IRole } from "./role.interface";

export class Role implements IRole {
    public id: string;
    public name: string;
    public status?: string;
    public image: string;
    public createdAt?: string;
    public updatedAt?: string;
    public createdBy?: string;
    public updatedBy?: string;
}