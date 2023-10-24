import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-action-report-popup',
  templateUrl: './action-report-popup.component.html',
  styleUrls: ['./action-report-popup.component.scss']
})
export class ActionReportPopupComponent {

  @Input ('trans_id') public trans_id: any;
  @Input ('number') public number: any;

  public numbers: any[] = [
    { trans_id: "Transaction ID	", number: "202305115480" },
    { trans_id: "Account Holder Name	", number: "Kumaran" },
    { trans_id: "Sender Mobile Number", number: "9884149798" },
    { trans_id: "Beneficiary Name	", number: "Kumaran" },
    { trans_id: "Amount	", number: "₹ 45,000" },
    { trans_id: "Account Number	", number: "24646786376" },
    { trans_id: "Bank Name	", number: "STATE BANK OF INDIA" },
    { trans_id: "IFSC Code	", number: "SBIN0000869" },
    { trans_id: "RRN	", number: "-" },
    { trans_id: "Payment Mode", number: "IMPS" },
    { trans_id: "Agent Mobile No", number: "S1234567890" },

  
 ];

  // dialogRef: any;
  constructor(public dialogRef: MatDialogRef<ActionReportPopupComponent>){}
  closeDialog() {
    this.dialogRef.close(ActionReportPopupComponent);
  }
}
