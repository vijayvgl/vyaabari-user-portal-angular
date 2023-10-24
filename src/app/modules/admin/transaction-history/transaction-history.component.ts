import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';



interface date {
  value: string;
  viewValue: string;
}

interface status {
  value: string;
  viewValue: string;
}

interface type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
})
export class TransactionHistoryComponent {


  panelOpenState = false;
  constructor(public dialog: MatDialog) { }
  current: any = 0
  selectedValue: string;
 

  date: date[] = [
    {value: '12-04-2023', viewValue: '12-04-2023'},
    {value: '12-05-2023', viewValue: '12-05-2023'},
    {value: '16-04-2023', viewValue: '16-04-2023'},
  ];

  status: status[] = [
    {value: 'Pending', viewValue: 'Pending'},
    {value: 'Completed', viewValue: 'Completed'},
    {value: 'On-progress', viewValue: 'On-progress'},
  ];

  type: type[] = [
    {value: 'Jio', viewValue: 'Jio'},
    {value: 'Airtel', viewValue: 'Airtel'},
    {value: 'VI', viewValue: 'VI'},
  ];


 




 


}
