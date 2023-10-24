import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-upi-topup',
  templateUrl: './upi-topup.component.html',
})
export class UpiTopupComponent {
  constructor(public dialogRef: MatDialogRef<UpiTopupComponent>){}

  closeDialog() {
    this.dialogRef.close(UpiTopupComponent);
  }
}
