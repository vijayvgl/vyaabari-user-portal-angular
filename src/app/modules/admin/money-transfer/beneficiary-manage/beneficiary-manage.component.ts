import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CreateBeneficiaryComponent } from '../create-beneficiary/create-beneficiary.component';
import { PaynowComponent } from '../paynow/paynow.component';
import { DeleteComponent } from '../delete/delete.component';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { TransDetailComponent } from './trans-detail/trans-detail.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
export interface PeriodicElement {
date: string;
beneficiary_name: string;
beneficiary_mobile_no: string;
account_number: string;
ifsc_code: any;
bank: any;
action: any;
}
const ELEMENT_DATA: PeriodicElement[] = [
{date: '20-09-2023',beneficiary_name: 'Rajkumar',beneficiary_mobile_no: '9874563210', account_number: '95600546845587', ifsc_code: 'IBM001254', bank: 'Indian Bank',
action:''},
{date: '25-09-2023',beneficiary_name: 'Rajkumar',beneficiary_mobile_no: '9874563210', account_number: '95600546845587', ifsc_code: 'IBM001254', bank: 'Indian Bank',
action:''},
{date: '22-09-2023',beneficiary_name: 'Rajkumar',beneficiary_mobile_no: '9874563210', account_number: '95600546845587', ifsc_code: 'IBM001254', bank: 'Indian Bank',
action:''},
{date: '24-09-2023',beneficiary_name: 'Rajkumar',beneficiary_mobile_no: '9874563210', account_number: '95600546845587', ifsc_code: 'IBM001254', bank: 'Indian Bank',
action:''},
];
export interface PeriodicElement3 {
Transaction_Id: string;
Date: string;
Beneficiary_Name: string;
Account_No: string;
Transfer_Type: any;
Bank: any;  
Amount: any;
Status: any;
Receipt: any;
}
const ELEMENT_DATA3: PeriodicElement3[] = [
{Transaction_Id: '#008856494',Date: '29-09-2023',
Beneficiary_Name: 'Rajkumar', Account_No: '95600546845587', Transfer_Type: 'IMPS', Bank: 'Indian Bank',
Amount: '10,000.00', Status:'0',Receipt: '',
},
{Transaction_Id: '#008856494',Date: '29-09-2023', 
Beneficiary_Name: 'Rajkumar', Account_No: '95600546845587', Transfer_Type: 'IMPS', Bank: 'Indian Bank',
Amount: '10,000.00', Status:'1',Receipt: '',
},
{Transaction_Id: '#008856494',Date: '29-09-2023',
Beneficiary_Name: 'Rajkumar', Account_No: '95600546845587', Transfer_Type: 'NEFT', Bank: 'Indian Bank',
Amount: '10,000.00', Status:'2',Receipt: '',
}
];
@Component({
selector: 'app-beneficiary-manage',
templateUrl: './beneficiary-manage.component.html',
styleUrls: ['./beneficiary-manage.component.css'],
animations: [
trigger('detailExpand', [
state('collapsed', style({height: '0px', minHeight: '0'})),
state('expanded', style({height: '*'})),
transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
]),
],
// standalone: true,
})
export class BeneficiaryManageComponent implements OnInit {
displayedColumns: string[] = ['date','beneficiary_name','beneficiary_mobile_no', 'account_number', 'ifsc_code', 'bank', 'action'];
dataSource = ELEMENT_DATA;
dataSource3 = ELEMENT_DATA3;
columnsToDisplay = ['Date','Transaction_Id','Beneficiary_Name',
'Bank', 'Account_No', 'Transfer_Type', 'Amount', 'Status', 'Receipt'];
columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
expandedElement: PeriodicElement3 | null;
current: any = 0
beneficiary: any = [
 {value:'Rajkumar',viewValue: 'Rajkumar'},
 {value:'Kumar',viewValue: 'Kumar'},
]
status: any = [
  {value:'Pending',viewValue: 'Pending'},
  {value:'Success',viewValue: 'Success'},
  {value:'Failed',viewValue: 'Failed'},
 ]
 toggleStyle: boolean = false;
 toggle() {
   console.log(this.toggleStyle);
   this.toggleStyle = !this.toggleStyle;
 }
constructor(public dialog: MatDialog,
public _MatPaginatorIntl: MatPaginatorIntl){}
onTabChanged(event) {
this.current = event.index
}
ngOnInit(): void {
this._MatPaginatorIntl.itemsPerPageLabel = 'Item per page';
}
addBeneficiary() {
this.dialog.open(CreateBeneficiaryComponent, {
width: ''
});
}
paynow(){
this.dialog.open(PaynowComponent, {
width: '30%'
});
}
deleteModel(){
this.dialog.open(DeleteComponent, {
width: '484px'
});
}
TransactionDetail() {
this.dialog.open(TransDetailComponent, {
  width: '50%',
});
}
}
