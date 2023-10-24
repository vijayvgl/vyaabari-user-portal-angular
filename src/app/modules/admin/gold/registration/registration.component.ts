import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  gender: any = [
    {value: 'Male', viewValue: 'Male'},
    {value: 'Female', viewValue: 'Female'},
  ];
  state: any = [
    {value: 'Tamilnadu', viewValue: 'Tamilnadu'},
    {value: 'Kerala', viewValue: 'Kerala'},
  ];
  city: any = [
    {value: 'Madurai', viewValue: 'Madurai'},
    {value: 'Coimbatore', viewValue: 'Coimbatore'},
  ];
  bank: any = [
    {value: 'State bank of india', viewValue: 'State bank of india'},
    {value: 'ICICI bank', viewValue: 'ICICI bank'},
  ];
  branch: any = [
    {value: 'Avaniyapuram', viewValue: 'Avaniyapuram'},
    {value: 'Mahal', viewValue: 'Mahal'},
  ];
  Docs: any = [
    {value: 'Aadhaar Card', viewValue: 'Aadhaar Card'},
    {value: 'Pan Card', viewValue: 'Pan Card'},
  ];
  constructor(private _formBuilder: FormBuilder, private route: ActivatedRoute) {}

  ngOnInit() {
    // Retrieve query parameters from the route
    this.route.queryParams.subscribe((queryParams) => {

      console.log(queryParams , 'sdfgjhk')
    
  
      
    });
  }
}
