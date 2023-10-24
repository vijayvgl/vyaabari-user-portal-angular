import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-support-info',
  templateUrl: './support-info.component.html',
  styleUrls: ['./support-info.component.scss']
})
export class SupportInfoComponent {
  constructor(public dialogRef: MatDialogRef<SupportInfoComponent>){}

  closeDialog() {
    this.dialogRef.close(SupportInfoComponent);
  }
}
