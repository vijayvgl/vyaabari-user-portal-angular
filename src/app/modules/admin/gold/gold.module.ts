import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoldComponent } from './gold.component';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule  } from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import { SharedModule } from 'app/shared/shared.module';
import { RegistrationComponent } from './registration/registration.component';
import { SvgIconsModule } from 'app/layout/common/svg-icons/svg-icons.module';

const goldRoutes: Route[] = [
  {
      path: '',
      component: GoldComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
},
];

@NgModule({
  declarations: [
    GoldComponent,
    RegistrationComponent,
  ],
  imports: [
    RouterModule.forChild(goldRoutes),
    CommonModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule ,
        MatStepperModule,
        SharedModule,
        SvgIconsModule
  ]
})
export class GoldModule { }
