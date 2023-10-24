import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';
import { SureIfscComponent } from 'app/shared/components/models/sure-ifsc/sure-ifsc.component';
import { PaynowComponent } from '../paynow/paynow.component';
import { Router } from '@angular/router';
import { FindIfscComponent } from 'app/shared/components/models/find-ifsc/find-ifsc.component';



interface type {
  value: string;
  viewValue: string;
}
interface bank {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-create-beneficiary',
  templateUrl: './create-beneficiary.component.html',
})
export class CreateBeneficiaryComponent {
  constructor(public dialogRef: MatDialogRef<CreateBeneficiaryComponent>,
    private _router: Router,
    public dialog: MatDialog) {}

  selectedValue: string;
 

  types: type[] = [
    {value: 'Bank Type-1', viewValue: 'Bank Type-1'},
    {value: 'Bank Type-1', viewValue: 'Bank Type-2'},
  ];

  Banks: bank[] = [
    {value: 'Canara Bank', viewValue: 'Canara Bank'},
    {value: 'Indian Bank', viewValue: 'Indian Bank'},
  ];

  closeDialog() {
    this.dialogRef.close(CreateBeneficiaryComponent);
   
  }

  openaddBeneficiary(){
    this.dialogRef.close(CreateBeneficiaryComponent);
     this._router.navigate(['/money-transfer/beneficiary-manage'])
  }

  paynow(){
    this.dialogRef.close(CreateBeneficiaryComponent);
    this.dialog.open(PaynowComponent, {
      width: '30%'
    });
  }

  sureIFSC() {
    this.dialogRef.close(CreateBeneficiaryComponent);
    this.dialog.open(SureIfscComponent, {
      width: '330px'
    });
  }
  findIfsc() {
    this.dialogRef.close(CreateBeneficiaryComponent);
    this.dialog.open(FindIfscComponent, {
      panelClass:"find_ifc"
   

    });
  }
  toggle = true;
  status = 'Enable'; 
  
  enableDisableRule() {
      this.toggle = !this.toggle;
      this.status = this.toggle ? 'Enable' : 'Disable';
  }

}
