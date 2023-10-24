import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
})
export class CertificateComponent {
  constructor(public dialogRef: MatDialogRef<CertificateComponent>){}

  closeDialog() {
    this.dialogRef.close(CertificateComponent);
  }
}
