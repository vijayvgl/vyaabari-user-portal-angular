import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSelect } from '@angular/material/select';


interface status {
  value: string;
  viewValue: string;
}
interface bank {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-request-credit',
  templateUrl: './request-credit.component.html',
})
export class RequestCreditComponent {

  range = new FormGroup({

  });
  constructor() {}
  current: any = 0
  selectedValue: string;
 
  onTabChanged(event) {
    console.log(event)
    this.current = event.index
  }

  status: status[] = [
    {value: 'Credit', viewValue: 'Credit'},
    {value: 'Debit', viewValue: 'Debit'},
    {value: 'Net Banking', viewValue: 'Net Banking'},
  ];

  Banks: bank[] = [
    {value: 'Canara Bank', viewValue: 'Canara Bank'},
    {value: 'Indian Bank', viewValue: 'Indian Bank'},
  ];

 


}
