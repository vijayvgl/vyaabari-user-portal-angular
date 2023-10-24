import { Component, Input, ViewChild } from "@angular/core";
import { FormGroup } from "@angular/forms";
interface bank {
  value: string;
  viewValue: string;
}
interface mode {
  value: string;
  viewValue: string;
}
@Component({
  selector: "app-cashin",
  templateUrl: "./cashin.component.html",
})
export class CashInComponent {
  @Input("title") public title: any;
  @Input("bank_name") public bank_name: any;
  cashInForm: FormGroup;
  selectedFile: File | null = null;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    if (this.selectedFile) {
    }
  }

  public cash: any[] = [
    { title: "Bank Name", bank_name: "Axis Bank" },
    { title: "Bank IFSC Code", bank_name: "IFSC009787" },
    { title: "Account Number", bank_name: "9282972347343" },
    { title: "Account Type", bank_name: "CURRENT" },
    {
      title: "Account Holder Name",
      bank_name: "VYABARI PAYMENT SERVICES PRIVATE LTD",
    },
  ];
  constructor() {}

  selectedValue: string;
  bank: bank[] = [
    { value: "Axis Bank", viewValue: "Axis Bank" },
    { value: "Canara Bank", viewValue: "Canara Bank" },
    { value: "SBI", viewValue: "SBI" },
  ];

  mode: mode[] = [
    { value: "Cash", viewValue: "Cash" },
    { value: "Bank", viewValue: "Bank" },
    { value: "IMPS", viewValue: "IMPS" },
    { value: "NEFT", viewValue: "NEFT" },
  ];
}
