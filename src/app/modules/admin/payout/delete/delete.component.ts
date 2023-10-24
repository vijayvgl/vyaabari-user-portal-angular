import { Component, ViewChild } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-delete",
  templateUrl: "./delete.component.html",
  styles: [],
})
export class DeleteComponent {
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

  constructor(public dialogRef: MatDialogRef<DeleteComponent>) {}

  closeDialog() {
    this.dialogRef.close(DeleteComponent);
  }
}
