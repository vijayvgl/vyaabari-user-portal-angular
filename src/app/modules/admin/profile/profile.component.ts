import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PopupService } from 'app/core/services/popup.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public profileEdit: boolean = false;
  
    constructor(public dialogRef: MatDialogRef<ProfileComponent>,private popup: PopupService ){}

  closeDialog() {
    this.dialogRef.close(ProfileComponent);
  }
  editProfile() {
    this.profileEdit = true;
  }
  update() {
    this.popup.show({
      title: 'Confirmation', 
      message: `Your updated details will send to admin.Admin has only allow to update your details. `, confirm_label: 'Ok', type: 'info',
      cancel_label: 'Cancel'
    })
    
  }
}
