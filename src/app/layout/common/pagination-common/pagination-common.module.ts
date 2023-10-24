import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationCommonComponent } from './pagination-common.component';



@NgModule({
  declarations: [PaginationCommonComponent],
  imports: [
    CommonModule
  ],
  exports     : [
    PaginationCommonComponent
]
})
export class PaginationCommonModule { }
