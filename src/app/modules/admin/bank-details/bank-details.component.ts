import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { AddBankDetailsComponent } from "./add-bank-details/add-bank-details.component";

@Component({
  selector: "app-bank-details",
  templateUrl: "./bank-details.component.html",
  styles: [],
})
export class BankDetailsComponent {
  constructor(public dialog: MatDialog) {}
  displayedColumns: string[] = [
    "Bank",
    "Account_Holder_Name",
    "Amount",
    "Mode",
    "Status",
  ];

  dataSource = ELEMENT_DATA;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  addbank() {
    this.dialog.open(AddBankDetailsComponent, {
      width: "70%",
      panelClass: "add_bank_popup",
    });
  }
}
export interface PeriodicElement {
  Account_Holder_Name: any;
  Amount: string;
  Mode: any;
  Bank: any;
  Status: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    Account_Holder_Name: "Kumar",
    Amount: "18061451080012",
    Mode: "IOB0123456",
    Bank: "IOB",
    Status: 1,
  },
  {
    Account_Holder_Name: "Vijay",
    Amount: "18061451080012",
    Mode: "KOT0123456",
    Bank: "Kotak",
    Status: 0,
  },
  {
    Account_Holder_Name: "Suriya",
    Amount: "18061451080012",
    Mode: "CBR0123456",
    Bank: "Canara",
    Status: 0,
  },
  {
    Account_Holder_Name: "Karthi",
    Amount: "18061451080012",
    Mode: "SBI123456",
    Bank: "SBI",
    Status: 0,
  },
  {
    Account_Holder_Name: "John Doe",
    Amount: "18061451080012",
    Mode: "CTU0123456",
    Bank: "City Union",
    Status: 0,
  },
  {
    Account_Holder_Name: "Kajal",
    Amount: "18061451080012",
    Mode: "HDFC0123456",
    Bank: "HDFC",
    Status: 0,
  },
];
