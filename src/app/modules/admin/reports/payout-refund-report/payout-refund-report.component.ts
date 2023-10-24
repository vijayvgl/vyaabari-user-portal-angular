import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginatorIntl } from '@angular/material/paginator';
interface status {
  value: string;
  viewValue: string;
}

export interface PeriodicElement {
  date: string;
  transaction_id: string;
  cus_name: string;
  cus_mob_no:string;
  beneficary_name:string;
  amount:string
  status: string;
  buttonText:string
}
const ELEMENT_DATA: PeriodicElement[] = [
  {date:'20-02-2023', transaction_id:'THG0 0012 1256',  cus_name: 'Kumaran', cus_mob_no: '8987876765', beneficary_name: 'Kumaran',
  amount: '45,000.00' ,  status: '0', buttonText:"Refund"},
  { date:'20-02-2023', transaction_id:'THG0 0012 1256',   cus_name: 'Kumaran', cus_mob_no: '8987876765', beneficary_name: 'Kumaran',
  amount: '10,000.00' , status: '1', buttonText:"Refund"},
  {date:'20-02-2023', transaction_id:'THG0 0012 1256',  cus_name: 'Raja', cus_mob_no: '8987876765', beneficary_name: 'Kumaran',
  amount: '12,000.00' ,  status: '3', buttonText:"Refund"},
  { date:'20-02-2023', transaction_id:'THG0 0012 1256',   cus_name: 'Kumaran', cus_mob_no: '8987876765', beneficary_name: 'Kumaran',
  amount: '16,000.00' , status: '2', buttonText:"Refund"},
  {date:'20-02-2023', transaction_id:'THG0 0012 1256', cus_name: 'Siva', cus_mob_no: '8987876765', beneficary_name: 'Kumaran',
  amount: '22,000.00' ,  status: '1',  buttonText:"Refund"},
  { date:'20-02-2023', transaction_id:'THG0 0012 1256',   cus_name: 'Ganesh', cus_mob_no: '8987876765', beneficary_name: 'Kumaran',
  amount: '22,000.00' ,status: '0', buttonText:"Refund"},





];

@Component({
  selector: 'app-payout-refund-report',
  templateUrl: './payout-refund-report.component.html',
  styleUrls: ['./payout-refund-report.component.scss']
})

export class PayoutRefundReportComponent {
  displayedColumns: string[] = [ 'date', 'transaction_id',  'cus_name', 'cus_mob_no', 'beneficary_name', 'amount' , 'status',  'action'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog,
    public _MatPaginatorIntl: MatPaginatorIntl) {}

    ngOnInit(){
      this._MatPaginatorIntl.itemsPerPageLabel = "Items per page"
    }
    toggleStyle: boolean = false;
    toggle() {
      console.log(this.toggleStyle);
      this.toggleStyle = !this.toggleStyle;
    }
  
    toggleStyle1: boolean = false;

    status: status[] = [
      {value: 'Reserved', viewValue: 'Reserved'},
      {value: 'Completed', viewValue: 'Completed'},
      {value: 'Pending', viewValue: 'Pending'},
    ];

    changeButtonText(row: any): void {
      // You can implement your logic here to change the button text
      // For example, toggle between "Click me" and "Clicked"
      row.buttonText = row.buttonText === "Refund" ? "Refunded" : "Refund";
    }
}
