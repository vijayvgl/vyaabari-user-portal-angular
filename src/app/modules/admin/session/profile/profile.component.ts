import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  constructor(public dialogRef: MatDialogRef<ProfileComponent>){}

  closeDialog() {
    this.dialogRef.close(ProfileComponent);
  }
}
