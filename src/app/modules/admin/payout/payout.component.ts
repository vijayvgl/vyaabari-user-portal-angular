import { Component, OnInit } from "@angular/core";
import { RemitterDetailsComponent } from "./remitter-details/remitter-details.component";
import { MatDialog } from "@angular/material/dialog";
import {
  FormControl,
  FormGroup,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import { constant } from "app/core/helpers/global.helper";

@Component({
  selector: "app-payout",
  templateUrl: "./payout.component.html",
})
export class PayoutComponent implements OnInit {
  createForm: UntypedFormGroup;
  channels: any[];
  current: any = 0;
  retailerRefId: any;
  retailerMobileNo: any;

  constructor(public dialog: MatDialog) {}

  submitClick() {
    this.dialog.open(RemitterDetailsComponent, {
      width: "900px",
    });
  }

  ngOnInit(): void {
    this.intialForm();
  }

  intialForm() {
    this.createForm = new FormGroup({
      channel: new FormControl("", [Validators.required]),
      mobileNumber: new FormControl("", [
        Validators.required,
        Validators.pattern(constant().app.validators.mobileNumber),
      ]),
    });
  }

  get form() {
    return this.createForm.controls;
  }

  onTabChanged(event) {
    console.log(event);
    this.current = event.index;
  }
}
