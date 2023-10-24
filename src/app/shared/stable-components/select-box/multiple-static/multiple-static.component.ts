import { SelectionChange } from '@angular/cdk/collections';
import { SPACE } from '@angular/cdk/keycodes';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { AbstractControl, FormControl, Validators } from '@angular/forms';
import { MatOption } from '@angular/material/core';
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
  selector: 'multiple-static-stable',
  templateUrl: './multiple-static.component.html',
  styleUrls: ['./multiple-static.component.scss']
})
export class MultipleStaticComponent implements OnInit, OnChanges, AfterViewInit {
  //SEARCH INPUT PLACEHOLDER
  @Input('placeholder') public placeholder: any;

  @Input('hideCross') public hideCross : boolean=false 


  @Input('searchPlaceHolder') public searchPlaceHolder: any

  //MAT-FORM-FIELD-LABEL
  @Input('label') public label: any;

  //OPTIONS FROM PARENT COMPONENT
  @Input('options') public options: any[];

  //ERROR MESSAGE FROM PARENT COMPONENT
  @Input('error_message') public error_message: any;

  //VALIDATORS REQUIRED [TRUE OR FALSE]
  @Input('required') public required: boolean;

  //CONFIRMATION FROM PARENT WHETHER THE SELECTBOX IS MULTIPLE OR NOT
  @Input(`multiple`) private multiple: boolean = true;

  //ALL OPTIONS IS NEEDED OR NOT
  @Input('need_all_options') public need_all_options: boolean;

  //VIEW VALUE FOR THE SELECT FROM THE OPTIONS ARRAY
  @Input('options_display') public options_display: any;

  //VALUE FOR THE SELECT FROM THE OPTIONS ARRAY
  @Input('options_value') public options_value: any;

  //ABSTRACT CONTROL OF THE PARENT FROMGROUP
  @Input('form_control') public form_control: AbstractControl;

  //EMITS VALUE WHEN A VALUE IS SELECTED
  @Output('on_select') public on_select: EventEmitter<any> =
    new EventEmitter();

  @Output('clear') public clear: EventEmitter<any> =
    new EventEmitter();

  // Formgroup Errors
  @Input('formgroup_errors') public formgroup_errors: any;

  /******************The above variables are for the PARENT COMPONENT************************************/

  public searchControl: FormControl;
  public filteredOptions: any[] = [];
  public selectedValues: any[] = [];
  @ViewChild('select', { static: true }) select: any;

  @ViewChild('allOption') public allOption: MatOption;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!checkNull(this.need_all_options)) {
      this.need_all_options = false;
    }
    if (changes.hasOwnProperty('options')) {
      if (this.options?.length > 0) {
        this.filteredOptions = this.options;
      } else {
        this.filteredOptions = [];
      }
    }
  }

  ngOnInit(): void {
    this.select._handleKeydown = (event: KeyboardEvent) => {
      if (event.keyCode == SPACE) return;
      if (!this.select.disabled) {
        this.select.panelOpen
          ? this.select._handleOpenKeydown(event)
          : this.select._handleClosedKeydown(event);
      }
    };
    // this.searchOptions()
    this.UIapperance();
  }

  UIapperance() {
    this.searchControl = new FormControl('');
    if (!checkNull(this.form_control)) {
      this.form_control = new FormControl();
    }
    //lable
    // this.label = this.label ? this.label : 'Select-v2';

    //placeHolder
    this.placeholder = this.placeholder ? this.placeholder : 'Search';
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

  ngAfterViewInit(): void {
    this.searchOptions();
  }

  searchOptions() {
    this.searchControl.valueChanges
      .pipe(debounceTime(100))
      .subscribe((res: any) => {
        let value: string = res;

        this.setSelectedValues();
        this.form_control.patchValue(this.selectedValues);
        if (this.options?.length > 0 && this.options != undefined) {
          if (
            this.options_display != '' &&
            this.options_value != ''
          ) {
            this.filteredOptions = this.options.filter((ele: any) =>
              String(ele[this.options_display])
                .toLowerCase()
                .includes(value.toLowerCase())
            );
          } else {
            this.filteredOptions = this.options.filter((ele: any) =>
              String(ele)
                .toLowerCase()
                .includes(value.toLowerCase())
            );
          }
        }
      });
  }
  searchLoader: boolean = false;
  makeLoader() {
    this.searchLoader = true;
    setTimeout(() => {
      this.searchLoader = false;
    }, 300);
  }

  resetValue() {
    this.form_control.reset();
    this.selectedValues = [];
    this.optionSelected('');
    this.clear.emit({ value: this.form_control?.value ?? '' });
  }

  optionSelected(event: any) {
    this.on_select.emit({ value: event?.value ?? '' });
  }

  clearSearch() {
    this.searchControl.setValue('');
    // this.selectedValues = this.form_control.value;
    this.filteredOptions = this.options;
  }

  clearSelectedValues(value: any[]) {
    this.searchControl.setValue('');
    this.selectedValues = value ?? [];
    console.log(this.selectedValues);
    this.form_control.patchValue(this.selectedValues);
    this.form_control.updateValueAndValidity()
  }

  valuesSelected() {
    // console.log(this.selectedValues, this.form_control.value);
  }

  setSelectedValues() {
    if (this.form_control.value && this.form_control.value.length > 0) {
      this.form_control.value.forEach((e) => {
        if (this.selectedValues.indexOf(e) == -1) {
          this.selectedValues.push(e);
        }
      });
    }
  }

  selectionChange(event: any): void {
    if (event.isUserInput && event.source.selected == false) {
      let index = this.selectedValues.indexOf(event.source.value);
      this.selectedValues.splice(index, 1);
    }
  }

  selectAll(event) {
    if (event.checked) {
      this.selectedValues = this.options.map((ele: any) =>
        this.options_value != '' ? ele[this.options_value] : ele
      );
      this.form_control.patchValue(this.selectedValues);
    } else {
      this.selectedValues = [];
      this.form_control.patchValue(this.selectedValues);
    }
  }

  checkNull(data: any) {
    return checkNull(data);
  }


}

