import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-upi-qr',
  templateUrl: './upi-qr.component.html',
})
export class UpiQrComponent {
  constructor(public dialogRef: MatDialogRef<UpiQrComponent>){}

  closeDialog() {
    this.dialogRef.close(UpiQrComponent);
  }
}
