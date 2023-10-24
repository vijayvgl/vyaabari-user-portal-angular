import { NgModule } from '@angular/core';
import { PosActivationComponent } from './pos-activation.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';

const exampleRoutes: Route[] = [
  {
      path: '',
      component: PosActivationComponent,
  },
];

@NgModule({
  declarations: [
    PosActivationComponent,
 
  ],
  imports: [
    RouterModule.forChild(exampleRoutes),
    SharedModule
  ]
})
export class PosActivationModule { }
