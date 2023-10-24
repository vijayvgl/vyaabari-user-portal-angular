import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
interface payment {
  title: string;
  svg?:any;
  path:any;
}

interface operator {
  value: string;
  viewValue: string;
}
interface state {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-bill-payment-form-new",
  templateUrl: "./bill-payment-form-new.component.html",
  styleUrls: ["./bill-payment-form-new.component.scss"],
})
export class BillPaymentFormNewComponent {
service: any;
  constructor(private _router: Router,public activatedRoute: ActivatedRoute) {
    this.service = this.activatedRoute.snapshot.queryParamMap.get('service');
    this.billPayControl = new FormControl('Cable TV')
  }

  current: any = 0
 electricity:boolean= false;
  operatorsMobile:boolean = false;
  municipalMobile:boolean = false;
  loadnnumber:boolean = false;
  institute:boolean = false;
  LandlineMObile:boolean = false;
  waterRnymber:boolean= false;
  onTabChanged(event) {
    console.log(event);
    this.current = event.index;
  }

  selectedValue: string;

  operators: operator[] = [
    { value: "ACT Digital TV", viewValue: "ACT-Digital-TV" },
    { value: "SCV Digital TV", viewValue: "SCV-Digital-TV" },
    { value: "TATA Play Digital TV", viewValue: "TATA-Play-Digital-TV" },
    { value: "Airtel Digital TV", viewValue: "Airtel-Digital-TV" },
    { value: "Sun Direct Digital TV", viewValue: "Sun-Direct-Digital-TV" },
  ];

  states: state[] = [
    { value: "Tamil Nadu", viewValue: "Tamil-Nadu" },
    { value: "Kerala", viewValue: "Kerala" },
    { value: "Karnataka", viewValue: "Karnataka " },
    { value: "Telungana", viewValue: "Telungana" },
  ];
  g;

  billPayControl: FormControl;
  navigate(data): void {
    this._router.navigate([data]);
  }
}
