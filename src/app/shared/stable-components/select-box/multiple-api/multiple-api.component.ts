import { SPACE } from '@angular/cdk/keycodes';
import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, Validators } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { debounceTime } from 'rxjs/operators';
import { SelectBoxService } from '../service/select-box.service';
function checkNull(data: any) {
  return (
    data != null &&
    data != undefined &&
    data != '' &&
    (Array.isArray(data) ? data.length > 0 : true)
  );
}

import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'multiple-api-stable',
  templateUrl: './multiple-api.component.html',
  styleUrls: ['./multiple-api.component.scss']
})
export class MultipleApiComponent implements OnInit, OnChanges, AfterViewInit {
  //SEARCH INPUT PLACEHOLDER
  @Input('placeholder') public placeholder: any;
  @Input('searchPlaceHolder') public searchPlaceholder: any
  //MAT-FORM-FIELD-LABEL
  @Input('label') public label: any;

  // //OPTIONS FROM PARENT COMPONENT
  // @Input('options') public options: any[];

  //ALL OPTIONS IS NEEDED OR NOT
  @Input('need_all_options') public need_all_options: boolean;

  //OPTIONS URL FROM PARENT COMPONENT 
  @Input('api_endpoint') public api_endpoint: string;


  //RESPONSE KEY FROM PARENT COMPONENT
  @Input(`response_key`) public response_key: string;

  //ERROR MESSAGE FROM PARENT COMPONENT
  @Input('error_message') public error_message: any;

  //VALIDATORS REQUIRED [TRUE OR FALSE]
  @Input('required') public required: boolean;

  //CONFIRMATION FROM PARENT WHETHER THE SELECTBOX IS MULTIPLE OR NOT
  @Input(`multiple`) private multiple: boolean = true

  //PARAMS FROM THE PARENT COMPONENT
  @Input('api_params') public api_params: any;

  // Params From the Query Params 
  @Input('api_queryparams') public api_queryparams: any;

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
  public filteredOptions: any[] = [];
  public selectedValues: any[] = [];
  public options: any[] = [];
  public load: boolean = false;
  @ViewChild('select', { static: true }) select: any;
  @ViewChild('allOption') public allOption: MatOption;
  constructor(private selectService: SelectBoxService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!checkNull(this.need_all_options)) {
      this.need_all_options = false
    }
    if (this.api_endpoint != '' && this.api_endpoint != undefined) {
      this.getdata()
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
    this.searchControl = new FormControl('')
    if (!checkNull(this.form_control)) {
      this.form_control = new FormControl()
    }
    //lable
    this.label = this.label ? this.label : 'Select-v2'

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
      this.setSelectedValues();
      this.form_control.patchValue(this.selectedValues)
      if (this.options.length > 0) {
        if (this.options_display != '' && this.options_value != '') {
          this.filteredOptions = this.options.filter((ele: any) => String(ele[this.options_display]).toLowerCase().includes(value.toLowerCase()))
        } else {
          this.filteredOptions = this.options.filter((ele: any) => String(ele).toLowerCase().includes(value.toLowerCase()))
        }
      }
    })
  }

  resetValue() {
    this.form_control.reset();
    this.selectedValues = []

    this.optionSelected('')
  }

  optionSelected(event: any) {
    this.on_select.emit({ value: event?.value ?? '' });
  }

  clearSearch() {
    this.searchControl.setValue('');
    // this.selectedValues = this.form_control.value;
    this.filteredOptions = this.options
  }

  clearSelectedValues(value: any[]) {
    this.searchControl.setValue('');
    this.selectedValues = value ?? [];
    this.form_control.patchValue(this.selectedValues);
    this.form_control.updateValueAndValidity()
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
      this.selectedValues.splice(index, 1)
    }
  }

  selectAll(event) {
    if (event.checked) {
      this.selectedValues = this.options.map((ele: any) => this.options_value != '' ? ele[this.options_value] : ele);
      this.form_control.patchValue(this.selectedValues)
    } else {
      this.selectedValues = []
      this.form_control.patchValue(this.selectedValues)
    }

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


}
