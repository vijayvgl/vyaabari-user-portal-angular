import { Injectable } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { TgsstoasterService } from './tgsstoaster.service';
import { checkNull, titleCase } from '../custom-validations/return-functions';
interface Labels {
  name: string,
  label: string,
  type?: any,
  number?: number,
  min?: any
  max?: any
}
function forFormControl(control: FormControl, name) {
  if (control.invalid) {
    return {
      name: name,
      type: 'control',
      errors: Object.keys(control.errors)[0],
    }
  }
}

function forFormGroup(name, errors, grp) {
  return {
    name: name,
    type: 'group',
    errors: errors,
    group_errors: grp
  }
}

function forFormArray(name, errors, inx, grpErr) {
  return {
    // name: name,
    // type: 'array',
    row: inx + 1,
    errors: errors,
    group_errors: grpErr
  }
}

function ErrorMessageForControl(error: string, label: any): string {
  let errorMessage = ''
  switch (error) {
    case 'required': { errorMessage = `Please ${label?.type} ${label?.the == false ? '' : 'the'}  ${label?.label}!` };
      break
    case 'email':
    case 'pattern': errorMessage = `Please ${label?.type} a valid ${label?.label}!`;
      break;
    // matDatepickerMin
    case 'matDatepickerMin': errorMessage = `${label?.label} can\'t be the past date!`;
      break;
    case "minlength": errorMessage = `${label?.label} should have atleast ${label?.min ? label?.min : label?.number} characters!`;
      break
    case 'min': errorMessage = `${label?.label}  should be greater than ${label?.min ? label?.min : label?.number}!`
      break
    case 'max': errorMessage = `${label?.label}  should be less than ${label?.max ? label?.max : label?.number}!`
      break
    case "mustMatch": errorMessage = `New password and confirm password doesn\'t match!`;
      break
    // matchCaptcha
    case "matchCaptcha": errorMessage = `Please match the captcha given below!`;
      break
    // dayWeek  // dayMonth // weekMonth
    case "dayWeek": errorMessage = `Please provide daily limit less than weekly limit`;
      break
    case "dayMonth": errorMessage = `Please provide daily limit less than monthly limit`;
      break
    case "weekMonth": errorMessage = `Please provide weekly limit less than monthly limit`;
      break
    case "minMax": errorMessage = `Minimum amount should be less than maximum amount!`;
      break
    case "maxCash": errorMessage = `Cashback amount should be less than maximum amount!`;
      break
    case 'inValidDate': errorMessage = `Start Date should be before To date!`;
      break
    case 'invalidDate': errorMessage = `Start Date should be before End date!`;
      break
    case 'pastFromTime': errorMessage = `Start time should be after the current time!`;
      break
    case 'pastToTime': errorMessage = `End time should be after the current time!`;
      break
    case 'invalidTime': errorMessage = `Please provide a valid start and end time!`;
      break
    case 'pastFromDate': errorMessage = `${titleCase(label.label)} can't be the past date!`
      break
    case 'fromDateRequired': errorMessage = `${titleCase(label.label)} is also required to filter!`
      break
    default: errorMessage = `Please fill the mandatory fields!`
      break
  }
  return errorMessage

}

function ErrorMessageForFormArray(group: any, control, aLabel: any, cLabel: any) {
  let errorMessage = ''
  // Its for the custom validations such as range date validations and many others
  if (group?.group_errors != null) {
    switch (group?.group_errors) {
      case 'range': errorMessage = `Please provide valid MRP and selling price for the ${endedWith(group?.row)} row of ${aLabel?.label}!`
        break;
      case 'need2values': errorMessage = `Please provide atleast 1 option value for the ${endedWith(group?.row)} row of  ${aLabel?.label}! `;
        break
      case "fromTo": errorMessage = `To amount should be greater than from amount for the ${endedWith(group?.row)} row of  ${aLabel?.label}! `
        break
      case "fromCommision": errorMessage = `Commission amount should be less than from amount for the ${endedWith(group?.row)} row of  ${aLabel?.label}}! `
        break
      case "toCommision": errorMessage = `Commission amount should be less than to amount for the ${endedWith(group?.row)} row of  ${aLabel?.label}}! `
        break
      default: errorMessage = 'Please fill the mandatory fields!'
        break
    }

  }
  // Its for the general formcontrols------->
  else {
    switch (control?.errors) {
      case 'required': errorMessage = `Please ${cLabel?.type} the ${cLabel?.label} for the ${endedWith(group?.row)} row of ${aLabel?.label}!`;
        break
      case 'email':
      case 'pattern': errorMessage = `Please ${cLabel?.type} a valid ${cLabel?.label} for the ${endedWith(group?.row)} row of ${aLabel?.label}!`;
        break
      case 'min': errorMessage = `Please ${cLabel?.type}  ${cLabel?.label} greater than ${cLabel?.number ? cLabel?.number : cLabel?.min} for the ${endedWith(group?.row)} row of ${aLabel?.label}!`;
        break
      default: errorMessage = `Please fill the mandatory fields!`
        break
    }

  }

  return errorMessage

}


function endedWith(num: any) {
  let number = String(num)
  let value = '';
  switch (true) {
    case number.endsWith('1'): value = `${num}st`;
      break
    case number.endsWith('2'): value = `${num}nd`;
      break
    case number.endsWith('3'): value = `${num}rd`;
      break
    default: value = `${num}th`;
      break
  }
  return value

}

@Injectable({
  providedIn: 'root'
})
export class ErrorMessageV2Service {

  constructor(
    private toaster: TgsstoasterService,
  ) { }


  invalidControls(form: FormControl | FormGroup | FormArray | any) {
    switch (true) {
      case form instanceof FormControl: {

        return []
      }
        break;
      case form instanceof FormGroup: {
        return this.forInvalidFormGroup(form)
      }
        break
      case form instanceof FormArray: {

        return []
      }
        break
      default: {

        return []
      }
        break;
    }

  }

  private forInvalidFormGroup(form: FormGroup): any {

    let invalidData: any[] = []

    const names: string[] = Object.keys(form.controls);
    names.forEach((name: any) => {
      const control = form.get(name) as FormArray | FormControl | FormGroup;
      /************************************For the Form controls********************************/
      if (control instanceof FormControl) {
        forFormControl(control, name) != undefined ? invalidData.push(forFormControl(control, name)) : ''
      }
      /*********************************For the Form group****************************************/
      else if (control instanceof FormGroup) {
        invalidData.push(forFormGroup(name, this.forInvalidFormGroup(control), control.errors != null ? Object.keys(control.errors) : null))
      }
      /**********************************For the Form array**************************************/
      else if (control instanceof FormArray) {
        let arr = []

        control.controls.filter((ele: any, inx) => {
          if (ele.invalid) {
            arr.push(forFormArray(name, this.forInvalidFormGroup(ele), inx, ele?.errors != null ? Object.keys(ele?.errors)[0] : ele?.errors))
          }
        })
        if (arr.length > 0) {
          invalidData.push({
            name: name,
            type: 'array',
            errors: arr
          })
        }
      }
      else {


      }

    })
    return invalidData
  }



  throwErrorMessage(form: AbstractControl, foundErrors: any[], labels: Labels[]) {
    const first = foundErrors[0];
    function findLabel(name, label: any[]): any {
      let data = label.find((ele: any) => ele?.name == name)
      return data
    }
    switch (first.type) {

      case 'control': {
        const firstControl = foundErrors[0];
        const ctrLabel = findLabel(firstControl?.name, labels)
        form.get(firstControl?.name).markAsTouched();
        form.get(firstControl?.name).updateValueAndValidity();
        this.toaster.warningToaster(ErrorMessageForControl(firstControl?.errors, ctrLabel))
      }
        break;

      case 'array': {
        const firstArrayControl = foundErrors[0];
        const arrLabel = findLabel(firstArrayControl.name, labels);
        const firstGroup = firstArrayControl.errors[0];
        const firstControl = firstGroup.errors[0]

        if (firstGroup?.group_errors != null) {
          this.toaster.warningToaster(ErrorMessageForFormArray(firstGroup, firstControl, arrLabel, ''))
          return
        } else {
          const ctrLabel = findLabel(firstControl?.name, labels)
          const arrayControl = form.get(firstArrayControl.name) as FormArray
          const control = arrayControl.at(firstGroup.row - 1).get(firstControl?.name) as FormControl
          control.markAsTouched();
          control.updateValueAndValidity()
          this.toaster.warningToaster(ErrorMessageForFormArray(firstGroup, firstControl, arrLabel, ctrLabel))
        }
      }
        break;

    }



  }

  /***         README Model Functionality
   *  let errorsV2 = this.errorMessageV2.invalidControls(this.personalizedForm);
    const labels = [
      { name: 'category', label: 'category came', type: 'select' },
      { name: 'gstPercent', label: 'GST percentage', type: 'select' },
      { name: 'helpURL', label: 'help URL', type: 'provide' },
      { name: 'thumbnailImage', label: 'thumbnail image', type: 'provide' },
      { name: 'customerDescription', label: 'customer description', type: 'provide' },
      { name: 'designerDescription', label: 'designer description', type: 'provide' },
      { name: "labels", label: 'label details', type: 'provide' },
      { name: 'labelName', label: 'lable name', type: 'provide' },
      { name: 'primaryVariantDetails', label: 'Primary variant', type: 'provide' },
      { name: 'designImage', label: 'Design Image', type: 'provide' },
      { name: 'label', label: 'colour name', type: 'provide' },
      { name: 'variantDetails', label: 'variant details', type: 'provide' },
      { name: 'variant_code', label: 'product code', type: 'provide' },
      { name: 'quantity', label: 'quantity', type: 'provide', min: 'zero' },
      { name: 'mrp', label: 'MRP', type: 'provide', min: '1' },
      { name: 'sellingPrice', label: 'selling price', type: 'provide', min: '1' },
      // customized_price
      { name: 'customized_price', label: 'customized price', type: 'provide', min: '1' },
      { name: 'relatedProducts', label: 'related prodcuts', type: 'select' },
      { name: 'serviceType', label: 'service type', type: 'select' },
      { name: 'productName', label: 'product name', type: 'select' }
    ]
    if (errorsV2.length > 0) {
   
      this.errorMessageV2.throwErrorMessage(this.personalizedForm, errorsV2, labels)

    }
    return
  
   */
}
