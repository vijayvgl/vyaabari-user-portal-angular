import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reset-pin',
  templateUrl: './reset-pin.component.html',
  styleUrls: ['./reset-pin.component.scss']
})
export class ResetPinComponent {
  constructor(public dialogRef: MatDialogRef<ResetPinComponent>){}

  closeDialog() {
    this.dialogRef.close(ResetPinComponent);
  }
}
