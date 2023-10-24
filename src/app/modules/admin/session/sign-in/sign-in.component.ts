import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, UntypedFormGroup, UntypedFormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

import { tgssAnimations } from '@tgss/animations';
const labels = [
  { name: "username", label: "mobile number", type: "provide" },
  { name: "password", label: "password", type: "provide" },
]
@Component({
  selector: 'admin-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  animations: tgssAnimations
})
export class SignInComponent implements OnInit, AfterViewInit {
  signInForm: UntypedFormGroup;
  showAlert: boolean = false;
  code: any;
  constructor(
  ) {

  }
  ngOnInit(): void {
    this.intialSignInForm()
  }

  ngAfterViewInit(): void {
  }



  intialSignInForm() {
    this.signInForm = new UntypedFormGroup({

      username: new FormControl('', [Validators.required,]),//Validators.pattern(constant().app.validators.mobileNumber)
      password: new FormControl('', [Validators.required]),
    });
  }

  signIn(): void {}

}


