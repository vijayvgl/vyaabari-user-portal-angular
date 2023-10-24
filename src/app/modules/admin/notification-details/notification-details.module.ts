import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationDetailsRoutingModule } from './notification-details-routing.module';
import { NotificationDetailsComponent } from './notification-details.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [NotificationDetailsComponent],
  imports: [
    CommonModule,
    NotificationDetailsRoutingModule,
    MatTableModule,
    MatIconModule
  ]
})
export class NotificationDetailsModule { }
