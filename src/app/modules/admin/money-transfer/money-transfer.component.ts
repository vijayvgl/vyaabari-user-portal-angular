import { Component, Input, OnInit } from '@angular/core';
import { RemitterDetailsComponent } from './remitter-details/remitter-details.component';
import { MatDialog } from '@angular/material/dialog';
import { CHANNELS, labels1 } from './_service/money-transfer.constants';
import { FormControl, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { constant } from 'app/core/helpers/global.helper';



@Component({
  selector: 'app-money-transfer',
  templateUrl: './money-transfer.component.html',
})
export class MoneyTransferComponent implements OnInit {

 

  createForm: UntypedFormGroup;
  channels: any[] = CHANNELS;
  current: any = 0
  retailerRefId: any
  retailerMobileNo: any


  constructor(
    public dialog: MatDialog,
  ) {

  }


  ngOnInit(): void {
    this.intialForm()
  }

  intialForm() {
    this.createForm = new FormGroup({
      channel: new FormControl('', [Validators.required]),
      mobileNumber: new FormControl('', [Validators.required, Validators.pattern(constant().app.validators.mobileNumber)])
    })
  }

  get form() {
    return this.createForm.controls
  }



  submitDetails() {
    this.openDialog()
   
  }

  // (click)="openDialog()"
  openDialog() {
    this.dialog.open(RemitterDetailsComponent, {
      width: '60%',
      disableClose: true
    });
  }




  onTabChanged(event) {
    console.log(event)
    this.current = event.index
  }
}
