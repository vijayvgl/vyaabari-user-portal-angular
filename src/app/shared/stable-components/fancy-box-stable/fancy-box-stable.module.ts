import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FancyBoxStableComponent } from './fancy-box-stable.component';



@NgModule({
  declarations: [
    FancyBoxStableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [FancyBoxStableComponent]
})
export class FancyBoxStableModule { }
