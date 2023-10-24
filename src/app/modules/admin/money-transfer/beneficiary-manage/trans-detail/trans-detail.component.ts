import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-trans-detail',
  templateUrl: './trans-detail.component.html',
  styleUrls: ['./trans-detail.component.scss']
})
export class TransDetailComponent {
  constructor(public dialogRef: MatDialogRef<TransDetailComponent>) {}

  closeDialog() {
    this.dialogRef.close(TransDetailComponent);
  }
}
