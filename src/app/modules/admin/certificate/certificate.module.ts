import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TgssHighlightModule } from '@tgss/components/highlight';
import { SharedModule } from 'app/shared/shared.module';
import { CertificateComponent } from './certificate.component';



@NgModule({
  declarations: [
    CertificateComponent,
  ],
  imports: [
    CommonModule,
    TgssHighlightModule,
    SharedModule,
    
  ],
  exports: [
    CertificateComponent
  ]
})
export class CertificateModule { }
