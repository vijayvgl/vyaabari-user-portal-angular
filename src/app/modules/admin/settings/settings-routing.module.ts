import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { RolesPermissionsViewComponent } from './roles-permissions/roles-permissions-view/roles-permissions-view.component';

import { UserscreateComponent } from './users/create/create.component';
import { UserseditComponent } from './users/edit/edit.component';
import { UsersComponent } from './users/users.component';
import { UpdateRoleComponent } from './manage-roles/update/update.component';
import { CreateRoleComponent } from './manage-roles/create/create.component';
import { ManageRolesComponent } from './manage-roles/manage-roles.component';
import { RolesPermissionsComponent } from './roles-permissions/roles-permissions.component';


const routes: Routes = [

    {
        path: 'users',
        component: UsersComponent,
    },
    {
        path: 'users/create',
        component: UserscreateComponent,
    },
    {
        path: 'users/update',
        component: UserseditComponent,
    },
    {
        path: 'manage-roles',
        component: ManageRolesComponent,
    },
    {
        path: 'manage-roles/create',
        component: CreateRoleComponent,
    },
    {
        path: 'manage-roles/update',
        component: UpdateRoleComponent,
    },
    {
        path: 'roles-permissions',
        component: RolesPermissionsComponent,
    },
    {
        path: 'roles-permissions/view/:id',
        component: RolesPermissionsViewComponent,
    },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SettingsRoutingModule { }
