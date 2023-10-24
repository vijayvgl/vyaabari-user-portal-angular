import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { FindIfscComponent } from "app/shared/components/models/find-ifsc/find-ifsc.component";
import { SureIfscComponent } from "app/shared/components/models/sure-ifsc/sure-ifsc.component";
interface type {
  value: string;
  viewValue: string;
}
interface bank {
  value: string;
  viewValue: string;
}
@Component({
  selector: "app-add-bank-details",
  templateUrl: "./add-bank-details.component.html",
  styleUrls: ["./add-bank-details.component.scss"],
})
export class AddBankDetailsComponent {
  addBankDetailsForm:FormGroup
  constructor(
    public dialogRef: MatDialogRef<AddBankDetailsComponent>,
    public dialog: MatDialog
  ) {}
  closeDialog() {
    this.dialogRef.close(AddBankDetailsComponent);
  }

  types: type[] = [
    { value: "Bank Type-1", viewValue: "Bank Type-1" },
    { value: "Bank Type-1", viewValue: "Bank Type-2" },
  ];

  Banks: bank[] = [
    { value: "Canara Bank", viewValue: "Canara Bank" },
    { value: "Indian Bank", viewValue: "Indian Bank" },
  ];
  sureIFSC() {
    this.dialogRef.close(AddBankDetailsComponent);
    this.dialog.open(SureIfscComponent, {
      width: "330px",
    });
  }
  findIfsc() {
    this.dialogRef.close(AddBankDetailsComponent);
    this.dialog.open(FindIfscComponent, {
      panelClass: "find_ifc",
    });
  }
}
