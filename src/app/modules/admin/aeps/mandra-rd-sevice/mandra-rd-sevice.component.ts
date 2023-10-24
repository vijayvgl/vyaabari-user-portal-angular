import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TransactionDetailsComponent } from '../transaction-details/transaction-details.component';

@Component({
  selector: 'app-mandra-rd-sevice',
  templateUrl: './mandra-rd-sevice.component.html',
  styles: [
  ]
})
export class MandraRdSeviceComponent {
  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<MandraRdSeviceComponent>,@Inject(MAT_DIALOG_DATA) public data1: any){}
  closeDialog() {
    this.dialogRef.close(MandraRdSeviceComponent);
  }

  openDialog(){
    this.dialog.open( TransactionDetailsComponent, {
      
      data:this.data1,
      panelClass:'transaction_popup'
    });
  }
}
