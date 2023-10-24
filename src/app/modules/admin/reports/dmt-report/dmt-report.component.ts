import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActionReportPopupComponent } from "../action-report-popup/action-report-popup.component";
import { MatPaginatorIntl } from "@angular/material/paginator";
interface id {
  value: string;
  viewValue: string;
}
export interface PeriodicElement {
  transaction_id: string;
  date: string;
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
    transaction_id: "0000 1254 5116",
    date: "20-02-2023",
    cus_no: "9884149798",
    beneficary_name: "Kumaran",
    bank: "Canara",
    beneficary_no: "Kumaran",
    rrn_num: "915010005088359",
    pay_mode: "IMPS",
    amount: "15,000.00",
    status: "3",
    action: "",
  },
  {
    transaction_id: "0000 1254 5116",
    date: "22-02-2023",
    cus_no: "9884149798",
    beneficary_name: "Kumaran",
    bank: "SBI",
    beneficary_no: "Raja",
    rrn_num: "915010005088359",
    pay_mode: "IMPS",
    amount: "35,000.00",
    status: "2",
    action: "",
  },
  {
    transaction_id: "0000 1254 5116",
    date: "10-02-2023",
    cus_no: "9884149798",
    beneficary_name: "Kumaran",
    bank: "Kotak",
    beneficary_no: "Siva",
    rrn_num: "915010005088359",
    pay_mode: "IMPS",
    amount: "25,000.00",
    status: "1",
    action: "",
  },
  {
    transaction_id: "0000 1254 5116",
    date: "25-02-2023",
    cus_no: "9884149798",
    beneficary_name: "Kumaran",
    bank: "Indian",
    beneficary_no: "Ganesh",
    rrn_num: "915010005088359",
    pay_mode: "IMPS",
    amount: "45,000.00",
    status: "0",
    action: "",
  },
];

interface status {
  value: string;
  viewValue: string;
}

interface mode {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-dmt-report",
  templateUrl: "./dmt-report.component.html",
  styleUrls: ["./dmt-report.component.scss"],
})
export class DMTReportComponent {
  displayedColumns: string[] = [
    "date",
    "transaction_id",
    "beneficary_name",
    "cus_no",
    "bank",
    "beneficary_no",
    "rrn_num",
    "pay_mode",
    "amount",
    "status",
    "action",
  ];
  dataSource = ELEMENT_DATA;

  id: id[] = [
    { value: "All", viewValue: "All" },
    { value: "Transaction Id", viewValue: "Transaction Id" },
    { value: "Customer Mobile Number", viewValue: "Customer Mobile Number" },
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

  status: status[] = [
    { value: "Pending", viewValue: "Pending" },
    { value: "Success", viewValue: "Success" },
    { value: "Failed", viewValue: "Failed" },
  ];

  mode: mode[] = [
    { value: "IMPS", viewValue: "IMPS" },
    { value: "NEFT", viewValue: "NEFT" },
    { value: "Online", viewValue: "Online" },
  ];

  toggleStyle: boolean = false;
  toggle() {
    console.log(this.toggleStyle);
    this.toggleStyle = !this.toggleStyle;
  }

  toggleStyle1: boolean = false;
}
