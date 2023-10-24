import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { VerifyOtpPopupComponent } from "../verify-otp-popup/verify-otp-popup.component";
import { CreateBeneficiaryComponent } from "../create-beneficiary/create-beneficiary.component";
import { PaynowComponent } from "../paynow/paynow.component";
import { DeleteComponent } from "../delete/delete.component";
import { MatPaginatorIntl } from "@angular/material/paginator";
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { TransDetailComponent } from "../../money-transfer/beneficiary-manage/trans-detail/trans-detail.component";
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
  {
    date: "20-09-2023",
    beneficiary_name: "Rajkumar",
    beneficiary_mobile_no: "9874563210",
    account_number: "95600546845587",
    ifsc_code: "IBM001254",
    bank: "Indian Bank",
    action: "",
  },
  {
    date: "25-09-2023",
    beneficiary_name: "Rajkumar",
    beneficiary_mobile_no: "9874563210",
    account_number: "95600546845587",
    ifsc_code: "IBM001254",
    bank: "Indian Bank",
    action: "",
  },
  {
    date: "22-09-2023",
    beneficiary_name: "Rajkumar",
    beneficiary_mobile_no: "9874563210",
    account_number: "95600546845587",
    ifsc_code: "IBM001254",
    bank: "Indian Bank",
    action: "",
  },
  {
    date: "24-09-2023",
    beneficiary_name: "Rajkumar",
    beneficiary_mobile_no: "9874563210",
    account_number: "95600546845587",
    ifsc_code: "IBM001254",
    bank: "Indian Bank",
    action: "",
  },
];
export interface PeriodicElement2 {
transaction_id: string;
date: string;
beneficiary_name: string;
account_no: string;
transfer_type: any;
bank: any;  
amount: any;
status: any;
receipt: any;
}
const ELEMENT_DATA2: PeriodicElement2[] = [
{transaction_id: '#008856494',date: '29-09-2023',
beneficiary_name: 'Rajkumar', account_no: '95600546845587', transfer_type: 'IMPS', bank: 'Indian Bank',
amount: '10,000.00', status:'0',receipt: '',
},
{transaction_id: '#008856494',date: '29-09-2023', 
beneficiary_name: 'Rajkumar', account_no: '95600546845587', transfer_type: 'IMPS', bank: 'Indian Bank',
amount: '10,000.00', status:'1',receipt: '',
},
{transaction_id: '#008856494',date: '29-09-2023',
beneficiary_name: 'Rajkumar', account_no: '95600546845587', transfer_type: 'NEFT', bank: 'Indian Bank',
amount: '10,000.00', status:'2',receipt: '',
}
];
@Component({
  selector: "app-payout-beneficiary-manage",
  templateUrl: "./payout-beneficiary-manage.component.html",
  styleUrls: ["./payout-beneficiary-manage.component.css"],
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0" })),
      state("expanded", style({ height: "*" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")
      ),
    ]),
  ],
  // standalone: true,
})
export class PayoutBeneficiaryManageComponent implements OnInit {
displayedColumns: string[] = ['date','beneficiary_name','beneficiary_mobile_no', 'account_number', 'ifsc_code', 'bank', 'action'];
dataSource = ELEMENT_DATA;
dataSource2 = ELEMENT_DATA2;
displayedColumns2 = ['date','transaction_id','beneficiary_name',
'bank', 'account_no', 'transfer_type', 'amount', 'status', 'receipt'];
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
this.dialog.open(TransDetailComponent,{
  width: '50%'
}
);
}
}
