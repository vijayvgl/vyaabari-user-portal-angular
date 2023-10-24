import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { AbstractControl, FormControl, Validators } from '@angular/forms';
function checkNull(data: any) {
  return (
    data != null &&
    data != undefined &&
    data != '' &&
    (Array.isArray(data) ? data.length > 0 : true)
  );
}
@Component({
  selector: 'datepicker-stable',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit, OnChanges {
  /**
   * @param Appearance
   * @Notes Appearance for the Datepicker
   */
  @Input('appearance') public appearance: any;

  /**
   * @param Placeholder
   * @Notes Placeholder for the Datepicker
   */
  @Input('placeholder') public placeholder: any;

  /**
   * @param Label
   * @param Label2
   * @param Label_Position
   * @Notes Label for the Datepicker
   */
  @Input('label') public label: any;
  @Input('label2') public label2: any;
  @Input('first') public first: boolean = false;
  @Input('labelPosition') public labelPosition: 'fixed' | 'float' = 'float';

  /**
   * @param errorMessage
   * @Notes Error message  for the Datepicker in tooltip
   */
  @Input('errorMessage') public errorMessage: any;

  /**
   * @param Required
   * @Notes  Is that required or not
   * @value true|false
   */
  @Input('required') public required: boolean;

  /**
   * @param Formcontrol
   * @Notes  Formcontrol from the parent component
   * @value  formgroupname?.get('formcontrolname')
   */
  @Input('form_control') public form_control: AbstractControl;

  /**
   * @param Disabled
   * @Notes  If want to disable the datepicker
   * @value true|false
   */
  @Input(`disabled`) public disabled: boolean = false;

  /**
   * @param maximum
   * @Notes  set maximum date
   * @value  'yyyy-MM-dd' should be in date format
   */
  @Input(`maximum`) public maximum: any;

  /**
   * @param minimum
   * @Notes  set minimum date
   * @value  'yyyy-MM-dd' should be in date format
   */
  @Input(`minimum`) public minimum: any;

  /**
   * @param Typeable
   * @Notes  set the dates typeable
   */
  @Input(`typeable`) public typeable: boolean = false;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.UIapperance();
  }

  ngOnInit(): void {
    this.UIapperance();
  }

  UIapperance() {
    if (!checkNull(this.form_control)) {
      this.form_control = new FormControl();
    }

    this.appearance = checkNull(this.appearance) ? this.appearance : 'outline';
    this.placeholder = this.placeholder ? this.placeholder : 'DD-MM-YYYY';
    this.disabled ? this.form_control.disable() : '';
    // this.typeable ? this.form_control.setValidators([Validators.pattern('/(^0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(\d{4}$)/')]) : ''
    switch (this.required) {
      case true:
        {
          this.form_control.setValidators([Validators.required]);
          this.form_control.updateValueAndValidity();
        }
        break;
      default:
        {
          this.form_control.clearValidators();
          this.form_control.updateValueAndValidity();
        }
        break;
    }
  }

  checkDate(date: any) {
    return String(new Date(date)) != 'Invalid Date' ? new Date(date) : '';
  }

  checkNull(data: any) {
    return checkNull(data);
  }

  async onBlur(value) {
    /**
     * @step1 validate the date with regular expression
     * @step2 validate the date whether its a valid date or not
     * @step3 set the value for the formcontrol
     */
    const regExp = /(^0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(\d{4}$)/;
    const regValid = RegExp(regExp).test(value);
    console.log(value);
    let date = regValid ? checkAndFormat(value) : '';
    if (checkNull(date)) {
      this.form_control.setValue(date);
      this.form_control.updateValueAndValidity();
    }
  }

  OnDateChange(event) {}
}

function checkAndFormat(value: String) {
  const arr: any[] = value.split('-');
  const date = `${arr[2]}-${arr[1]}-${arr[0]}`;
  return String(new Date(date)) != 'Invalid Date' ? new Date(date) : '';
}

// /[^0-9\-]*/g
