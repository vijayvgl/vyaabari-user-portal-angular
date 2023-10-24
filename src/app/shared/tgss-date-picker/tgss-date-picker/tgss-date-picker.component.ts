import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl, Validators } from '@angular/forms';
import { checkNull } from 'app/core/custom-validations/return-functions';

@Component({
  selector: 'date-picker',
  templateUrl: './tgss-date-picker.component.html',
  styleUrls: ['./tgss-date-picker.component.scss']
})
export class TgssDatePickerComponent implements OnInit, OnChanges {
  @Input() public label: any;
  @Input() public required: boolean;
  @Input() public form_control: AbstractControl;
  @Input() public placeholder: any

  @Input() public min_date: Date;
  @Input() public max_date: Date

  @Input() public from: boolean;
  @Input() public to: boolean

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.UIappearance()
  }

  ngOnInit(): void {
    this.UIappearance()
  }

  checkNull(data: any) {
    return checkNull(data)
  }

  UIappearance() {

    this.form_control = new FormControl();
    //  Set Validators
    switch (this.required) {
      case true: {
        this.form_control.setValidators([Validators.required])
        this.form_control.updateValueAndValidity()
      }
        break
      default: {
        this.form_control.clearValidators()
        this.form_control.updateValueAndValidity()
      }
        break
    }
    // Label
    this.label = checkNull(this.label) ? this.label : "Date Picker";
    // Placeholder 
    this.placeholder = checkNull(this.placeholder) ? this.placeholder : "DD-MM-YYYY";
    //
  }


}
