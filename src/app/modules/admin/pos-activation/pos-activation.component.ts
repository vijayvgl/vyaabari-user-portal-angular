import { Component } from '@angular/core';


interface merchant {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-pos-activation',
  templateUrl: './pos-activation.component.html',
})
export class PosActivationComponent {
  constructor() {}

  selectedValue: string;
 

  merchants: merchant[] = [
    {value: 'Aadhaar Agent-0', viewValue: 'Aadhaar Agent'},
    {value: 'Aadhaar Customer-1', viewValue: 'Aadhaar Customer'},
    {value: 'Adani Capital-2', viewValue: 'Adani Capital'},

    {value: 'Aditya birla finance limited customer-3', viewValue: 'Aditya birla finance limited customer'},
    {value: 'Adya dairy products pvt ltd-4', viewValue: 'Adya dairy products pvt ltd'},
  ];

}
