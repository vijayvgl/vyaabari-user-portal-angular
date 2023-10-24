import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyGuard } from 'app/core/services/verify.guard';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { FinalScreenComponent } from './final-screen/final-screen.component';
import { SessionTimeoutComponent } from './session-timeout/session-timeout.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignUpOtpVerifyComponent } from './signup-otp-verify/signup-otp-verify.component';

const routes: Routes = [

  {
    path: '',
    // VerifyGuard
    canActivate: [],
    children: [
      {
        path: '',
        component: SignInComponent,
        pathMatch: 'full',
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        pathMatch: 'full',
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
        pathMatch: 'full',
      },
      {
        path: 'verify-otp',
        component: VerifyOtpComponent,
        pathMatch: 'full',
      },
      {
        path: 'set-successful',
        component: FinalScreenComponent,
        pathMatch: 'full',
      },
      {
        path: 'password-reset',
        component: PasswordResetComponent,
        pathMatch: 'full',
      },
      {
        path: 'session-timeout',
        component: SessionTimeoutComponent,
        pathMatch: 'full',
      },
      {
        path: 'otp-verify',
        component: SignUpOtpVerifyComponent,
        pathMatch: 'full',
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionRoutingModule { }
