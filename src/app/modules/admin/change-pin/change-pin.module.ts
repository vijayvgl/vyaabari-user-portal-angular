import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePinComponent } from './change-pin.component';
import { Route, RouterModule } from '@angular/router';
import { MatLuxonDateModule } from '@angular/material-luxon-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule  } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TgssHighlightModule } from '@tgss/components/highlight';
import { SharedModule } from 'app/shared/shared.module';
import { NgOtpInputModule } from 'ng-otp-input';
import { ForgotPinComponent } from './forgot-pin/forgot-pin.component';
import { ResetPinComponent } from './reset-pin/reset-pin.component';
import {MatDialogModule} from '@angular/material/dialog';
const exampleRoutes: Route[] = [
  {
      path: '',
      component: ChangePinComponent,
  },
];

@NgModule({
  declarations: [
    ChangePinComponent,
    ForgotPinComponent,
    ResetPinComponent,
 
  ],
  imports: [
    RouterModule.forChild(exampleRoutes),
    CommonModule,
    MatLuxonDateModule,
        MatSelectModule,
        TgssHighlightModule,
        MatDatepickerModule,
        MatDividerModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule ,
        SharedModule,
        NgOtpInputModule,
        MatDialogModule
  ]
})
export class ChangePinModule { }
