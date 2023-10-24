import { Component } from '@angular/core';



interface merchant {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-loan-lead',
  templateUrl: './loan-lead.component.html',
  styles: [
  ]
})
export class LoanLeadComponent {
  selectedValue: string;
 

  merchants: merchant[] = [
    {value: 'Home Loan', viewValue: 'Home Loan'},
    {value: 'Gold Loan', viewValue: 'Gold Loan'},
    {value: 'Personal Loan', viewValue: 'Personal Loan'},

    {value: 'Short-trem Business Loan', viewValue: 'Short-trem Business Loan'},
    {value: 'Education Loan', viewValue: 'Education Loan'},
  ];

}
