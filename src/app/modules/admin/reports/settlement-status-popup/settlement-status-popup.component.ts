import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
interface id {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-settlement-status-popup',
  templateUrl: './settlement-status-popup.component.html',
  styleUrls: ['./settlement-status-popup.component.scss']
})
export class SettlementStatusPopupComponent {
  constructor(public dialogRef: MatDialogRef<SettlementStatusPopupComponent>){}
  closeDialog() {
    this.dialogRef.close(SettlementStatusPopupComponent);
  }

  id: id[] = [
    {value: 'Required', viewValue: 'Required'},
    {value: 'Transaction Id', viewValue: 'Transaction Id'},
    {value: 'Customer Mobile Number', viewValue: 'Customer Mobile Number'},
  ];
}
