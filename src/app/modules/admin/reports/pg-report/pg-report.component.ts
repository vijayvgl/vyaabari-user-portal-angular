import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginatorIntl } from "@angular/material/paginator";
import { PgLinkDetailComponent } from "app/shared/components/models/pg-link-detail/pg-link-detail.component";
interface type {
  value: string;
  viewValue: string;
}
interface status {
  value: string;
  viewValue: string;
}
export interface PeriodicElement {
  create_date: string;
  update_date: string;
  transaction_id: string;
  receipt: string;
  create_link: string;
  bank: string;
  number: string;
  name: string;
  amount: string;
  service_charge: string;
  order_number: string;
  payout_id: string;
  status: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    create_date: "20-02-2023",
    update_date: "22-02-2023",
    transaction_id: "THF0 0012 5476",
    receipt: "Recipient Link",
    create_link: "PG-Created- Link",
    bank: "Canara",
    number: "1234567890",
    name: "ABC",
    amount: "45,000.00",
    service_charge: "10,841.00",
    order_number: "order_MGl9RexhQHEfQC",
    payout_id: "-",
    status: "3",
  },
  {
    create_date: "22-02-2023",
    update_date: "26-02-2023",
    transaction_id: "THF0 0012 5476",
    receipt: "Recipient Link",
    create_link: "PG-Created- Link",
    bank: "Kotak",
    number: "1234567890",
    name: "ABC",
    amount: "45,000.00",
    service_charge: "10,841.00",
    order_number: "order_MGl9RexhQHEfQC",
    payout_id: "-",
    status: "2",
  },
  {
    create_date: "24-02-2023",
    update_date: "16-02-2023",
    transaction_id: "THF0 0012 5476",
    receipt: "Recipient Link",
    create_link: "PG-Created- Link",
    bank: "SBI",
    number: "1234567890",
    name: "ABC",
    amount: "45,000.00",
    service_charge: "10,841.00",
    order_number: "order_MGl9RexhQHEfQC",
    payout_id: "-",
    status: "1",
  },
  {
    create_date: "20-02-2023",
    update_date: "28-02-2023",
    transaction_id: "THF0 0012 5476",
    receipt: "Recipient Link",
    create_link: "PG-Created- Link",
    bank: "Canara",
    number: "1234567890",
    name: "ABC",
    amount: "45,000.00",
    service_charge: "10,841.00",
    order_number: "order_MGl9RexhQHEfQC",
    payout_id: "-",
    status: "0",
  },
];

@Component({
  selector: "app-pg-report",
  templateUrl: "./pg-report.component.html",
  styleUrls: ["./pg-report.component.scss"],
})
export class PGReportComponent {
  displayedColumns: string[] = [
    "create_date",
    "update_date",
    "transaction_id",
    "receipt",
    "create_link",
    "bank",
    "number",
    "name",
    "amount",
    "service_charge",
    "order_number",
    "payout_id",
    "status",
  ];
  dataSource = ELEMENT_DATA;
  type: type[] = [
    { value: "All", viewValue: "All" },
    { value: "Transaction Id", viewValue: "Transaction Id" },
    { value: "Customer Mobile Number", viewValue: "Customer Mobile Number" },
  ];

  status: status[] = [
    { value: "Pending", viewValue: "Pending" },
    { value: "Completed", viewValue: "Completed" },
    { value: "Pending", viewValue: "Pending" },
  ];

  constructor(public dialog: MatDialog,
    public _MatPaginatorIntl: MatPaginatorIntl) {}

    ngOnInit(){
      this._MatPaginatorIntl.itemsPerPageLabel = "Items per page"
    }

  openDialog() {
    this.dialog.open(PgLinkDetailComponent, {
      panelClass: "transaction_details",
      width: "40%",
    });
  }
  toggleStyle: boolean = false;

  toggle() {
    console.log(this.toggleStyle);
    this.toggleStyle = !this.toggleStyle;
  }

  toggleStyle1: boolean = false;
}
