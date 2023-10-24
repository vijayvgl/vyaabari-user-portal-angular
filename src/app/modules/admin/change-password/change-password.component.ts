import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { FormValidations } from 'app/core/custom-validations/form-validations';
import { constant } from 'app/core/helpers/global.helper';
import { AppLoaderService } from 'app/core/services/app-loader.service';
import { PopupService } from 'app/core/services/popup.service';
import { TgsstoasterService } from 'app/core/services/tgsstoaster.service';
import { SessionService } from '../session/session-service/session.service';
import { ErrorMessageV2Service } from 'app/core/services/error-message-v2.service';
import { environment } from 'environments/environment.prod';
import { IAPI } from 'app/api/api.model';
import { SessionUserService } from 'app/api/session-user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
})
export class ChangePasswordComponent implements OnInit {

  createForm: FormGroup
  retailerRefId: any
  retailerMobileNo: any

  constructor(
    private loader: AppLoaderService,
    private toaster: TgsstoasterService,
    private popup: PopupService,
    private service: SessionService,
    private errorMessage: ErrorMessageV2Service,
    private sessionService: SessionUserService
  ) {

    // const retailerInfo = this.decryptor.decryptJson(
    //   sessionStorage.getItem(environment.retailerDatakey)
    // )
    // this.retailerRefId = retailerInfo?.retailer_ref_id;
    // this.retailerMobileNo = retailerInfo?.mobile_number;
  }

  ngOnInit(): void {
    this.intialForm()
  }


  intialForm() {
    this.createForm = new FormGroup({
      oldPassword: new FormControl('', [Validators.required]),
      newPassword: new FormControl('', [Validators.required, Validators.pattern(constant().app.validators.PASSWORD_NO)]),
      confirmPassword: new FormControl('', [Validators.required]),
    }, {
      validators: FormValidations.mustMatch('newPassword', 'confirmPassword')
    })
  }



  get getPattern() {
    const value = this.createForm.value.newPassword
    switch (true) {
      case !RegExp(constant().app.validators.SPL_CHECK).test(value): return 'Password should not contain any space or any special characters (e.g. !@# $ % &*( ) = . /)'
      case value?.length < 8: return 'New Password must have atleast 8 characters!';
      case value?.length > 21: return 'New Password should not exceed 21 characters!';
      default: return ''
    }
  }


  changePassword() {
    const errors: any[] = this.errorMessage.invalidControls(this.createForm);
    const value = this.createForm.value
    if (errors.length == 0) {

      let formdata = {
        "old_password": value?.oldPassword,
        "new_password": value?.confirmPassword
      }
      this.loader.open()
      this.service.changePassword(formdata).subscribe({
        next: (res: IAPI) => {
          this.loader.close()
          this.toaster.successToaster(res?.response_message);
          setTimeout(() => {
            this.sessionService.logout()
          }, 500);
        },
        error: (err: any) => {
          this.loader.close()
          this.toaster.errorToaster(err?.error?.response_message)
        },
        complete: () => {
          this.loader.close()

        }
      })
    } else {
      this.errorMessage.throwErrorMessage(this.createForm, errors, labels)
    }
  }
}


const labels = [
  { name: 'oldPassword', label: 'old password', type: 'provide' },
  { name: 'newPassword', label: 'new password', type: 'provide' },
  { name: 'confirmPassword', label: 'confirm password', type: 'provide' },

]
