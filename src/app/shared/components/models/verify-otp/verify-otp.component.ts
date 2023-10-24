import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EnterTpinComponent } from 'app/shared/components/models/enter-t-pin/enter-t-pin.component';
import { ResetPinComponent } from '../reset-pin/reset-pin.component';
import { Router } from '@angular/router';
import { CreateBeneficiaryComponent } from 'app/modules/admin/money-transfer/create-beneficiary/create-beneficiary.component';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
})
export class VerifyOtpComponent {

showCountdown = false;
countdown = 60;
countdownInterval: any;
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
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<VerifyOtpComponent>,
    private _router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any){}

  closeDialog() {
    this.dialogRef.close(VerifyOtpComponent);
  }
  benificiaryList(){
    this.dialogRef.close(VerifyOtpComponent);
    this.dialog.open(CreateBeneficiaryComponent, {
    });
    //  this._router.navigate(['/money-transfer/beneficiary-manage'])
  }
  resetPin() {
    this.dialogRef.close(VerifyOtpComponent);
    this.dialog.open(ResetPinComponent, {
    });
  }

  startCountdown() {
    this.showCountdown = true;
    this.countdown = 60; // Reset countdown to 60 seconds
    this.countdownInterval = setInterval(() => {
      this.countdown--;
      if (this.countdown === 0) {
        clearInterval(this.countdownInterval); // Stop the countdown
        this.showCountdown = false; // Hide the countdown message
      }
    }, 1000); // Update countdown every 1 second
  }

  resend() {
    setTimeout(() => {
      this.startCountdown(); // Start the countdown again
    }, 0);
  }

  ngOnInit(): void {
    console.log(this.data , "wertyuio" );
    this.startCountdown();
  }

  
}
