import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pg-link-detail',
  templateUrl: './pg-link-detail.component.html',
  styleUrls: ['./pg-link-detail.component.scss']
})
export class PgLinkDetailComponent {
  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<PgLinkDetailComponent>,
    ){}
  closeDialog() {
    this.dialogRef.close(PgLinkDetailComponent);
  }
}
