import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

interface bank {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-topup-claim',
  templateUrl: './topup-claim.component.html',
})
export class TopupClaimComponent {

  Banks: bank[] = [
    {value: 'Canara Bank', viewValue: 'Canara Bank'},
    {value: 'Indian Bank', viewValue: 'Indian Bank'},
  ];


  constructor(public dialogRef: MatDialogRef<TopupClaimComponent>){}

  closeDialog() {
    this.dialogRef.close(TopupClaimComponent);
  }
}
