import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { TopupClaimPopupComponent } from "../topup-claim-popup/topup-claim-popup.component";
import { MatPaginatorIntl } from "@angular/material/paginator";
import { CommantsCommonComponent } from "app/shared/components/models/commants-common/commants-common.component";

export interface PeriodicElement {
  transaction_id: string;
  id: string;
  deposit_mode: string;
  deposit_bank: string;
  deposit_date: string;
  type: string;
  comments: string;
  image: string;
  amount: string;
  date: string;
  status: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    transaction_id: "THF0 0012 5476",
    id: "THF0 0012 5476",
    deposit_mode: "Cheque",
    deposit_bank: "Axis",
    deposit_date: "18-07-2023 12:43:00",
    type: "-",
    comments: "Debit DMT IMPS TDS9003029597_Shenba",
    image: "",
    amount: "45,000.00",
    date: "-",
    status: "1",
  },

  {
    transaction_id: "THF0 0012 5476",
    id: "THF0 0012 5476",
    deposit_mode: "Cheque",
    deposit_bank: "Indian",
    deposit_date: "18-07-2023 12:43:00",
    type: "-",
    comments: "Debit DMT IMPS TDS9003029597_Shenba",
    image: "",
    amount: "45,000.00",
    date: "-",
    status: "0",
  },

  {
    transaction_id: "THF0 0012 5476",
    id: "THF0 0012 5476",
    deposit_mode: "Cheque",
    deposit_bank: "Axis",
    deposit_date: "18-07-2023 12:43:00",
    type: "-",
    comments: "Debit DMT IMPS TDS9003029597_Shenba",
    image: "",
    amount: "25,000.00",
    date: "-",
    status: "2",
  },

  {
    transaction_id: "THF0 0012 5476",
    id: "THF0 0012 5476",
    deposit_mode: "Cheque",
    deposit_bank: "Canara",
    deposit_date: "18-07-2023 12:43:00",
    type: "-",
    comments: "Debit DMT IMPS TDS9003029597_Shenba",
    image: "",
    amount: "48,000.00",
    date: "-",
    status: "3",
  },
];

@Component({
  selector: "app-topup-claim",
  templateUrl: "./topup-claim-report.component.html",
  styleUrls: ["./topup-claim-report.component.scss"],
})
export class TopUpClaimReportComponent {
  displayedColumns: string[] = [
    "transaction_id",
    "id",
    "deposit_mode",
    "deposit_bank",
    "deposit_date",
    "type",
    "comments",
    "image",
    "amount",
    "date",
    "status",
  ];
  dataSource = ELEMENT_DATA;

  actionClick() {
    this.dialog.open(TopupClaimPopupComponent, {
      width: "450px",
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

  openDialog() {
    this.dialog.open(CommantsCommonComponent, {
      panelClass: "transaction_details",
      width: "40%",
    });
  }
  
}
