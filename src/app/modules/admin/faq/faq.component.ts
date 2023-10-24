import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

interface operator {
  value: string;
  viewValue: string;
}


interface provider {
  value: string;
  viewValue: string;
}
interface state {
  value: string;
  viewValue: string;
}
interface circle  {
  value: string;
  viewValue: string;
}

interface cus_id  {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
})
export class FAQComponent {

@Input ('amount') public amount: any;
@Input ('tab_1') public tab_1 :any;
@Input ('days') public days: any;
@Input ('validity') public validity: any;
@Input ('network') public network: any;
@Input ('balance') public balance: any;
@Input ('button') public button: any;
@Input ('details') public details: any;
@Input ('network_check') public network_check: any;
@Input ('speed') public speed: any;
@Input ('unlimited') public unlimited: any;
@Input ('voice') public voice: any;
@Input ('sms_pack') public sms_pack: any;
@Input ('sms') public sms: any;
@Input ('list') public list: any;
@Input ('e_list') public e_list: any;

public recharge: any[] = [
  {amount:"₹ 75", days: "12 Days", validity: "Validity",network: "100 GB", balance:"Data" , button:"Apply" ,  details:"View Details" , network_check:"2 GB/day" , speed:"Data at high speed" , unlimited:"Unlimited" , voice:"Voice"  , sms_pack:"100 SMS/day" , sms:"SMS"},

  {amount:"₹ 40", days: "60 Days", validity: "Validity",network: "400 GB", balance:"Data" , button:"Apply" ,  details:"View Details" , network_check:"2 GB/day" , speed:"Data at high speed" , unlimited:"Unlimited" , voice:"Voice"  , sms_pack:"100 SMS/day" , sms:"SMS"},

  {amount:"₹ 90", days: "120 Days", validity: "Validity",network: "600 GB", balance:"Data" , button:"Apply" ,  details:"View Details" , network_check:"2 GB/day" , speed:"Data at high speed" , unlimited:"Unlimited" , voice:"Voice"  , sms_pack:"100 SMS/day" , sms:"SMS"},

];
public lists: any[] = [
  {list:"Premium payments will be processed between 8 am and 8 pm.", },
  {list:"Transactions submitted after this deadline will be processed the next day.", },
  {list:"Payments made on public holidays will be processed the next day. ", }
];

public office: any[] = [
  {e_list:"Bill payments will be processed between 8 a.m. and 8 p.m", },
  {e_list:"Transactions submitted after this deadline will be processed the next day.", },
  {e_list:"Payments made on public holidays will be processed the next day.  ", }
];

  panelOpenState = false;
  constructor(public dialog: MatDialog) { }
  current: any = 0
  selectedValue: string;
 

  operators: operator[] = [
    {value: 'Aadhaar Agent-0', viewValue: 'Aadhaar Agent'},
    {value: 'Aadhaar Customer-1', viewValue: 'Aadhaar Customer'},
    {value: 'Adani Capital-2', viewValue: 'Adani Capital'},

    {value: 'Aditya birla finance limited customer-3', viewValue: 'Aditya birla finance limited customer'},
    {value: 'Adya dairy products pvt ltd-4', viewValue: 'Adya dairy products pvt ltd'},
  ];


  circles: circle[] = [
    {value: 'Tamil Nadu', viewValue: 'Tamil Nadu'},
    {value: 'Kerala', viewValue: 'Kerala'},
    {value: 'Andra Pradesh', viewValue: 'Andra Pradesh'},
  ];


  state: state[] = [
    {value: 'Tamil Nadu', viewValue: 'Tamil Nadu'},
    {value: 'Kerala', viewValue: 'Kerala'},
    {value: 'Andra Pradesh', viewValue: 'Andra Pradesh'},
  ];
  provider: provider[] = [
    {value: 'Jio', viewValue: 'Jio'},
    {value: 'Airtel', viewValue: 'Airtel'},
    {value: 'Airtel', viewValue: 'Airtel'},


  ];

  cus_id: cus_id[] = [
    {value: '#001', viewValue: '#001'},
    {value: '#002', viewValue: '#002'},
    {value: '#003', viewValue: '#003'},


  ];
  toggleStyle: boolean = false;

  toggle(){
    console.log(this.toggleStyle);
    this.toggleStyle = !this.toggleStyle;
  }

  onTabChanged(event) {
    console.log(event)
    this.current = event.index
  }

  onCheckEvent(event) {
    console.log(event)
    this.current = event.index
  }
}
