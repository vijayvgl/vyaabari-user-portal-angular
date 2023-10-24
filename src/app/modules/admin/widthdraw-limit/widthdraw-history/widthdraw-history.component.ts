import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
interface type {
  value: string;
  viewValue: string;
}


 
@Component({
  selector: 'app-widthdraw-history',
  templateUrl: './widthdraw-history.component.html',
  styleUrls: ['./widthdraw-history.component.scss']
})
export class WidthdrawHistoryComponent {

  panelOpenState = false;
  constructor() { }
  current: any = 0
  selectedValue: string;
 

  

  type: type[] = [
    {value: 'Jio', viewValue: 'Jio'},
    {value: 'Airtel', viewValue: 'Airtel'},
    {value: 'VI', viewValue: 'VI'},
  ];


  displayedColumns: string[] = [ 'date', 'Transaction_Id', 'Account_Holder_Name',  'Mode','Bank' , 'Amount', 'Status'];

  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  date: any;
  Transaction_Id: any;
  Account_Holder_Name: any;
  Amount: string;
  Mode:any,
  Bank:any,
  Status:any


}

const ELEMENT_DATA: PeriodicElement[] = [
  {date: '23-03-23', Transaction_Id: '12345678909234567', Account_Holder_Name:"Kumar", Amount: '10,841.00', Mode:'UPI', Bank: 'IOB', Status: 1},
  {date: '24-03-23', Transaction_Id: '12345678354361213', Account_Holder_Name:"Vijay", Amount: '10,841.00', Mode:'Bank Transfer', Bank: 'Kotak', Status: 1},
  {date: '25-03-23', Transaction_Id: '12345632429234567', Account_Holder_Name:"Suriya", Amount: '10,841.00', Mode:'UPI', Bank: 'Canara', Status: 0},
  {date: '26-03-23', Transaction_Id: '12356858585234567', Account_Holder_Name:"Karthi", Amount: '10,841.00', Mode:'Bank Transfer', Bank: 'SBI', Status: 2},
  {date: '27-03-23', Transaction_Id: '12124414345634567', Account_Holder_Name:"John Doe", Amount: '10,841.00', Mode:'Bank Transfer', Bank: 'City Union', Status: 0},
  {date: '28-03-23', Transaction_Id: '12967678654744657', Account_Holder_Name:"Kajal", Amount: '10,841.00', Mode:'Bank Transfer', Bank: 'HDFC', Status: 1},

]
  



  

 

