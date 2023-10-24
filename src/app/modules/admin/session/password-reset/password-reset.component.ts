import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../session-service/session.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { checkNull } from 'app/core/custom-validations/return-functions';
import { TgsstoasterService } from 'app/core/services/tgsstoaster.service';
import { AppLoaderService } from 'app/core/services/app-loader.service';
import { OtpTimer } from 'app/core/custom-validations/timer.function';
import { IAPI } from 'app/api/api.model';
import { PopupService } from 'app/core/services/popup.service';
import { environment } from 'environments/environment';
import { FormValidations } from 'app/core/custom-validations/form-validations';
import { ErrorMessageV2Service } from 'app/core/services/error-message-v2.service';
import { StorageService } from 'app/core/services/storage.service';
const config = {
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

const labels: any[] = [
  { name: 'otpControl', label: 'OTP', type: 'provide', number: '6' },
  { name: 'password', label: "new password", type: 'provide', number: '8' },
  { name: 'passwordConfirm', label: "confirm password", type: 'provide', number: '8' }
]
@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {

  @ViewChild('ngOtpInput', { static: false }) ngOtpInput: any;
  config = config
  otpControl: FormControl
  mobileNumber: any
  mobNumber: any
  resetForm: FormGroup
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: SessionService,
    private toaster: TgsstoasterService,
    private loader: AppLoaderService,
    public timer: OtpTimer,
    private popservice: PopupService,
    private errorMessage: ErrorMessageV2Service,
    private storage: StorageService
  ) {

    this.activatedRoute.params.subscribe((res: any) => {
      console.log(res);

      this.timer.startTimer()
      this.mobileNumber = checkNull(res?.mobileNumber) ? this.showDecodedNumber(res?.mobileNumber) : ''
      this.mobNumber = res?.mobileNumber
    })
  }


  ngOnInit(): void {
    this.initialResetForm()
  }


  initialResetForm() {
    this.resetForm = new FormGroup({
      otpControl: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      passwordConfirm: new FormControl('', Validators.required)
    },
      {
        validators: FormValidations.mustMatch('password', 'passwordConfirm')
      })
  }


  showDecodedNumber(value: any) {
    let str = `${String(value).substring(0, 4)}xxxx${String(value).substring(8, 10)}`
    return str
  }

  checkNull(data) {
    return checkNull(data)
  }




  resendOTP() {
    this.timer.startTimer()
  }


  verifyOTP() {
    return  this.router.navigate(['/'])
  }
}





function showDecodedNumber(value: any) {
  let str = `${String(value).substring(0, 4)}xxxx${String(value).substring(8, 10)}`
  return str
}