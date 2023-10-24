import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import { VerifyOtpComponent } from 'app/shared/components/models/verify-otp/verify-otp.component';

interface state {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-remitter-details',
  templateUrl: './remitter-details.component.html',
})
export class RemitterDetailsComponent {

  createForm: FormGroup
  constructor(
    public dialogRef: MatDialogRef<RemitterDetailsComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

  }
  states: state[] = [
    { value: 'Tamil Nadu', viewValue: 'Tamil Nadu' },
    { value: 'Kerala', viewValue: 'Kerala' },
    { value: 'Mumbai', viewValue: 'Mumbai' },
    { value: 'Karnataka', viewValue: 'Karnataka' },
  ];

  closeDialog() {
    this.dialogRef.close(RemitterDetailsComponent);
  }


  initialForm() {
this.createForm = new FormGroup({
  
})
  }

  verifyOTP() {
    this.dialogRef.close(RemitterDetailsComponent);
    this.dialog.open(VerifyOtpComponent, {
      width: '480px',
      data: {type: 1},
    });
  }
}
