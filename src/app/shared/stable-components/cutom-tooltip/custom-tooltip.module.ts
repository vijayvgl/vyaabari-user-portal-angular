import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTooltipComponent } from './custom-tooltip.component';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    CustomTooltipComponent
  ],
  imports: [
    CommonModule,
    MatTooltipModule,
    MatIconModule
  ],
  exports: [CustomTooltipComponent]
})
export class CustomTooltipModule { }
