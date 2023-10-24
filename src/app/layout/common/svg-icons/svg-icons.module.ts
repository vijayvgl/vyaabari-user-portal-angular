import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconsComponent } from './svg-icons.component';



@NgModule({
  declarations: [
    SvgIconsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SvgIconsComponent
  ]
})
export class SvgIconsModule { }
