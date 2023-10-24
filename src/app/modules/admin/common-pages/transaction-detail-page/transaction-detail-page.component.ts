import { Component, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator, MatPaginatorIntl } from "@angular/material/paginator";
import { TransactionsComponent } from "../../aeps/aeps-services/transactions/transactions.component";


export interface PeriodicElement {
  bank_rrn: any;
  amount: string;
  initiated_date: any,
  proceeded_date: any,
  status: string;
  receipt: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    amount: '5,000.00', bank_rrn: '24646786376', initiated_date: '20-05-2022',
    proceeded_date: '15-06-2022', status: '1', receipt: ''
  },
  {
    amount: '7,000.00', bank_rrn: '24646786376', initiated_date: '20-05-2022',
    proceeded_date: '15-06-2022', status: '0', receipt: ''
  },
  {
    amount: '10,000.00', bank_rrn: '24646786376', initiated_date: '20-05-2022',
    proceeded_date: '15-06-2022', status: '2', receipt: ''
  },
]


@Component({
  selector: "app-transaction-detail-page",
  templateUrl: "./transaction-detail-page.component.html",
  styleUrls: ["./transaction-detail-page.component.scss"]
})
export class TransactionDetailPageComponent {

  constructor(public dialog: MatDialog,
    public _MatPaginatorIntl: MatPaginatorIntl) { }

  ngOnInit(): void {
    this._MatPaginatorIntl.itemsPerPageLabel = 'Item per page';
  }

  public bankDetail: any[] = [
    { title: "Date", value: "12-02-2023" },
    { title: "Transaction Id", value: "757888564945" },
    { title: "Bank", value: "Indian Bank" },
    { title: "Account No", value: "95600546845587"},
    { title: "Beneficiary Name", value: "Rajkumar" },
    { title: "Amount", value: "₹ 10,000.00" },
    { title: "Transfer Type", value: "IMPS" },
    { title: "Status", value: "1" },
  ];

  displayedColumns: string[] = ['bank_rrn', 'initiated_date', 'proceeded_date', 'amount', 'status', 'receipt',];

  dataSource = ELEMENT_DATA;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  TransactionDetail() {
    this.dialog.open(TransactionsComponent, {
      width: '50%',
    });
  }


}
