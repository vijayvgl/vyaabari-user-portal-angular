import { Component, ViewChild } from '@angular/core';
import { ForgotPinComponent } from './forgot-pin/forgot-pin.component';
import { MatDialog } from '@angular/material/dialog';
import { ResetPinComponent } from './reset-pin/reset-pin.component';
interface security  {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-change-pin',
  templateUrl: './change-pin.component.html',
})
export class ChangePinComponent {
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
      'width': '80px',
      'height': '50px'
    }
  };

  constructor(
    public dialog: MatDialog
) {
}
  selectedValue: string;
  security: security[] = [
    {value: 'Jio', viewValue: 'Jio'},
    {value: 'Airtel', viewValue: 'Airtel'},
    {value: 'Airtel', viewValue: 'Airtel'},

  ];

forgotPin() {
  console.log("Forgot pin");
  this.dialog.open(ForgotPinComponent, {
      width: '600px'
  });
}


}
