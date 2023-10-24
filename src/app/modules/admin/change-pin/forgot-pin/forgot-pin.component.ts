import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ResetPinComponent } from '../reset-pin/reset-pin.component';
interface security  {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-forgot-pin',
  templateUrl: './forgot-pin.component.html',
  styleUrls: ['./forgot-pin.component.scss']
})
export class ForgotPinComponent {
  constructor( public dialog: MatDialog,public dialogRef: MatDialogRef<ForgotPinComponent>){}
  security: security[] = [
    {value: 'Jio', viewValue: 'Jio'},
    {value: 'Airtel', viewValue: 'Airtel'},
    {value: 'Airtel', viewValue: 'Airtel'},

  ];
  closeDialog() {
    this.dialogRef.close(ForgotPinComponent);
  }
  resetPin(){
    console.log("reset pin");
    this.dialogRef.close(ForgotPinComponent);
    this.dialog.open(ResetPinComponent, {
      width: '600px'
  });
  }
}
