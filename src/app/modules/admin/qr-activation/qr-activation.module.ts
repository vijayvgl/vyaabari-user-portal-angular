import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrActivationComponent } from './qr-activation.component';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule  } from '@angular/material/input';
import { SharedModule } from 'app/shared/shared.module';
import { RequestUpiComponent } from './request-upi/request-upi.component';

const exampleRoutes: Route[] = [
  {
      path: '',
      component: QrActivationComponent,
  },
];

@NgModule({
  declarations: [
    QrActivationComponent,
    RequestUpiComponent,
 
  ],
  imports: [
    RouterModule.forChild(exampleRoutes),
    SharedModule
  ]
})
export class QrActivationModule { }
