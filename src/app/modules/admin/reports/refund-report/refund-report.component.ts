import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginatorIntl } from "@angular/material/paginator";

export interface PeriodicElement {
  transaction_id: string;
  status: string;
  cus_name: string;
  trans_inistiated: string;
  trans_proceed: string;
  cus_mob_no: string;
  beneficary_name: string;
  amount: string;
  buttonText: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    transaction_id: "THF0 0012 5476",
    status: "1",
    cus_name: "Kumaran",
    cus_mob_no: "8987876765",
    beneficary_name: "Kumaran",
    amount: "45,000.00",
    buttonText: "Refund",
    trans_inistiated: "20-02-2023",
    trans_proceed: "20-03-2023",
  },
  {
    transaction_id: "THF0 0012 5476",
    status: "2",
    cus_name: "Kumaran",
    cus_mob_no: "8987876765",
    beneficary_name: "Kumaran",
    amount: "10,000.00",
    buttonText: "Refund",
    trans_inistiated: "20-02-2023",
    trans_proceed: "20-03-2023",
  },
  {
    transaction_id: "THF0 0012 5476",
    status: "3",
    cus_name: "Raja",
    cus_mob_no: "8987876765",
    beneficary_name: "Kumaran",
    amount: "12,000.00",
    buttonText: "Refund",
    trans_inistiated: "20-02-2023",
    trans_proceed: "20-03-2023",
  },
  {
    transaction_id: "THF0 0012 5476",
    status: "2",
    cus_name: "Kumaran",
    cus_mob_no: "8987876765",
    beneficary_name: "Kumaran",
    amount: "16,000.00",
    buttonText: "Refund",
    trans_inistiated: "20-02-2023",
    trans_proceed: "20-03-2023",
  },
  {
    transaction_id: "THF0 0012 5476",
    status: "1",
    cus_name: "Siva",
    cus_mob_no: "8987876765",
    beneficary_name: "Kumaran",
    amount: "22,000.00",
    buttonText: "Refund",
    trans_inistiated: "20-02-2023",
    trans_proceed: "20-03-2023",
  },
  {
    transaction_id: "THF0 0012 5476",
    status: "0",
    cus_name: "Ganesh",
    cus_mob_no: "8987876765",
    beneficary_name: "Kumaran",
    amount: "22,000.00",
    buttonText: "Refund",
    trans_inistiated: "20-02-2023",
    trans_proceed: "20-03-2023",
  },
];

interface status {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-refund-report",
  templateUrl: "./refund-report.component.html",
  styleUrls: ["./refund-report.component.scss"],
})
export class RefundReportComponent {
  displayedColumns: string[] = [
    
    "trans_inistiated",
    "trans_proceed",
    "transaction_id",
    "cus_name",
    "cus_mob_no",
    "beneficary_name",
    "amount",
    "status",
    "action",
  ];
  dataSource = ELEMENT_DATA;

  constructor(
    public dialog: MatDialog,
    public _MatPaginatorIntl: MatPaginatorIntl
  ) {}

  ngOnInit() {
    this._MatPaginatorIntl.itemsPerPageLabel = "Items per page";
  }

  status: status[] = [
    { value: "Pending", viewValue: "Pending" },
    { value: "Success", viewValue: "Success" },
    { value: "Failed", viewValue: "Failed" },
  ];

  toggleStyle: boolean = false;
  toggle() {
    console.log(this.toggleStyle);
    this.toggleStyle = !this.toggleStyle;
  }

    changeButtonText(row: any): void {
      // You can implement your logic here to change the button text
      // For example, toggle between "Click me" and "Clicked"
      row.buttonText = row.buttonText === "Refund" ? "Refunded" : "Refunded";
    }
}
