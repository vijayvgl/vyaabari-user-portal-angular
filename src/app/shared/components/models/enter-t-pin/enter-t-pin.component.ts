import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RemitterDetailsComponent } from 'app/modules/admin/money-transfer/remitter-details/remitter-details.component';
import { VerifyOtpPopupComponent } from '../verify-otp-popup/verify-otp-popup.component';
import { Router } from '@angular/router';
import { CreateBeneficiaryComponent } from 'app/modules/admin/money-transfer/create-beneficiary/create-beneficiary.component';
import { ForgotpinComponent } from '../forgot-pin/forgot-pin.component';
@Component({
  selector: 'app-enter-t-pin',
  templateUrl: './enter-t-pin.component.html',
})
export class EnterTpinComponent {

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
    public dialogRef: MatDialogRef<EnterTpinComponent>,
    public dialog: MatDialog,
    private _router: Router,
  ) {

  }

  closeDialog() {
    this.dialogRef.close(EnterTpinComponent);
    
  }

  addBeneficiary() {
    this.dialogRef.close(EnterTpinComponent);
    this.dialog.open(CreateBeneficiaryComponent, {
      width: ''
    });
  }

  verifyOTP() {
    this.dialogRef.close(RemitterDetailsComponent);
    this.dialog.open(VerifyOtpPopupComponent, {
      width: '480px'
    });
  }

  forgotClick() {
    this.dialogRef.close(EnterTpinComponent);
    this.dialog.open(ForgotpinComponent, {
    });
  }
  
}
