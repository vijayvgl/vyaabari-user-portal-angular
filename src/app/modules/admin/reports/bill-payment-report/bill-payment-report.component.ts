import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginatorIntl } from "@angular/material/paginator";
interface id {
  value: string;
  viewValue: string;
}
export interface PeriodicElement {
  transaction_date: string;
  transaction_id: string;
  mobile_no: string;
  amount: string;
  agent: string;
  agent_tds: string;
  agent_without_tds: string;
  rrn_no: string;

  status: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    transaction_date: "25-02-2023",
    transaction_id: "000215487564",
    mobile_no: "9884149798",
    amount: "15,000.00",
    agent: "0.00",
    agent_tds: "0.00",
    agent_without_tds: "0.00",
    rrn_no: "915010005088359",
    status: "3",
  },

  {
    transaction_date: "20-02-2023",
    transaction_id: "000215487564",
    mobile_no: "98844569798",
    amount: "45,000.00",
    agent: "0.00",
    agent_tds: "0.00",
    agent_without_tds: "0.00",
    rrn_no: "915010005088359",
    status: "2",
  },

  {
    transaction_date: "30-02-2023",
    transaction_id: "000215487564",
    mobile_no: "9874149798",
    amount: "65,000.00",
    agent: "0.00",
    agent_tds: "0.00",
    agent_without_tds: "0.00",
    rrn_no: "915010005088359",
    status: "0",
  },

  {
    transaction_date: "22-02-2023",
    transaction_id: "000215487564",
    mobile_no: "9884149798",
    amount: "45,000.00",
    agent: "0.00",
    agent_tds: "0.00",
    agent_without_tds: "0.00",
    rrn_no: "915010005088359",
    status: "1",
  },
];

@Component({
  selector: "app-bill-payment",
  templateUrl: "./bill-payment-report.component.html",
  styleUrls: ["./bill-payment-report.component.scss"],
})
export class BillPaymentReportComponent {

  billPaymentsForm: FormGroup;

  displayedColumns: string[] = [
    "transaction_date",
    "transaction_id",
    "mobile_no",
    "amount",
    "agent",
    "agent_tds",
    "agent_without_tds",
    "rrn_no",
    "status",
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
}
