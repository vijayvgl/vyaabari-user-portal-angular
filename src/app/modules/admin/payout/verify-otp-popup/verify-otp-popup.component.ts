import { Component, ViewChild } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { ForgotpinComponent } from "app/shared/components/models/forgot-pin/forgot-pin.component";
@Component({
  selector: "app-verify-otp-popup",
  templateUrl: "./verify-otp-popup.component.html",
})
export class VerifyOtpPopupComponent {
  tpinno: boolean = false;
  otpno: boolean = false;
  otp: string;
  showOtpComponent = true;
  @ViewChild("ngOtpInput", { static: false }) ngOtpInput: any;
  config = {
    allowNumbersOnly: false,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: "",
    inputStyles: {
      width: "50px",
      height: "50px",
    },
  };

  constructor(
    public dialogRef: MatDialogRef<VerifyOtpPopupComponent>,
    public dialog: MatDialog
  ) {}

  closeDialog() {
    this.dialogRef.close(VerifyOtpPopupComponent);
  }
  forgotClick() {
    this.dialogRef.close(VerifyOtpPopupComponent);
    this.dialog.open(ForgotpinComponent, {
      width: "465px",
    });
  }
  tpin() {
    this.tpinno = true;
    this.otpno = false;
  }
  otppin() {
    this.otpno = true;
    this.tpinno = false;
  }
}
