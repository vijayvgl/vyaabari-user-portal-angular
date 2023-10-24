import { Component, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import {MatPaginator, MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
interface Widthdraw {
  value: string;
  viewValue: string;
}
export interface PeriodicElement {

  date: any;
  account: any;
  accountnumber: any;
  banktype: any;
  upiid: any;
  action:any
}
const ELEMENT_DATA: PeriodicElement[] = [
  { date: "24-08-2023", account: 'Balaji Sanmugam', accountnumber: "0054236781983", banktype: 'Current',  upiid: 'N/A', action: ''},
  { date: "24-04-2023", account: 'Ramar', accountnumber: "3454236781983", banktype: 'Saving',  upiid: '43567865', action: ''},
  { date: "25-04-2023", account: 'Kumar', accountnumber: "2454236781983", banktype: 'Saving',  upiid: 'N/A', action: ''},
  { date: "26-04-2023", account: 'Gopal', accountnumber: "1344236781983", banktype: 'Saving',  upiid: 'N/A', action: ''},
  { date: "27-04-2023", account: 'Raj Kumar', accountnumber: "6784236781983", banktype: 'Saving',  upiid: '345567865', action: ''},
  { date: "24/-8/2023", account: 'Bablo escobar', accountnumber: "0054236781983", banktype: 'Current',  upiid: 'N/A', action: ''},
  { date: "24/-8/2023", account: 'RJ Balaji', accountnumber: "0054236781983", banktype: 'Current',  upiid: '345567865', action: ''},

];
@Component({
  selector: 'app-widthdraw-limit',
  templateUrl: './widthdraw-limit.component.html',
  styles: [
  ],
  
  
})
export class WidthdrawLimitComponent {
  
  widthdraw: Widthdraw[] = [
    {value: 'Net Banking', viewValue: 'Net Banking'},
    {value: 'UPI', viewValue: 'UPI'},
    {value: 'Wallet', viewValue: 'Wallet'},
    
  ];
  
  displayedColumns: string[] = ['select', 'date', 'account', 'accountnumber', 'banktype', 'upiid','action'];

  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.date + 1}`;
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(
    public _MatPaginatorIntl: MatPaginatorIntl
  ) { }
  ngOnInit(){
    this._MatPaginatorIntl.itemsPerPageLabel = 'Items per page';
  }
}

