import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginatorIntl } from "@angular/material/paginator";
import { PgLinkDetailComponent } from "app/shared/components/models/pg-link-detail/pg-link-detail.component";
interface id {
  value: string;
  viewValue: string;
}
export interface PeriodicElement {
  create_date: string;
  update_date: string;
  transaction_id: string;
  number: string;
  name: string;
  receipt_link: string;
  create_link: string;
  amount: string;
  charge: string;
  utr_number: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    create_date: "23-06-2023",
    update_date: "24-06-2023",
    transaction_id: "THF0 0012 5476",
    number: "1234567890",
    name: "Abc",
    receipt_link: "Recipient Link",
    create_link: "PG-Created- Link",
    amount: "45,000.00",
    charge: "10,841.00",
    utr_number: "pay_125454",
  },
  {
    create_date: "23-06-2023",
    update_date: "24-06-2023",
    transaction_id: "THF0 0012 5476",
    number: "1234567890",
    name: "Abc",
    receipt_link: "Recipient Link",
    create_link: "PG-Created- Link",
    amount: "45,000.00",
    charge: "10,841.00",
    utr_number: "pay_125454",
  },
  {
    create_date: "23-06-2023",
    update_date: "24-06-2023",
    transaction_id: "THF0 0012 5476",
    number: "1234567890",
    name: "Abc",
    receipt_link: "Recipient Link",
    create_link: "PG-Created- Link",
    amount: "45,000.00",
    charge: "10,841.00",
    utr_number: "pay_125454",
  },
  {
    create_date: "23-06-2023",
    update_date: "24-06-2023",
    transaction_id: "THF0 0012 5476",
    number: "1234567890",
    name: "Abc",
    receipt_link: "Recipient Link",
    create_link: "PG-Created- Link",
    amount: "45,000.00",
    charge: "10,841.00",
    utr_number: "pay_125454",
  },
];

@Component({
  selector: "app-topup-report",
  templateUrl: "./topup-report.component.html",
  styleUrls: ["./topup-report.component.scss"],
})
export class TopUpReportComponent {
  displayedColumns: string[] = [
    "create_date",
    "update_date",
    "transaction_id",
    "number",
    "name",
    "receipt_link",
    "create_link",
    "amount",
    "charge",
    "utr_number",
  ];
  dataSource = ELEMENT_DATA;
  id: id[] = [
    { value: "All", viewValue: "All" },
    { value: "Transaction Id", viewValue: "Transaction Id" },
    { value: "Customer Mobile Number", viewValue: "Customer Mobile Number" },
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

  openDialog() {
    this.dialog.open(PgLinkDetailComponent, {
      panelClass: "transaction_details",
      width: "40%",
    });
  }
}
