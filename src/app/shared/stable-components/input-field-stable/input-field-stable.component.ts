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

const validators = {
  image: /(.*?)\.(jpg|jpeg|png|bmp|jfif)$/,
  integer: /^-?(0|[1-9]\d*)?$/,
  removebmp: /(.*?)\.(jpg|jpeg|png|jfif)$/,
  basicType: /(.*?)\.(jpg|jpeg|png|JPG|JPEG|PNG)$/,
  allimage: /(.*?)\.(jpg|jpeg|png|pdf|msword|docx|doc|jfif)$/,
  fileImage: /(.*?)\.(jpg|jpeg|png|pdf|msword|docx|doc)$/,
  emailPattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
  allowOnlyPlusValue: /^[0-9]\d*$/,
  decimalTwoDigitOnly: /^\d{0,1000}(\.\d{1,2})?$/, // allows plus value and two digit
  decimal: /^\-?(\d+\.?\d*|\d*\.?\d+)$/, // allows + or - values
  sixDigitInteger: /^[0-9]{6}$/,
  tenDigitInteger: /^[0-9]{10}$/,
  mobileNumber: /^[6,7,8,9]{1}[0-9]{9}$/,
  aadharNo: /^[0-9]{12}$/,
  alphaNumeric: /^[0-9a-zA-Z]+$/,
  lettersOnly: /^[A-Za-z]+$/, // ABCabcRtvd
  imageAndPdf: /(.*?)\.(jpg|jpeg|png|bmp|pdf)$/,
  removeWhitespace: /^[^ ][\w\W ]*[^ ]/,
  ifscCode: /^[A-Z]{4}[A-Z0-9]{7}$/,
  removeWSWLetter: /^\S$|^\S[\s\S]*\S$/,
  numberOnly: '^[0-9]*$',
  url: /^(https?:\/\/[a-zA-Z0-9_+%-]+(\.[a-zA-Z0-9+\_%-]+)*(:[0-9]{1,5})?(\/[a-zA-Z0-9+()?#~=&\._%-]*)*)?$/,
  date: /^([0-2][0-9]|(3)[0-1])(\-)(((0)[0-9])|((1)[0-2]))(\-)\d{4}$/,
  url1: /^(https?:\/\/[a-zA-Z0-9_+%-]+(\.[a-zA-Z0-9+\_%-]+)*(:[0-9]{1,5})?(\/[a-zA-Z0-9+()?#~=&\._%-]*)*)?$/,
  name: /^([a-zA-Z0-9]+\s?)*$/,
  yTube:
    /^(?:https?:\/\/)(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/))((\w|-){11})(?:\S+)?$/, //Embeded link only
  numberGreaterthan0: /^\s*(?=.*[1-9])\d*(?:\.\d{1,2})?\s*$/,
  EmailandMobile: /^(?:\d{10}|\w?.+@\w+\.\w{2,3})$/,
  noDecimal: /^[1-9]\d*$/,
};
@Component({
  selector: 'input-stable',
  templateUrl: './input-field-stable.component.html',
  styleUrls: ['./input-field-stable.component.scss'],
})
export class InputFieldStableComponent implements OnInit, OnChanges {
  /**
   * @param Appearance
   * @Notes Appearance for the Input Field
   */
  @Input('appearance') public appearance: any;

  /**
   * @param Placeholder
   * @Notes Placeholder for the Input-Field
   */
  @Input('placeholder') public placeholder: any;

  /**
   * @param Label
   * @Notes Label for the Input-Field
   */
  @Input('label') public label: any;
  @Input('labelPosition') public labelPosition: 'fixed' | 'float' = 'float';

  /**
   * @param Formcontrol
   * @Notes  Formcontrol from the parent component
   * @value  formgroupname?.get('formcontrolname')
   */
  @Input('form_control') public form_control: AbstractControl;

  /**
   * @param required
   * @Notes  Is that required or not
   * @value true|false
   */
  @Input('required') public required: boolean = false;

  /**
   * @param disabled
   * @Notes  If want to disable the Input-Field
   * @value true|false
   */
  @Input(`disabled`) public disabled: boolean = false;

  /**
   * @param readonly
   * @Notes  set the fields readonly
   */
  @Input(`readonly`) public readonly: boolean = false;

  /**
   * @param pattern
   * @Notes  set the fields pattern
   */
  @Input(`pattern`) public pattern: any;

  /**
   * @param maxlength
   * @Notes  set the fields maxlength
   */
  @Input(`maxlength`) public maxlength: any;

  /**
   * @param minlength
   * @Notes  set the fields minlength
   */
  @Input(`minlength`) public minlength: any;

  /**
   * @param field type
   * @Notes  set the fields field type
   */
  @Input(`type`) public type:
    | 'text'
    | 'number'
    | 'password'
    | 'textarea'
    | 'mobile'
    | 'email' = 'text';

  /**
   * @param textarea
   * @rows  number
   * @cols number
   * @Notes  set the fields pattern
   */
  @Input(`rows`) public rows: any = 4;
  @Input(`cols`) public cols: any = 50;

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    // this.UIapperance();
    // console.log(changes);
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
      this.placeholder = this.placeholder ? this.placeholder : 'Input Field';
      this.disabled ? this.form_control.disable() : '';
      this.required == true
        ? this.form_control.addValidators([Validators.required])
        : '';
      checkNull(this.minlength)
        ? this.form_control.addValidators([
            Validators.minLength(this.minlength),
          ])
        : '';
      checkNull(this.maxlength)
        ? this.form_control.addValidators([
            Validators.maxLength(this.maxlength),
          ])
        : '';

      switch (this.type) {
        case 'text':
          {
            this.form_control.addValidators([
              Validators.pattern(this.pattern ?? validators.removeWSWLetter),
            ]);
          }
          break;
        case 'textarea':
          {
            this.form_control.addValidators([
              Validators.pattern(this.pattern ?? validators.removeWSWLetter),
            ]);
          }
          break;
        case 'mobile':
          {
            this.form_control.addValidators([
              Validators.pattern(this.pattern ?? validators.mobileNumber),
            ]);
          }
          break;
        case 'number':
          {
            this.form_control.addValidators([
              Validators.pattern(this.pattern ?? validators.numberOnly),
            ]);
          }
          break;
        case 'password':
          {
            this.form_control.addValidators([
              Validators.pattern(this.pattern ?? ''),
            ]);
          }
          break;
        case 'email':
          {
            this.form_control.addValidators([
              Validators.pattern(this.pattern ?? validators.emailPattern),
            ]);
          }
          break;
        default:
          {
            this.form_control.addValidators([
              Validators.pattern(this.pattern ?? validators.removeWSWLetter),
            ]);
          }
          break;
      }
      this.disabled == true ? this.form_control.disable() : '';
      this.form_control.updateValueAndValidity();

      res(true);
    }).then(() => {
      // console.log(this.form_control);
    });
  }

  checkNull(data) {
    return checkNull(data);
  }
  password = 'password';
  changeype() {
    this.password = this.password == 'password' ? 'text' : 'password';
  }
}
