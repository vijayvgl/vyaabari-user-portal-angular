import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { checkNull } from 'app/core/custom-validations/return-functions';

const config = {
  allowNumbersOnly: true,
  length: 6,
  isPasswordInput: true,
  disableAutoFocus: false,
  inputStyles: {
    'width': '80px',
    'height': '50px'
  }
};
@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss']
})
export class VerifyOtpComponent implements OnInit {
  @ViewChild('ngOtpInput', { static: false }) ngOtpInput: any;
  config = config
  otpControl: FormControl
  mobileNumber: any
  constructor(

  ) {

  }


  ngOnInit(): void {
    this.otpControl = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)])
  }

  showDecodedNumber(value: any) {
    let str = `${String(value).substring(0, 4)}xxxx${String(value).substring(8, 10)}`
    return str
  }

  checkNull(data) {
    return checkNull(data)
  }



  verifyOTP() {
  
  }


}
