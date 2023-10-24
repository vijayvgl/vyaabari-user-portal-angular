import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionRoutingModule } from './session-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule  } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TgssAlertModule } from '@tgss/components/alert';
import { TgssCardModule } from '@tgss/components/card';
import { SharedModule } from 'app/shared/shared.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { NgOtpInputModule } from  'ng-otp-input';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { FinalScreenComponent } from './final-screen/final-screen.component';
import { ProfileComponent } from '../profile/profile.component';
import { SvgIconsModule } from 'app/layout/common/svg-icons/svg-icons.module';
import { SessionTimeoutComponent } from './session-timeout/session-timeout.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MatStepperModule } from '@angular/material/stepper';
import { SignUpOtpVerifyComponent } from './signup-otp-verify/signup-otp-verify.component';

@NgModule({
  declarations: [
    SignInComponent,
    ForgotPasswordComponent,
  
    VerifyOtpComponent,
    PasswordResetComponent,
    FinalScreenComponent,
    ProfileComponent,
    SignUpOtpVerifyComponent,
    SessionTimeoutComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    SessionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgOtpInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule ,
    MatProgressSpinnerModule,
    TgssCardModule,
    TgssAlertModule,
    SharedModule,
    MatStepperModule,
    SvgIconsModule
  ]
})
export class SessionModule { }
