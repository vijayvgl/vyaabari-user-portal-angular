import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-topup-claim-popup',
  templateUrl: './topup-claim-popup.component.html',
  styleUrls: ['./topup-claim-popup.component.scss']
})
export class TopupClaimPopupComponent {
  constructor(public dialogRef: MatDialogRef<TopupClaimPopupComponent>){}
  closeDialog() {
    this.dialogRef.close(TopupClaimPopupComponent);
  }
}
