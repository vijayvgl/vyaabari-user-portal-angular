import { NgModule } from '@angular/core';
import { CashoutComponent } from './cashout.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';

const cashoutRoutes: Route[] = [
  {
      path: '',
      component: CashoutComponent,
  },
];

@NgModule({
  declarations: [
    CashoutComponent,
 
  ],
  imports: [
    RouterModule.forChild(cashoutRoutes),
        SharedModule,
  ]
})
export class CashoutModule { }
