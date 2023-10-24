import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'app/shared/shared.module';
import { UpiQrComponent } from './upi-qr.component';



@NgModule({
  declarations: [
    UpiQrComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    SharedModule
  ],
  exports: [
    UpiQrComponent
  ]
})
export class UpiQrModule { }
