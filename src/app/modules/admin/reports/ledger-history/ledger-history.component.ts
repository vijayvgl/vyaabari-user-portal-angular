import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginatorIntl } from '@angular/material/paginator';



interface date {
  value: string;
  viewValue: string;
}

interface type {
  value: string;
  viewValue: string;
}

interface mode {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-ledger-history',
  templateUrl: './ledger-history.component.html',
})
export class LedgerHistoryComponent {


  panelOpenState = false;
  constructor(public dialog: MatDialog,
    public _MatPaginatorIntl: MatPaginatorIntl) {}

    ngOnInit(){
      this._MatPaginatorIntl.itemsPerPageLabel = "Items per page"
    }
  current: any = 0
  selectedValue: string;
 

  date: date[] = [
    {value: '12-04-2023', viewValue: '12-04-2023'},
    {value: '12-05-2023', viewValue: '12-05-2023'},
    {value: '16-04-2023', viewValue: '16-04-2023'},
  ];

  type: type[] = [
    {value: 'Jio', viewValue: 'Jio'},
    {value: 'Airtel', viewValue: 'Airtel'},
    {value: 'VI', viewValue: 'VI'},
  ];

  mode: mode[] = [
    {value: 'Banking', viewValue: 'Banking'},
    {value: 'Intenet', viewValue: 'Intenet'},
    {value: 'Wifi', viewValue: 'Wifi'},
  ];


 




 


}
