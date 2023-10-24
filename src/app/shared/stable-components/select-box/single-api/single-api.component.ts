import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, forwardRef } from '@angular/core';
import { AbstractControl, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
function checkNull(data: any) {
  return (
    data != null &&
    data != undefined &&
    data != '' &&
    (Array.isArray(data) ? data.length > 0 : true)
  );
}

import { SPACE } from '@angular/cdk/keycodes';
import { SelectBoxService } from '../service/select-box.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'single-api-stable',
  templateUrl: './single-api.component.html',
  styleUrls: ['./single-api.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SingleApiComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => SingleApiComponent),
      multi: true,
    },
  ],
})
export class SingleApiComponent implements OnInit, OnChanges {
  //SEARCH INPUT PLACEHOLDER
  @Input('placeholder') public placeholder: any;


  @Input('searchPlaceHolder') public searchPlaceHolder: any

  //MAT-FORM-FIELD-LABEL
  @Input('label') public label: any;

  //OPTIONS FROM PARENT COMPONENT
  // @Input('options') public options: any[]; Not need for api options

  //OPTIONS URL FROM PARENT COMPONENT 
  @Input('api_endpoint') public api_endpoint: string;

  //PARAMS FROM THE PARENT COMPONENT
  @Input('api_params') public api_params: any;

  // Params From the Query Params 
  @Input('api_queryparams') public api_queryparams: any;

  //RESPONSE KEY FROM PARENT COMPONENT
  @Input(`response_key`) public response_key: string;

  //ERROR MESSAGE FROM PARENT COMPONENT
  @Input('error_message') public error_message: any;

  //VALIDATORS REQUIRED [TRUE OR FALSE]
  @Input('required') public required: boolean;

  //VIEW VALUE FOR THE SELECT FROM THE OPTIONS ARRAY
  @Input('options_display') public options_display: any;

  //VALUE FOR THE SELECT FROM THE OPTIONS ARRAY
  @Input('options_value') public options_value: any;


  //ABSTRACT CONTROL OF THE PARENT FROMGROUP
  @Input('form_control') public form_control: AbstractControl;

  //EMITS VALUE WHEN A VALUE IS SELECTED 
  @Output('on_select') public on_select: EventEmitter<any> = new EventEmitter()
  /**********************************The above variables are for the PARENT COMPONENT*********************************************/

  public searchControl: FormControl;
  public filteredOptions: any[];
  public options: any[] = []
  public load: boolean = false;
  @ViewChild('select', { static: true }) select: any;
  constructor(private selectService: SelectBoxService) {

  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.api_endpoint != '' && this.api_endpoint != undefined) {
      this.getdata()
    }
    if (changes['api_endpoint']?.firstChange == false) {
      this.form_control.setValue('');
      this.form_control.updateValueAndValidity()
    }


  }
  ngOnInit(): void {
    this.select._handleKeydown = (event: KeyboardEvent) => {
      if (event.keyCode == SPACE)
        return
      if (!this.select.disabled) {
        this.select.panelOpen
          ? this.select._handleOpenKeydown(event)
          : this.select._handleClosedKeydown(event);
      }
    };
    this.UIapperance()
  }


  UIapperance() {
    this.searchControl = new FormControl('');
    if (!checkNull(this.form_control)) {
      this.form_control = new FormControl()
    }
    //lable
    // this.label = this.label ? this.label : 'Select-v2'

    //placeHolder 
    this.placeholder = this.placeholder ? this.placeholder : 'Search'
    //required
    switch (this.required) {
      case true: {
        this.form_control.setValidators([Validators.required])
        this.form_control.updateValueAndValidity()
        this.required = true
      }
        break
      default: {
        this.form_control.clearValidators()
        this.form_control.updateValueAndValidity()
        this.required = false
      }
        break
    }

  }




  ngAfterViewInit(): void {
    this.searchOptions()
  }

  searchOptions() {
    this.searchControl.valueChanges.pipe(debounceTime(100)).subscribe((res: any) => {
      let value: string = (res)
      if (this.options?.length > 0 && this.options != undefined) {
        if (this.options_display != '' && this.options_value != '') {
          this.filteredOptions = this.options.filter((ele: any) => String(ele[this.options_display]).toLowerCase().includes(value.toLowerCase()))
        } else {
          this.filteredOptions = this.options.filter((ele: any) => String(ele).toLowerCase().includes(value.toLowerCase()))
        }
      }
    })

  }

  optionSelected(event: any) {
    let data: any = this.options.filter((ele: any) => checkNull(this.options_value) ? ele[this.options_value] == event?.value : ele == event?.value)
    this.on_select.emit(data[0] ?? '');
  }

  clearSearch() {
    this.searchControl.setValue('');
    this.filteredOptions = this.options
  }
  getdata() {
    this.load = true;
    this.selectService.getOptions(this.api_endpoint, this.api_params, this.api_queryparams).subscribe({
      next: (res: HttpResponse<any>) => {
        if (res?.statusText == 'OK') {
          this.load = false;
          this.options = checkNull(this.response_key) ? res?.body[this.response_key] : res?.body;
          this.filteredOptions = this.options
        } 
      },
      error: (err: any) => {
        this.load = false;
        this.options = [];
        this.filteredOptions = []
      },
      complete: () => {
      }
    })
  }


  checkNull(data: any) {
    return checkNull(data)
  }

  resetValue() {
    this.form_control.reset();
    this.optionSelected('')
  }


}
