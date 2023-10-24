import { Component } from '@angular/core';
import { Validators, FormBuilder, UntypedFormGroup, FormGroup } from '@angular/forms';
interface state {
  value: string;
  viewValue: string;
}
interface city {
  value: string;
  viewValue: string;
}
interface identity {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-sign-up-new',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
  
})
export class SignUpComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  toggleStyle: boolean = false;

  toggle(){
    console.log(this.toggleStyle);
    this.toggleStyle = !this.toggleStyle;
  }
  state: state[] = [
    { value: "TamilNadu", viewValue: "TamilNadu" },
    { value: "Kerala", viewValue: "Kerala" },
    { value: "UP", viewValue: "UP" },
  ];

  city: city[] = [
    { value: "Tirunelveli", viewValue: "Tirunelveli" },
    { value: "Madurai", viewValue: "Madurai" },
    { value: "Tenksai", viewValue: "Tenksai" },
  ];

  identity: identity[] = [
    { value: "Aadhaar", viewValue: "Aadhaar" },
    { value: "Bank", viewValue: "Bank" },
  ];

  constructor(private _formBuilder: FormBuilder) {}
}
