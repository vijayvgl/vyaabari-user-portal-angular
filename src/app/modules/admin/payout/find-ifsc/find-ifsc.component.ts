import { Component } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { VerifyOtpPopupComponent } from "../verify-otp-popup/verify-otp-popup.component";

interface state {
  value: string;
  viewValue: string;
}
interface bank {
  value: string;
  viewValue: string;
}
interface type {
  value: string;
  viewValue: string;
}
interface city {
  value: string;
  viewValue: string;
}
interface branch {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-find-ifsc",
  templateUrl: "./find-ifsc.component.html",
})
export class FindIfscComponent {
  constructor(
    public dialogRef: MatDialogRef<FindIfscComponent>,
    public dialog: MatDialog
  ) {}
  states: state[] = [
    { value: "Tamil Nadu", viewValue: "Tamil Nadu" },
    { value: "Kerala", viewValue: "Kerala" },
    { value: "Mumbai", viewValue: "Mumbai" },
    { value: "Karnataka", viewValue: "Karnataka" },
  ];
  Bank: bank[] = [
    { value: "Canara Bank", viewValue: "Canara Bank" },
    { value: "Indian Bank", viewValue: "Indian Bank" },
    { value: "ICICI Bank", viewValue: "ICICI Bank" },
  ];
  Type: type[] = [
    { value: " Bank-Type-1", viewValue: "Bank-Type-1" },
    { value: "Bank-Type-2", viewValue: "Bank-Type-2" },
    { value: "Bank-Type-3", viewValue: "Bank-Type-3" },
  ];
  City: city[] = [
    { value: "Chennai", viewValue: "Chennai" },
    { value: "Madurai", viewValue: "Madurai" },
    { value: "Selam", viewValue: "Selam" },
  ];
  Branch: branch[] = [
    { value: "T-Nagar", viewValue: "T-Nagar" },
    { value: "Vadaplani", viewValue: "Vadaplani" },
    { value: "Guindi", viewValue: "Guindi" },
  ];

  closeDialog() {
    this.dialogRef.close(FindIfscComponent);
  }
}
