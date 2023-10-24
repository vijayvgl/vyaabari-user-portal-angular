import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActionReportPopupComponent } from "../action-report-popup/action-report-popup.component";
import { MatPaginatorIntl } from "@angular/material/paginator";
interface status {
  value: string;
  viewValue: string;
}
interface mode {
  value: string;
  viewValue: string;
}
export interface PeriodicElement {
  date: string;
  transaction_id: string;

  cus_name: string;
  cus_no: string;
  beneficary_name: string;
  bank: string;
  beneficary_no: string;
  rrn_num: string;
  pay_mode: string;
  amount: string;
  status: string;
  action: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    date: "23-02-2023",
    transaction_id: "THF0 0012 5476",
    cus_name: "Kumaran",
    cus_no: "9884149798",
    beneficary_name: "Kumaran",
    bank: "Canara",
    beneficary_no: "45454545445",
    rrn_num: "915010005088359",
    pay_mode: "IMPS",
    amount: "15,000.00",
    status: "2",
    action: "",
  },

  {
    date: "20-02-2023",
    transaction_id: "THF0 0012 5476",
    cus_name: "Kumaran",
    cus_no: "9884149798",
    beneficary_name: "Kumaran",
    bank: "Canara",
    beneficary_no: "45454545445",
    rrn_num: "915010005088359",
    pay_mode: "IMPS",
    amount: "15,000.00",
    status: "1",
    action: "",
  },

  {
    date: "10-02-2023",
    transaction_id: "THF0 0012 5476",
    cus_name: "Kumaran",
    cus_no: "9884149798",
    beneficary_name: "Kumaran",
    bank: "SBI",
    beneficary_no: "45454545445",
    rrn_num: "915010005088359",
    pay_mode: "IMPS",
    amount: "15,000.00",
    status: "0",
    action: "",
  },

  {
    date: "20-02-2023",
    transaction_id: "THF0 0012 5476",
    cus_name: "Rajesh",
    cus_no: "9884149798",
    beneficary_name: "Rajesh",
    bank: "Kotak",
    beneficary_no: "45454545445",
    rrn_num: "915010005088359",
    pay_mode: "IMPS",
    amount: "15,000.00",
    status: "3",
    action: "",
  },
];

@Component({
  selector: "app-payout-transaction",
  templateUrl: "./payout-transaction-report.component.html",
  styleUrls: ["./payout-transaction-report.component.scss"],
})
export class PayoutTransactionReportComponent {
  displayedColumns: string[] = [
    "date",
    "transaction_id",
    "cus_name",
    "cus_no",
    "beneficary_name",
    "bank",
    "beneficary_no",
    "rrn_num",
    "pay_mode",
    "amount",
    "status",
    "action",
  ];
  dataSource = ELEMENT_DATA;

  status: status[] = [
    { value: "Completed", viewValue: "Completed" },
    { value: "Pending", viewValue: "Pending" },
  ];

  mode: mode[] = [
    { value: "Net Banking", viewValue: "Net Banking" },
    { value: "UPI", viewValue: "UPI" },
  ];
  actionClick() {
    this.dialog.open(ActionReportPopupComponent, {
      width: "900px",
    });
  }
  constructor(
    public dialog: MatDialog,
    public _MatPaginatorIntl: MatPaginatorIntl
  ) {}

  ngOnInit() {
    this._MatPaginatorIntl.itemsPerPageLabel = "Items per page";
  }
  toggleStyle: boolean = false;

  toggle() {
    console.log(this.toggleStyle);
    this.toggleStyle = !this.toggleStyle;
  }

  toggleStyle1: boolean = false;
}
