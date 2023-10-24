import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-enter-ifsc',
  templateUrl: './enter-ifsc.component.html',
  styleUrls: ['./enter-ifsc.component.scss']
})
export class EnterIfscComponent {
constructor(public dialogRef: MatDialogRef<EnterIfscComponent>,
  public dialog: MatDialog){}

  closeDialog() {
    this.dialogRef.close(EnterIfscComponent);
  }

}
