import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-request-upi',
  templateUrl: './request-upi.component.html',
  styleUrls: ['./request-upi.component.scss']
})
export class RequestUpiComponent {
  constructor(public dialogRef: MatDialogRef<RequestUpiComponent>) {}

  closeDialog() {
    this.dialogRef.close(RequestUpiComponent);
  }
}
