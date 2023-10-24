import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
interface state {
  value: string;
  viewValue: string;
}
interface city {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-shop-address',
  templateUrl: './shop-address.component.html',
  styleUrls: ['./shop-address.component.scss']
})
export class ShopAddressComponent {
  viewAddress: boolean = false;
  states: state[] = [
    { value: 'Tamil Nadu', viewValue: 'Tamil Nadu' },
    { value: 'Kerala', viewValue: 'Kerala' },
    { value: 'Mumbai', viewValue: 'Mumbai' },
    { value: 'Karnataka', viewValue: 'Karnataka' },
  ];
  city: state[] = [
    { value: 'Madurai', viewValue: 'Madurai' },
    { value: 'Coimbatore', viewValue: 'Coimbatore' },
    { value: 'Trichy', viewValue: 'Trichy' },
    { value: 'Dintugal', viewValue: 'Dintugal' },
  ];
  constructor(public dialogRef: MatDialogRef<ShopAddressComponent>){}

  closeDialog() {
    this.dialogRef.close(ShopAddressComponent);
  }
  view(){
    this.viewAddress = true;
  }
  update(){
    this.viewAddress = false;
  }
}
