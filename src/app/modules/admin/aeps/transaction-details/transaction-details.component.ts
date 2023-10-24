import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef,  } from '@angular/material/dialog';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styles: [
  ]
})
export class TransactionDetailsComponent  implements OnInit{
  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<TransactionDetailsComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any){}
  closeDialog() {
    this.dialogRef.close(TransactionDetailsComponent);
  }
ngOnInit(): void {
  console.log(this.data , "wertyuio" )
}
 
}
