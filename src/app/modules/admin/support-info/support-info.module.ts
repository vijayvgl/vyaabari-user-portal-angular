import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { SupportInfoComponent } from './support-info.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    SupportInfoComponent,
  ],
  imports: [
    SharedModule,
    MatIconModule                    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    SupportInfoComponent
  ]
})
export class SupportInfoModule { }
