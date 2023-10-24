import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatRadioChange } from '@angular/material/radio';
import { EnterTpinComponent } from 'app/shared/components/models/enter-t-pin/enter-t-pin.component';
import { ForgotpinComponent } from '../forgot-pin/forgot-pin.component';
import { CreateBeneficiaryComponent } from 'app/modules/admin/money-transfer/create-beneficiary/create-beneficiary.component';

@Component({
  selector: 'app-verify-otp-popup',
  templateUrl: './verify-otp-popup.component.html',
})
export class VerifyOtpPopupComponent {
  filteredOptions = [
    { id: 1, name: "abc" },
    { id: 2, name: "xyz" }
  ];
tpinno: boolean = false;
otpno: boolean = false;
showCountdown = false;
countdown = 60;
countdownInterval: any;
  radioValue = 2
  otp: string;
  showOtpComponent = true;
  @ViewChild('ngOtpInput', { static: false}) ngOtpInput: any;
  selected: string;
  filter: any;

  array = ['Radio A', 'Radio B', 'Radio C'];

  radioChange(event: MatRadioChange) {
    console.log(event);
    console.log(event.value);
    console.log(event.source);
    //this.filter['property'] = this.selected;
    //console.log(this.filter);
  }
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
    public dialogRef: MatDialogRef<VerifyOtpPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){}

  closeDialog() {
    this.dialogRef.close(VerifyOtpPopupComponent);
    

  }

  openaddBeneficiary(){
    this.dialog.open(CreateBeneficiaryComponent)
    this.dialogRef.close(VerifyOtpPopupComponent);
  }
  tpin(){
    this.tpinno = true;
    this.otpno = false;
  }
  otppin(){
    this.otpno = true;
    this.tpinno = false; 
  }
  forgotTpin() {
    this.dialogRef.close(VerifyOtpPopupComponent);
    this.dialog.open(ForgotpinComponent, {
      width: '400px'
    });
  }
  enterTpin() {
    this.dialogRef.close(VerifyOtpPopupComponent);
    this.dialog.open(EnterTpinComponent, {
      width: '330px'
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
    console.log(this.data , "wertyuio" )
    this.startCountdown();
  }

  
}
