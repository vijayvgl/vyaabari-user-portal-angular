import { Component, Input } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginatorIntl } from "@angular/material/paginator";
export interface PeriodicElement {
  date: string;
  transaction_id: string;
  mobile_number: string;
  name: string;
  acc_number: string;
  type: string;
  bank_name: string;
  biller_name: string;
  credit: string;
  debit: string;
  status: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    date: "",
    transaction_id: "THF0 0012 5476",
    mobile_number: "8987876765",
    name: "N/A",
    acc_number: "N/A",
    type: "COLLECTMONEY",
    bank_name: "Yes-Bank",
    biller_name: "N/A",
    credit: "45,000.00",
    debit: "45,000.00",
    status: "3",
  },

  {
    date: "",
    transaction_id: "THF0 0012 5476",
    mobile_number: "8987876765",
    name: "N/A",
    acc_number: "N/A",
    type: "COLLECTMONEY",
    bank_name: "Yes-Bank",
    biller_name: "N/A",
    credit: "45,000.00",
    debit: "45,000.00",
    status: "2",
  },

  {
    date: "",
    transaction_id: "THF0 0012 5476",
    mobile_number: "8457876765",
    name: "N/A",
    acc_number: "N/A",
    type: "COLLECTMONEY",
    bank_name: "N/A",
    biller_name: "N/A",
    credit: "15,000.00",
    debit: "45,000.00",
    status: "0",
  },

  {
    date: "",
    transaction_id: "THF0 0012 5476",
    mobile_number: "8455676765",
    name: "N/A",
    acc_number: "N/A",
    type: "COLLECTMONEY",
    bank_name: "N/A",
    biller_name: "N/A",
    credit: "10,000.00",
    debit: "45,000.00",
    status: "1",
  },
];

interface date {
  value: string;
  viewValue: string;
}

interface status {
  value: string;
  viewValue: string;
}

interface type {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-transaction-history",
  templateUrl: "./transaction-history.component.html",
})
export class TransactionHistoryComponent {
  displayedColumns: string[] = [
    "date",
    "transaction_id",
    "mobile_number",
    "name",
    "acc_number",
    "type",
    "bank_name",
    "biller_name",
    "credit",
    "debit",
    "status",
  ];
  dataSource = ELEMENT_DATA;
  panelOpenState = false;
  constructor(public dialog: MatDialog,
    public _MatPaginatorIntl: MatPaginatorIntl) {}

    ngOnInit(){
      this._MatPaginatorIntl.itemsPerPageLabel = "Items per page"
    }
  current: any = 0;
  selectedValue: string;

  date: date[] = [
    { value: "12-04-2023", viewValue: "12-04-2023" },
    { value: "12-05-2023", viewValue: "12-05-2023" },
    { value: "16-04-2023", viewValue: "16-04-2023" },
  ];

  status: status[] = [
    { value: "Pending", viewValue: "Pending" },
    { value: "Completed", viewValue: "Completed" },
    { value: "On-progress", viewValue: "On-progress" },
  ];

  type: type[] = [
    { value: "Jio", viewValue: "Jio" },
    { value: "Airtel", viewValue: "Airtel" },
    { value: "VI", viewValue: "VI" },
  ];
  toggleStyle: boolean = false;

  toggle() {
    console.log(this.toggleStyle);
    this.toggleStyle = !this.toggleStyle;
  }

  toggleStyle1: boolean = false;
}
