import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';
import { RequestUpiComponent } from './request-upi/request-upi.component';


interface merchant {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-qr-activation',
  templateUrl: './qr-activation.component.html',
})
export class QrActivationComponent {
  constructor(public dialog: MatDialog,) {}

  selectedValue: string;
 

  merchants: merchant[] = [
    {value: 'Aadhaar Agent-0', viewValue: 'Aadhaar Agent'},
    {value: 'Aadhaar Customer-1', viewValue: 'Aadhaar Customer'},
    {value: 'Adani Capital-2', viewValue: 'Adani Capital'},
    {value: 'Aditya birla finance limited customer-3', viewValue: 'Aditya birla finance limited customer'},
    {value: 'Adya dairy products pvt ltd-4', viewValue: 'Adya dairy products pvt ltd'},
  ];

  requestUPI() {
    this.dialog.open(RequestUpiComponent, {
      width: '350px'
    });
  }

}
