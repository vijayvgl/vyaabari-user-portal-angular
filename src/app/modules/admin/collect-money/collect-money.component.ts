import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterAadhaarComponent } from './register-aadhaar/register-aadhaar.component';


interface payment {
  value: string;
  viewValue: string;
}
interface bank {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-collect-money',
  templateUrl: './collect-money.component.html',
})
export class CollectMoneyComponent {
  constructor(public dialog: MatDialog) {}


  payments: payment[] = [
    {value: '1', viewValue: 'Credit/Debit/Others'},
    {value: '2', viewValue: 'Aadhaar Pay'},
    {value: '3', viewValue: 'UPI QR'},
  ];

  Banks: bank[] = [
    {value: 'Canara Bank', viewValue: 'Canara Bank'},
    {value: 'Indian Bank', viewValue: 'Indian Bank'},
  ];

  openDialog() {
    this.dialog.open(RegisterAadhaarComponent, {
    });
  }
 
type

  setPaymet(event){
this.type=event.value

  }
}
