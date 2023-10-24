import { Component, Directive, HostListener, OnInit } from '@angular/core';
import { MandraRdSeviceComponent } from '../mandra-rd-sevice/mandra-rd-sevice.component';
import { MatDialog } from '@angular/material/dialog';
import { FilterComponent } from './filter/filter.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { animate, state, style, transition, trigger } from '@angular/animations';
interface operator {
  value: string;
  viewValue: string;
  icon:any;

}
interface Device {
  value: string;
  viewValue: string;
}
export interface PeriodicElement {
beneficiary: string;
aadharno: string;
bank: string;
device: string;
  receipt: string;
  account_number: string;
  date: any;
  amount: any;
  status: any;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {date: '06-05-2023', beneficiary: 'Rajkumar', account_number: '0012 35467 4590',bank: 'SBI',
   amount: '10,000.00', status:'0',aadharno: '784512369654',device: 'Mandra',receipt: ''},
   {date: '06-05-2023', beneficiary: 'Rajkumar', account_number: '0012 35467 4590',bank: 'SBI',
   amount: '10,000.00', status:'0',aadharno: '784512369654',device: 'Mandra',receipt: ''},

];



@Component({
  selector: 'app-aeps-services',
  templateUrl: './aeps-services.component.html',
  styleUrls: ['./aeps-services.component.css'],
  animations: [
    trigger('detailExpand', [
    state('collapsed', style({height: '0px', minHeight: '0'})),
    state('expanded', style({height: '*'})),
    transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
    ],
})
export class AepsServicesComponent implements OnInit{

  displayedColumns: string[] = ['date','beneficiary','aadharno','bank','device','account_number', 'amount', 'status','receipt'];
  dataSource = ELEMENT_DATA;
  // dataSource = ELEMENT_DATA;
  columnsToDisplay = ['Date','Beneficiary','Aadharno','Bank','Device','Account_number', 'Amount', 'Status','Receipt'];
columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
expandedElement: PeriodicElement | null;
current: any = 0
  constructor(public dialog: MatDialog,
    public _MatPaginatorIntl: MatPaginatorIntl){}

  id: any;
  onTabChanged(event) {
    console.log(event)
    this.current = event.index
    

  }

  toggleStyle: boolean = false;
  toggle() {
    console.log(this.toggleStyle);
    this.toggleStyle = !this.toggleStyle;
  }

  operators: operator[] = [
    {value: 'Canara Bank', viewValue: 'Canara Bank' ,  icon:'assets/images/bank.png'},
    {value: 'Indian Bank', viewValue: 'Indian Bank' ,  icon:'assets/images/bank.png' },
    {value: 'National Bank', viewValue: 'National Bank' ,  icon:'assets/images/bank.png'},
   
  ];
  devices: Device[] = [
    {value: 'Device1', viewValue: 'Device1'},
    {value: 'Device2', viewValue: 'Device2'},
    {value: 'Device3', viewValue: 'Device3'},
   
  ];
  bank: Device[] = [
    {value: 'SBI', viewValue: 'SBI'},
    {value: 'ICICI', viewValue: 'ICICI'}
   
  ];
  status: any = [
    {value: 'Success', viewValue: 'Success'},
    {value: 'Pending', viewValue: 'Pending'},
    {value: 'Failed', viewValue: 'Failed'}
   
  ];
  formatInput (event: any): void {
    const inputElement = event.target;
    const inputValue: string = inputElement.value.replace(/\D/g, '');
    const formattedValue: string = this.addSpaces(inputValue, 4);
    inputElement.value = formattedValue;
  }

  private addSpaces(value: string, every: number): string {
    const regex = new RegExp(`\\B(?=(\\d{${every}})+(?!\\d))`, 'g');
    return value.replace(regex, ' - ');
  }
  openDialog() {
    this.dialog.open(MandraRdSeviceComponent, {
      width: '470px',
      data: {type: 1},
    });
  }
  openDialog1() {
    this.dialog.open(MandraRdSeviceComponent, {
      width: '470px',
      data: {type: 2},
    });
  }
  openDialog2() {
    this.dialog.open(MandraRdSeviceComponent, {
      width: '470px',
      data: {type:3},
    });
  }

  openFilter() {
    this.dialog.open(FilterComponent, {
      width: '350px'
    });
  }

  TransactionDetail() {
    this.dialog.open(TransactionsComponent, {
      width: '50%',
      data: {type: 'aeps'}
    });
  }
 ngOnInit(): void {
  this._MatPaginatorIntl.itemsPerPageLabel = 'Item per page';
}
}
