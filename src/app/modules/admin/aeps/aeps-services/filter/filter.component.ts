import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  constructor(public dialogRef: MatDialogRef<FilterComponent>) {}

  paymentDate: string;
  dates: string[] = ['Last 7 days', 'Last 15 days', 'Last 30 days', 'Last 3 Months', 'Last 1 Year', 'Enter Date'];

  closeDialog() {
    this.dialogRef.close(FilterComponent);
  }
}
