import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { AbstractControl, FormControl, Validators } from '@angular/forms';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';
function checkNull(data: any) {
  return (
    data != null &&
    data != undefined &&
    data != '' &&
    (Array.isArray(data) ? data.length > 0 : true)
  );
}

const darkTheme: NgxMaterialTimepickerTheme = {
  container: {
    bodyBackgroundColor: '#424242',
    buttonColor: '#fff',
  },
  dial: {
    dialBackgroundColor: '#555',
  },
  clockFace: {
    clockFaceBackgroundColor: '#555',
    clockHandColor: '#9fbd90',
    clockFaceTimeInactiveColor: '#fff',
  },
};

@Component({
  selector: 'time-picker-stable',
  templateUrl: './time-picker-stable.component.html',
  styleUrls: ['./time-picker-stable.component.scss'],
})
export class TimePickerStableComponent implements OnInit, OnChanges {
  /**
   * @param Appearance
   * @Notes Appearance for the Time Picker
   */
  @Input('appearance') public appearance: any;

  /**
   * @param Placeholder
   * @Notes Placeholder for the Time Picker
   */
  @Input('placeholder') public placeholder: any = 'Time Picker';

  /**
   * @param Label
   * @param Label_Position
   * @Notes Label for the Time Picker
   */
  @Input('label') public label: any;
  @Input('labelPosition') public labelPosition: 'fixed' | 'float' = 'float';

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
   * @param disabled
   * @Notes  If want to disable the Time Picker
   * @value true|false
   */
  @Input(`disabled`) public disabled: boolean = false;

  /**
   * @param format
   * @Notes  If want to disable the Time Picker
   * @value 24|12
   */
  @Input(`format`) public format: 24 | 12 = 12;

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
   * @param disableInput_disableIcon
   */
  @Input(`disableInput`) public disableInput: boolean = false;
  @Input(`disableIcon`) public disableIcon: boolean = false;

  /**
   * @param theme
   */
  @Input(`theme`) public theme: 'dark' | 'light' = 'light';

  /**
   * @param minute_gap
   */
  @Input(`gap`) public gap: number = 5;

  /**
  * @param typeable
  */
  @Input(`typeable`) public typeable: boolean = false;

  timePickerTheme: any;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.UIapperance();
  }

  ngOnInit(): void {
    this.UIapperance();
  }

  UIapperance() {
    if (!checkNull(this.form_control)) {
      this.form_control = new FormControl('');
    }
    new Promise((res, rej) => {
      this.appearance = checkNull(this.appearance)
        ? this.appearance
        : 'outline';
      this.placeholder = this.placeholder ? this.placeholder : 'Time Picker';
      this.disabled ? this.form_control.disable() : '';
      this.required == true
        ? this.form_control.addValidators([Validators.required])
        : '';

      this.disabled == true ? this.form_control.disable() : '';
      this.form_control.updateValueAndValidity();

      this.timePickerTheme = this.theme == 'light' ? '' : darkTheme;

      res(true);
    }).then(() => {
      // console.log(this.form_control);
    });
  }

  checkNull(data) {
    return checkNull(data);
  }

  timeChangedEvent(event) {
    console.log(this.form_control.value);
  }
}
