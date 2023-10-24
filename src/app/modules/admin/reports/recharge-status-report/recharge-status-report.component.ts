import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginatorIntl } from "@angular/material/paginator";
interface id {
  value: string;
  viewValue: string;
}
interface type {
  value: string;
  viewValue: string;
}
interface status {
  value: string;
  viewValue: string;
}
interface name {
  value: string;
  viewValue: string;
}
export interface PeriodicElement {
  transaction_date: string;
  transaction_id: string;

  type: string;
  id: string;
  name: string;
  cus_number: string;
  amount: string;
  commision: string;
  tax: string;
  tds: string;
  tds_amt: string;
  comments: string;
  status_check: string;
  status: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    transaction_date: "20-02-2023",
    transaction_id: "THF0 0012 5476",
    type: "Prepaid",
    id: "1",
    name: "Airtel",
    cus_number: "9597470328",
    amount: "45,000.00",
    commision: "4.80",
    tax: "-",
    tds: "-",
    tds_amt: "45,000.00",
    comments: "-",
    status_check: "Check",
    status: "3",
  },

  {
    transaction_date: "20-02-2023",
    transaction_id: "THF0 0012 5476",
    type: "Prepaid",
    id: "2",
    name: "VI",
    cus_number: "9597470328",
    amount: "45,000.00",
    commision: "4.80",
    tax: "-",
    tds: "-",
    tds_amt: "45,000.00",
    comments: "-",
    status_check: "Check",
    status: "2",
  },

  {
    transaction_date: "20-02-2023",
    transaction_id: "THF0 0012 5476",
    type: "Prepaid",
    id: "3",
    name: "Jio",
    cus_number: "9597470328",
    amount: "45,000.00",
    commision: "4.80",
    tax: "-",
    tds: "-",
    tds_amt: "45,000.00",
    comments: "-",
    status_check: "Check",
    status: "1",
  },

  {
    transaction_date: "20-02-2023",
    transaction_id: "THF0 0012 5476",
    type: "Prepaid",
    id: "1",
    name: "VI",
    cus_number: "9597470328",
    amount: "45,000.00",
    commision: "4.80",
    tax: "-",
    tds: "-",
    tds_amt: "45,000.00",
    comments: "-",
    status_check: "Check",
    status: "0",
  },
];

@Component({
  selector: "app-recharge-status",
  templateUrl: "./recharge-status-report.component.html",
  styleUrls: ["./recharge-status-report.component.scss"],
})
export class RechargeStatusReportComponent {
  displayedColumns: string[] = [
    "transaction_date",
    "transaction_id",
    "type",
    "id",
    "name",
    "cus_number",
    "amount",
    "commision",
    "tax",
    "tds",
    "tds_amt",
    "comments",
    "status_check",
    "status",
  ];
  dataSource = ELEMENT_DATA;
  id: id[] = [
    { value: "All", viewValue: "All" },
    { value: "Transaction Id", viewValue: "Transaction Id" },
    { value: "Customer Mobile Number", viewValue: "Customer Mobile Number" },
  ];

  type: type[] = [
    { value: "Net Banking", viewValue: "Net Banking" },
    { value: "AEPS", viewValue: "AEPS" },
  ];


  status: status[] = [
    { value: "Completed", viewValue: "Completed" },
    { value: "Pending", viewValue: "Pending" },
  ];


  name: name[] = [
    { value: "Raj", viewValue: "Raj" },
    { value: "Ganesh", viewValue: "Ganesh" },
    { value: "Vijay", viewValue: "Vijay" },
  ];
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
