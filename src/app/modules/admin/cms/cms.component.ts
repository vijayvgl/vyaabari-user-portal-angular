import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";

interface type {
  value: string;
  viewValue: string;
}

interface name {
  value: string;
  viewValue: string;
  icon: any;
}
@Component({
  selector: "app-cms",
  templateUrl: "./cms.component.html",
})
export class CMSComponent {
  
  constructor() {}

  cmsForm: FormGroup;

  type: type[] = [
    { value: "Airtel", viewValue: "Airtel" },
    { value: "Jio", viewValue: "Jio" },
    { value: "VI", viewValue: "VI" },
  ];

  name: name[] = [
    { value: "Swiggy", viewValue: "Swiggy", icon:'assets/images/bill/swiggy.png' },
    { value: "Amazon", viewValue: "Amazon", icon:'assets/images/bill/amazon.png' },
  ];
}
