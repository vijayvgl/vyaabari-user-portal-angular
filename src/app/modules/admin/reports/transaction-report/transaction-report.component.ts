import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginatorIntl } from '@angular/material/paginator';
interface id {
  value: string;
  viewValue: string;
}
export interface PeriodicElement {
  date:string;
  transaction_id: string;
  mobile_number: string;
  name: string;
  acc_number: string;
  type:string;
  bank_name:string;
  status:string;
  credit:string
  

}
const ELEMENT_DATA: PeriodicElement[] = [
  {date:"",transaction_id:'202305115480', mobile_number:'8987876765', name: 'N/A',  acc_number:"N/A", type: 'COLLECTMONEY', bank_name: 'Yes-Bank',
  status: 'INITIATED' ,credit:"45,000"},

  {date:"",transaction_id:'202305115480', mobile_number:'8987876765', name: 'N/A',  acc_number:"N/A", type: 'COLLECTMONEY', bank_name: 'Yes-Bank',
  status: 'SUCCESS' ,credit:"45,000"},

  {date:"",transaction_id:'202305115480', mobile_number:'8457876765', name: 'N/A',  acc_number:"N/A", type: 'COLLECTMONEY', bank_name: 'N/A',
  status: 'INITIATED' ,credit:"15,000"},

  {date:"",transaction_id:'202305115480', mobile_number:'8455676765', name: 'N/A',  acc_number:"N/A", type: 'COLLECTMONEY', bank_name: 'N/A',
  status: 'SUCCESS' ,credit:"10,000"},

 



];

@Component({
  selector: 'app-transaction-report',
  templateUrl: './transaction-report.component.html',
  styleUrls: ['./transaction-report.component.scss']
})

export class TransactionReportComponent {

  displayedColumns: string[] = ['date','transaction_id', 'mobile_number', 'name', 'acc_number', 'type', 'bank_name', 'status' , 'credit'];
  dataSource = ELEMENT_DATA;
  id: id[] = [
    {value: 'All', viewValue: 'All'},
    {value: 'Transaction Id', viewValue: 'Transaction Id'},
    {value: 'Customer Mobile Number', viewValue: 'Customer Mobile Number'},
  ];
  constructor(public dialog: MatDialog,
    public _MatPaginatorIntl: MatPaginatorIntl) {}

    ngOnInit(){
      this._MatPaginatorIntl.itemsPerPageLabel = "Items per page"
    }
}
