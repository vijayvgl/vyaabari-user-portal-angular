import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";

interface payment {
  title: string;
  svg?: any;
  path: any;
}

@Component({
  selector: "app-bil-payments",
  templateUrl: "./bil-payments.component.html",
  styles: [],
})
export class BilPaymentsComponent {
  constructor(private _router: Router) {
    this.billPayControl = new FormControl("Cable TV");
  }
  current: any = 0;
  electricity: boolean = false;
  operatorsMobile: boolean = false;
  municipalMobile: boolean = false;
  loadnnumber: boolean = false;
  institute: boolean = false;
  LandlineMObile: boolean = false;
  waterRnymber: boolean = false;
  onTabChanged(event) {
    console.log(event);
    this.current = event.index;
  }

  selectedValue: string;

  payments: payment[] = [
    {
      title: "Electricity",
      path: "bill-payments/bill-payments-form",
      svg: "electricity_new",
    },
    { title: "Water", path: "bill-payments/bill-payments-form", svg: "water" },
    {
      title: "Gas (Pipeline)",
      path: "bill-payments/bill-payments-form",
      svg: "gas_pipeline",
    },
    {
      title: "LPG Cylinder",
      path: "bill-payments/bill-payments-form",
      svg: "lpg_cyliner",
    },
    {
      title: "Fast Tag",
      path: "bill-payments/bill-payments-form",
      svg: "fast_tag",
    },
    {
      title: "Mobile Postpaid",
      path: "bill-payments/bill-payments-form",
      svg: "postpaid",
    },
    {
      title: "Landline Postpaid",
      path: "bill-payments/bill-payments-form",
      svg: "landline",
    },
    { title: "Loan", path: "bill-payments/bill-payments-form", svg: "loan" },
    {
      title: "Broadband Postpaid",
      path: "bill-payments/bill-payments-form",
      svg: "broadband",
    },
    {
      title: "Mutual Fund",
      path: "bill-payments/bill-payments-form",
      svg: "mutual_fund",
    },
    {
      title: "Municipal Tax",
      path: "bill-payments/bill-payments-form",
      svg: "tax",
    },
    {
      title: "Municipal Services",
      path: "bill-payments/bill-payments-form",
      svg: "service",
    },

    {
      title: " Cable TV",
      path: "bill-payments/bill-payments-form",
      svg: "cable_tv",
    },
    {
      title: "Recurring Deposit",
      path: "bill-payments/bill-payments-form",
      svg: "recuring_deposit",
    },
    {
      title: "Credit Card",
      path: "bill-payments/bill-payments-form",
      svg: "credit",
    },
    {
      title: "Insurance",
      path: "bill-payments/bill-payments-form",
      svg: "insurance",
    },
    {
      title: "General Insurance",
      path: "bill-payments/bill-payments-form",
      svg: "general_insurance",
    },
    {
      title: "Life Insurance",
      path: "bill-payments/bill-payments-form",
      svg: "life_insurance",
    },
    {
      title: "Housing Society",
      path: "bill-payments/bill-payments-form",
      svg: "soceity",
    },
    {
      title: "Education",
      path: "bill-payments/bill-payments-form",
      svg: "education",
    },
    {
      title: "Hospital",
      path: "bill-payments/bill-payments-form",
      svg: "hospital",
    },
    {
      title: "Hospital / Pathology",
      path: "bill-payments/bill-payments-form",
      svg: "pathology",
    },
    {
      title: "Subscription (Digital)",
      path: "bill-payments/bill-payments-form",
      svg: "sub_digital",
    },
    {
      title: "Subscription (Offline)",
      path: "bill-payments/bill-payments-form",
      svg: "sub_offline",
    },
    {
      title: "Subscription",
      path: "bill-payments/bill-payments-form",
      svg: "subcription",
    },
    {
      title: "Clubs & Associations",
      path: "bill-payments/bill-payments-form",
      svg: "clubs",
    },
    {
      title: "Donation",
      path: "bill-payments/bill-payments-form",
      svg: "donation",
    },
  ];

  billPayControl: FormControl;

  navigate(data): void {
    this._router.navigate([data]);
  }
}
