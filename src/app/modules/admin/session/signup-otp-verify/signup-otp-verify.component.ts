import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { checkNull } from 'app/core/custom-validations/return-functions';
import { OtpTimer } from 'app/core/custom-validations/timer.function';

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
  selector: 'app-signup-verify-otp',
  templateUrl: './signup-otp-verify.component.html',
  styleUrls: ['./signup-otp-verify.component.scss']
})
export class SignUpOtpVerifyComponent implements OnInit {
  @ViewChild('ngOtpInput', { static: false }) ngOtpInput: any;
  config = config
 
  otpControl: FormControl
  mobileNumber: any
  constructor(
    public timer: OtpTimer,
    private router : Router
  ) {
    this.timer.startTimer()

  }

  resendOTP() {
    this.timer.startTimer()
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
this.router.navigate(['/dashboard'])
  }


}
