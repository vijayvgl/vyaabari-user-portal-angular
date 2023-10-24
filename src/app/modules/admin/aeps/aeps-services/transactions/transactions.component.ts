import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent {
  constructor(public dialogRef: MatDialogRef<TransactionsComponent>) {}

  closeDialog() {
    this.dialogRef.close(TransactionsComponent);
  }
}
