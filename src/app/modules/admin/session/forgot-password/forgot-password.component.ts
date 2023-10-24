import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
const labels = [
  { name: "mobileNumber", label: "mobile number", type: "provide" },
]
@Component({
  selector: 'admin-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: UntypedFormGroup;
  inValidMail: boolean = false;
  constructor(
    private router: Router
  ) {
  }
  ngOnInit(): void {
    this.initialForgotPasswordFOrm()
  }

  initialForgotPasswordFOrm() {
    this.forgotPasswordForm = new UntypedFormGroup({
      mobileNumber: new FormControl('', [Validators.required, //Validators.pattern(constant().app.validators.mobileNumber)
      ])
    })
  }

  sendResetLink(): void {
    this.router.navigate([`/password-reset`])
  }
}


function showDecodedNumber(value: any) {
  let str = `${String(value).substring(0, 4)}xxxx${String(value).substring(8, 10)}`
  return str
}