import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule  } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from 'app/shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';

import { MatLuxonDateModule } from '@angular/material-luxon-adapter';

import { MatSelectModule } from '@angular/material/select';
import { TgssHighlightModule } from '@tgss/components/highlight';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { UsersComponent } from './users/users.component';
import { UserscreateComponent } from './users/create/create.component';
import { UserseditComponent } from './users/edit/edit.component';
import { RolesPermissionsComponent } from './roles-permissions/roles-permissions.component';
import { RolesPermissionsViewComponent } from './roles-permissions/roles-permissions-view/roles-permissions-view.component';
import { MatDividerModule } from '@angular/material/divider';


import { MatRadioModule } from '@angular/material/radio';
import { CreateRoleComponent } from './manage-roles/create/create.component';
import { UpdateRoleComponent } from './manage-roles/update/update.component';
import { ManageRolesComponent } from './manage-roles/manage-roles.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TgssDatePickerModule } from 'app/shared/tgss-date-picker/tgss-date-picker.module';


@NgModule({
  declarations: [
    UsersComponent,
    UserscreateComponent, UserseditComponent,
    RolesPermissionsComponent, ManageRolesComponent, UpdateRoleComponent,
    CreateRoleComponent, RolesPermissionsViewComponent,
    RolesPermissionsComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SettingsRoutingModule,
    MatLuxonDateModule,
    MatSelectModule,
    TgssHighlightModule,
    MatDatepickerModule,
    MatDividerModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule ,
    MatMenuModule,
    MatProgressBarModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    TgssDatePickerModule

  ],
  providers: [DecimalPipe]
})
export class SettingsModule { }
