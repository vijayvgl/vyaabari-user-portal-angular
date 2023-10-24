import { SelectionChange } from '@angular/cdk/collections';
import { SPACE } from '@angular/cdk/keycodes';
import {
  AfterViewInit,
  Component,
  forwardRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { MatOptionSelectionChange } from '@angular/material/core';

import { debounceTime } from 'rxjs/operators';
function checkNull(data: any) {
  return (
    data != null &&
    data != undefined &&
    data != '' &&
    (Array.isArray(data) ? data.length > 0 : true)
  );
}


@Component({
  selector: 'single-static-stable',
  templateUrl: './single-static.component.html',
  styleUrls: ['./single-static.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SingleStaticComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => SingleStaticComponent),
      multi: true,
    },
  ],
})

export class SingleStaticComponent implements OnInit, OnChanges, AfterViewInit {
  //SEARCH INPUT PLACEHOLDER
  @Input('placeholder') public placeholder: any;

  @Input('hideCross') public hideCross : boolean=false 

  @Input('searchPlaceHolder') public searchPlaceHolder: any;

  //MAT-FORM-FIELD-LABEL
  @Input('label') public label: any;

  //OPTIONS FROM PARENT COMPONENT
  @Input('options') public options: any[];

  //ERROR MESSAGE FROM PARENT COMPONENT
  @Input('error_message') public error_message: any;

  //VALIDATORS REQUIRED [TRUE OR FALSE]
  @Input('required') public required: boolean;

  //CONFIRMATION FROM PARENT WHETHER THE SELECTBOX IS MULTIPLE OR NOT
  @Input(`ifsingle`) private ifsingle: boolean = true;

  //VIEW VALUE FOR THE SELECT FROM THE OPTIONS ARRAY
  @Input('options_display') public options_display: any;

  //VALUE FOR THE SELECT FROM THE OPTIONS ARRAY
  @Input('options_value') public options_value: any;

  //ABSTRACT CONTROL OF THE PARENT FROMGROUP
  @Input('form_control') public form_control: AbstractControl;

  //EMITS VALUE WHEN A VALUE IS SELECTED
  @Output('on_select') public on_select: EventEmitter<any> =
    new EventEmitter();

  @Input(`disabled`) public disabled: boolean = false;

  // Non-selected fucntionality

  @Input('non_selected') public non_selected: boolean

  @Input('value') public value: any

  @Input('showIcon') public showIcon: any
  /**********************************The above variables are for the PARENT COMPONENT*********************************************/

  public searchControl: FormControl;
  public filteredOptions: any[] = [];
  @ViewChild("select", { static: true }) select: any;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.filteredOptions = this.options;
    this.UIapperance();
    this.searchOptions();
  }

  nonSelectedOptions(option: any) {
    const values: any[] = this.value?.value.map((ele: any) => this.value?.key ? ele[this.value?.key] : ele);
    const index = this.value?.index;

    function check() {
      /*****Does not includes********************/
      const c1 = !values.includes(option);
      /*****Given Index and Got Index***********/
      const inx = values.indexOf(option)
      const c2 = (index == inx)
      return (c1 || c2)
    }

    return this.non_selected == true ? check() : true
  }

  ngOnInit(): void {
    this.UIapperance();
    this.select._handleKeydown = (event: KeyboardEvent) => {
      if (event.keyCode == SPACE) return;
      if (!this.select.disabled) {
        this.select.panelOpen
          ? this.select._handleOpenKeydown(event)
          : this.select._handleClosedKeydown(event);
      }
    };
  }

  UIapperance() {
    this.searchControl = new FormControl('');
    if (!checkNull(this.form_control)) {
      this.form_control = new FormControl();
    }
    //lable
    // this.label = this.label ? this.label : 'Select-v2'

    //placeHolder
    this.placeholder = this.placeholder ? this.placeholder : 'Search';
    this.disabled ? this.form_control.disable() : '';
    //required
    switch (this.required) {
      case true:
        {
          this.form_control.setValidators([Validators.required]);
          this.form_control.updateValueAndValidity();
          this.required = true;
        }
        break;
      default:
        {
          this.form_control.clearValidators();
          this.form_control.updateValueAndValidity();
          this.required = false;
        }
        break;
    }
  }

  checkNull(data: any) {
    return checkNull(data);
  }



  ngAfterViewInit(): void {
    this.searchOptions();
  }

  searchOptions() {
    if (this.options?.length > 0 && this.options != undefined) {
      this.searchControl.valueChanges
        .pipe(debounceTime(100))
        .subscribe((res: any) => {
          let value: string = res;
          if (this.options?.length > 0 && this.options != undefined) {
            if (
              this.options_display != '' &&
              this.options_value != ''
            ) {
              this.filteredOptions = this.options.filter(
                (ele: any) =>
                  String(ele[this.options_display])
                    .toLowerCase()
                    .includes(value.toLowerCase())
              );
            } else {
              this.filteredOptions = this.options.filter(
                (ele: any) =>
                  String(ele)
                    .toLowerCase()
                    .includes(value.toLowerCase())
              );
            }
          }
        });
    }
  }

  resetValue() {
    this.form_control.reset();
    this.optionSelected('')
  }

  optionSelected(event: any) {
    this.on_select.emit({ value: event?.value ?? '' });
  }

  clearSearch() {
    this.searchControl.setValue('');
    this.filteredOptions = this.options;
  }

}