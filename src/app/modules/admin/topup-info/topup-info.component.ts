import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


export interface PeriodicElement {
 
  s_no: string;
  account_number: string;
  ifsc_code: any;
  bank: any;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {s_no: '1', account_number: '95600546845587', ifsc_code: 'IBM001254', bank: 'Indian Bank',
  },
  { s_no: '2', account_number: '95600546845587', ifsc_code: 'IBM001254', bank: 'Indian Bank',
 },
  {s_no: '3', account_number: '95600546845587', ifsc_code: 'IBM001254', bank: 'Indian Bank',
  },
  {s_no: '4', account_number: '95600546845587', ifsc_code: 'IBM001254', bank: 'Indian Bank',
 },


];


@Component({
  selector: 'app-topup-info',
  templateUrl: './topup-info.component.html',
})
export class TopupInfoComponent {

  displayedColumns: string[] = ['s_no', 'bank', 'account_number', 'ifsc_code', ];
  dataSource = ELEMENT_DATA;

  constructor(public dialogRef: MatDialogRef<TopupInfoComponent>){}

  closeDialog() {
    this.dialogRef.close(TopupInfoComponent);
  }
}
