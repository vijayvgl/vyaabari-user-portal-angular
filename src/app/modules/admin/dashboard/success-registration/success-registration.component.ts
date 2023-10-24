import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-success-registration',
  templateUrl: './success-registration.component.html',
  styleUrls: ['./success-registration.component.scss']
})
export class SuccessRegistrationComponent {
  constructor(public dialogRef: MatDialogRef<SuccessRegistrationComponent>){}

  closeDialog() {
    this.dialogRef.close(SuccessRegistrationComponent);
  }
}
