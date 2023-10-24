import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { SettlementStatusPopupComponent } from "../settlement-status-popup/settlement-status-popup.component";
import { MatPaginatorIntl } from "@angular/material/paginator";
interface mode {
  value: string;
  viewValue: string;
}

interface status {
  value: string;
  viewValue: string;
}
export interface PeriodicElement {
  date: string;
  transaction_id: string;
  cus_name: string;
  payment_mode: string;
  acc_number: string;
  rrn_num: string;
  bank: string;
  ifsc_code: string;
  category: string;
  payment_amount: string;
  status: string;
  kyc_status: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    date: "20-02-2023",
    transaction_id: "THF0 0012 5476",
    cus_name: "Kumaran",
    payment_mode: "IMPS",
    acc_number: "30610272522",
    rrn_num: "-",
    bank: "state bank of india",
    ifsc_code: "SBIN0002239",
    category: "Rent Payment",
    payment_amount: "210.00",
    status: "3",
    kyc_status: "Progress",
  },

  {
    date: "23-02-2023",
    transaction_id: "THF0 0012 5476",
    cus_name: "Kumaran",
    payment_mode: "IMPS",
    acc_number: "30610272522",
    rrn_num: "-",
    bank: "state bank of india",
    ifsc_code: "SBIN0002239",
    category: "Rent Payment",
    payment_amount: "110.00",
    status: "2",
    kyc_status: "Progress",
  },

  {
    date: "25-02-2023",
    transaction_id: "THF0 0012 5476",
    cus_name: "Kumaran",
    payment_mode: "IMPS",
    acc_number: "30610272522",
    rrn_num: "-",
    bank: "state bank of india",
    ifsc_code: "SBIN0002239",
    category: "Rent Payment",
    payment_amount: "120.00",
    status: "1",
    kyc_status: "Progress",
  },

  {
    date: "20-02-2023",
    transaction_id: "THF0 0012 5476",
    cus_name: "Kumaran",
    payment_mode: "IMPS",
    acc_number: "30610272522",
    rrn_num: "-",
    bank: "state bank of india",
    ifsc_code: "SBIN0002239",
    category: "Rent Payment",
    payment_amount: "210.00",
    status: "2",
    kyc_status: "Progress",
  },
];

@Component({
  selector: "app-settlement-status",
  templateUrl: "./settlement-status-report.component.html",
  styleUrls: ["./settlement-status-report.component.scss"],
})
export class SettlementStatusReportComponent {
  displayedColumns: string[] = [
    "date",
    "transaction_id",
    "cus_name",
    "payment_mode",
    "acc_number",
    "rrn_num",
    "bank",
    "ifsc_code",
    "category",
    "payment_amount",
    "status",
    "kyc_status",
  ];
  dataSource = ELEMENT_DATA;

  mode: mode[] = [
    { value: "Net Banking", viewValue: "Net Banking" },
    { value: "AEPS", viewValue: "AEPS" },
    { value: "Credit", viewValue: "Credit" },
  ];
  status: status[] = [
    { value: "Completed", viewValue: "Completed" },
    { value: "Pending", viewValue: "Pending" },
  ];
  actionClick() {
    this.dialog.open(SettlementStatusPopupComponent, {
      width: "360px",
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
