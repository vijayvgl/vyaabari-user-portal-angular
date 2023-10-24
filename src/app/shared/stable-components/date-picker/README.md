# Date Picker

# Input Properties

## 1. [placeholder] - `placeholder for the datepicker`

## 2. [form_control] - `Formcontrol name from the parent compoenent for the datepicker as [createForm?.get('simple')]`

## 3. [label] - `Label for the date picker from the parent component`

## 4. [required] - `whether the formcontrol is required or not its a boolean`

## 5. [labelPosition] - `label position for whether floating or fixed`

## 6. [first] - `it's for the whether its first date picker  as from date picker`

## 7. [label2] - `it's for the todate picker for error message purpose`

## 8. [minimum] - `Its for the minimum date`

## 9. [maximum] - `its for the maximum date`

## Date Picker Coding in the Parent Component

<div class="" style="margin-left: 50px;margin-top: 50px;">
    <date-picker-stable placeholder="DD-MM-YYYY" [typeable]="true" [form_control]="createForm?.get('simple')"
        [required]="true"  label="From Date" labelPosition="float"></date-picker-stable>
</div>

## From Date

<div class="" style="margin-left: 50px;margin-top: 50px;">
    <h2>From Date </h2>
    <date-picker-stable [typeable]="true" [form_control]="createForm?.get('fromDate')" [first]="true" [required]="true" label="From Date"
        label2="To date" labelPosition="float"></date-picker-stable>
</div>

## To Date

<div class="" style="margin-left: 50px;margin-top: 50px;">
    <h2>To Date</h2>
    <date-picker-stable [typeable]="true" [first]="false" [form_control]="createForm?.get('toDate')" [required]="true" label="To Date"
        label2="From Date" labelPosition="float"></date-picker-stable>
</div>
