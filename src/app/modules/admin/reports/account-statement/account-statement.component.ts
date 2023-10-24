import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginatorIntl } from "@angular/material/paginator";
import { CommantsCommonComponent } from "app/shared/components/models/commants-common/commants-common.component";

export interface PeriodicElement {
  transaction_id: string;
  trans_inistiated: string;
  trans_proceed: string;
  customer_name: string;
  mobile_number: string;
  credit: string;
  debit: string;
  open_balance: string;
  close_balance: string;
  comments: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    transaction_id: "TR7845452216",
    credit: "0.00",
    debit: "0.00",
    open_balance: "10,841.00",
    close_balance: "10,841.00",
    comments: "Debit DMT IMPS TDS9003029597_Shenba",
    trans_inistiated: "20-02-2023",
    trans_proceed: "20-03-2023",
    customer_name: "Muthukumar",
    mobile_number: "8754854215",
  },
  {
    transaction_id: "TR7845452216",
    credit: "0.00",
    debit: "0.00",
    open_balance: "10,841.00",
    close_balance: "10,841.00",
    comments: "Debit DMT IMPS TDS9003029597_Shenba",
    trans_inistiated: "20-02-2023",
    trans_proceed: "20-03-2023",
    customer_name: "Muthukumar",
    mobile_number: "8754854215",
  },
  {
    transaction_id: "TR7845452216",
    credit: "0.00",
    debit: "0.00",
    open_balance: "10,841.00",
    close_balance: "10,841.00",
    comments: "Debit DMT IMPS TDS9003029597_Shenba",
    trans_inistiated: "20-02-2023",
    trans_proceed: "20-03-2023",
    customer_name: "Muthukumar",
    mobile_number: "8754854215",
  },
  {
    transaction_id: "TR7845452216",
    credit: "0.00",
    debit: "0.00",
    open_balance: "10,841.00",
    close_balance: "10,841.00",
    comments: "Debit DMT IMPS TDS9003029597_Shenba",
    trans_inistiated: "20-02-2023",
    trans_proceed: "20-03-2023",
    customer_name: "Muthukumar",
    mobile_number: "8754854215",
  },
];

@Component({
  selector: "app-account-statement",
  templateUrl: "./account-statement.component.html",
  styleUrls: ["./account-statement.component.scss"],
})
export class AccountStatementComponent {
  displayedColumns: string[] = [
    "trans_inistiated",
    "trans_proceed",
    "transaction_id",
    "customer_name",
    "mobile_number",
    "credit",
    "debit",
    "open_balance",
    "close_balance",
    "comments",
  ];
  dataSource = ELEMENT_DATA;

  accountStatementForm: FormGroup;

  toggleStyle: boolean = false;
  toggle() {
    console.log(this.toggleStyle);
    this.toggleStyle = !this.toggleStyle;
  }

  toggleStyle1: boolean = false;

  constructor(
    public dialog: MatDialog,
    public _MatPaginatorIntl: MatPaginatorIntl
  ) {}

  ngOnInit() {
    this._MatPaginatorIntl.itemsPerPageLabel = "Items per page";
  }

  openDialog() {
    this.dialog.open(CommantsCommonComponent, {
      panelClass: "transaction_details",
      width: "40%",
    });
  }

}
