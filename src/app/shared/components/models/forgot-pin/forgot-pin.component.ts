import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EnterTpinComponent } from '../enter-t-pin/enter-t-pin.component';
import { ResetPinComponent } from '../reset-pin/reset-pin.component';
import { VerifyOtpPopupComponent } from '../verify-otp-popup/verify-otp-popup.component';
import { VerifyOtpComponent } from '../verify-otp/verify-otp.component';

interface security  {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-forgot-pin',
  templateUrl: './forgot-pin.component.html',
})
export class ForgotpinComponent {


  security: security[] = [
    {value: 'What is your nic name?', viewValue: 'What is your nic name?'},
    {value: 'What is your location?', viewValue: 'What is your location?'},
    {value: 'What is your bestfriend name?', viewValue: 'What is your bestfriend name?'},
  ];


  otp: string;
  showOtpComponent = true;
  @ViewChild('ngOtpInput', { static: false}) ngOtpInput: any;
  config = {
    allowNumbersOnly: false,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      'width': '50px',
      'height': '50px'
    }
  };
  

 


  constructor(
    public dialogRef: MatDialogRef<ForgotpinComponent>,
    public dialog: MatDialog,
    private _router: Router,
  ) {

  }

  closeDialog() {
    this.dialogRef.close(ForgotpinComponent);
    
  }

  verifyOTP() {
    this.dialogRef.close(ForgotpinComponent);
    this.dialog.open(VerifyOtpComponent, {
      width: '480px',
      data: {type: '2'}
    });
  }

  
  
}
