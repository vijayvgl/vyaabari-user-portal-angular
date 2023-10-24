import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

import SunEditor from 'suneditor/src/lib/core';
import { initEditor } from './util/editor.helper';
import { Transliterate } from './util/transliterate';
declare var $: any;
@Component({
  selector: 'text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss'],  
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextEditorComponent),
      multi: true
    },
    {
      provide: '',
      useExisting: TextEditorComponent,
      multi: true
    }
  ]
})
export class TextEditorComponent implements OnInit, ControlValueAccessor,OnChanges  {
  editor: SunEditor;

  @Input('transliterate') transliterate: any = 'en';

  @Input('disabled') disabled: boolean = false;

  constructor(
  ) {

  }

  @ViewChild('editorNode', { static: true }) editorInput: ElementRef<HTMLInputElement>;
  charCount: number;
  valid = false;
  value = '';
  changeCount = 0;
  sugObj: any;

  onChange = (v) => { };
  onTouched = () => { };

  ngOnInit() {

  }

  writeValue(value) {
    this.value = value;
    if (this.editor) {
      this.editor.setContents(value ? value : '');
    }
  }

  validate({ value }: FormControl) {
    const isNotValid = this.charCount <= 0;
    return isNotValid && {
      invalid: true
    }
  }

  registerOnChange(fn) { this.onChange = fn; }
  registerOnTouched(fn) { this.onTouched = fn; }


  ngOnChanges(changes: any) {
    // set transliteration support data-tribute="true"

    if (this.transliterate && this.editor) {
      this.setTrans();
      console.log('activating  trans ngOnChanges')
    }


  }


  ngAfterViewInit() {
    this.setEditor(this.editorInput.nativeElement);
    if (this.value) {
      if (this.editor) {
        this.editor.setContents(this.value ? this.value : '');
        if (this.disabled == true) {
          console.log(this.disabled, 'disabled')
          this.editor.readOnly(true);
          this.editor.toolbar.hide();
        }
      }
    }

  }

  ngDestroy() {
    this.editor.destroy();
  }

  setEditor(idSelector) {
    var self = this;
    self.editor = initEditor(idSelector);
    //editor validation
    self.editor.onKeyUp = function (targetElement, core) {
      self.charCount = self.editor.getCharCount();
      self.onChange(core.getContents(true));
      self.onTouched();
    }
    self.editor.onChange = function (contents, core) {
      self.charCount = self.editor.getCharCount();
      self.onChange(core.getContents(true));
      self.onTouched();
    }




    // set transliteration support
    this.setTrans();



  }



  setTrans() {


    var element = $(this.editorInput.nativeElement.parentNode).find('.sun-editor-editable');
    // var container = $(this.editorInput.nativeElement.parentNode).find('.se-container');

    if (this.transliterate) {

      if (this.sugObj) {
        this.sugObj.detach(element);
      }

      // var trans = new Transliterate(this.transliterate, element, container)
      var trans = new Transliterate(this.transliterate, element, null)
      var newSugObj = trans.init();
      this.sugObj = newSugObj;

    }
  }


}
