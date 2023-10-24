import { Component } from "@angular/core";
import { MatDialogRef, MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-paynow",
  templateUrl: "./paynow.component.html",
  styles: [],
})
export class PaynowComponent {
  constructor(
    public dialogRef: MatDialogRef<PaynowComponent>,
    public dialog: MatDialog
  ) {}

  closeDialog() {
    this.dialogRef.close(PaynowComponent);
  }
}
