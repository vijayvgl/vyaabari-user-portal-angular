import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { EnterIfscComponent } from '../enter-ifsc/enter-ifsc.component';
import { FindIfscComponent } from '../find-ifsc/find-ifsc.component';


@Component({
  selector: 'app-sure-ifsc',
  templateUrl: './sure-ifsc.component.html',
})
export class SureIfscComponent {

  otp: string;
  showOtpComponent = true;
  @ViewChild('ngOtpInput', { static: false }) ngOtpInput: any;
  config = {
    allowNumbersOnly: false,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      'width': '50px',
      'height': '50px'
    }
  };

  constructor(public dialogRef: MatDialogRef<SureIfscComponent>,
    public dialog: MatDialog) { }

  closeDialog() {
    this.dialogRef.close(SureIfscComponent);
  }

  findIfsc() {
    this.dialogRef.close(SureIfscComponent);
    this.dialog.open(FindIfscComponent, {
      panelClass:"find_ifc"
   

    });
  }
  enterIfsc(){
    this.dialogRef.close(SureIfscComponent);
    this.dialog.open( EnterIfscComponent, {
    });
  }
}
