import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationDetailsComponent } from './notification-details.component';

const routes: Routes = [
  {
    path: '',
component:NotificationDetailsComponent,
    data: { title: 'Notification Details', breadcrumb: 'Notification Details' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationDetailsRoutingModule { }
