import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register-aadhaar',
  templateUrl: './register-aadhaar.component.html',
})
export class RegisterAadhaarComponent {
  constructor(public dialogRef: MatDialogRef<RegisterAadhaarComponent>,
    public dialog: MatDialog){}

  closeDialog() {
    this.dialogRef.close(RegisterAadhaarComponent);
  }

}
