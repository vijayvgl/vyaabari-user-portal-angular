import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-commants-common',
  templateUrl: './commants-common.component.html',
  styleUrls: ['./commants-common.component.scss']
})
export class CommantsCommonComponent {
  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<CommantsCommonComponent>,
    ){}
  closeDialog() {
    this.dialogRef.close(CommantsCommonComponent);
  }
}
