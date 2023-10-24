import { NgModule } from '@angular/core';
import { CollectMoneyComponent } from './collect-money.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { RegisterAadhaarComponent } from './register-aadhaar/register-aadhaar.component';

const exampleRoutes: Route[] = [
  {
    path: '',
    component: CollectMoneyComponent,
  },
];

@NgModule({
  declarations: [
    CollectMoneyComponent,
    RegisterAadhaarComponent
  ],
  imports: [
    RouterModule.forChild(exampleRoutes),
    SharedModule,
  ]
})
export class CollectMoneyModule { }
