import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';


@Component({
  selector: 'app-add-credits',
  templateUrl: './add-credits.component.html',
})
export class AddCreditsComponent {
  constructor(public dialogRef: MatDialogRef<AddCreditsComponent>) {}

  closeDialog() {
    this.dialogRef.close(AddCreditsComponent);
  }

}
