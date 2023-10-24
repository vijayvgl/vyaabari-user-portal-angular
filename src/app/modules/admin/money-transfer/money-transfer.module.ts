import { NgModule } from '@angular/core';
import { MoneyTransferComponent } from './money-transfer.component';
import { Route, RouterModule } from '@angular/router';
import { RemitterDetailsComponent } from './remitter-details/remitter-details.component';
import { SharedModule } from 'app/shared/shared.module';
import { NgOtpInputModule } from 'ng-otp-input';
import { BeneficiaryManageComponent } from './beneficiary-manage/beneficiary-manage.component';
import { CreateBeneficiaryComponent } from './create-beneficiary/create-beneficiary.component';
import { NumbersOnlyDirective } from './_service/numbersonly.directive';
import { PaynowComponent } from './paynow/paynow.component';
import { DeleteComponent } from './delete/delete.component';
import { SvgIconsModule } from 'app/layout/common/svg-icons/svg-icons.module';
import { TransDetailComponent } from './beneficiary-manage/trans-detail/trans-detail.component';

const exampleRoutes: Route[] = [
  {
    path: '',
    component: MoneyTransferComponent,
  },
  {
    path: 'beneficiary-manage',
    component: BeneficiaryManageComponent,
  },
  {
    path: 'create-beneficiary',
    component: CreateBeneficiaryComponent,
  },
];

@NgModule({
  declarations: [
    MoneyTransferComponent,
    RemitterDetailsComponent,
    // BeneficiaryManageComponent,
    BeneficiaryManageComponent,
    CreateBeneficiaryComponent,
    NumbersOnlyDirective,
    PaynowComponent,
    DeleteComponent,
    TransDetailComponent
  ],
  imports: [
    RouterModule.forChild(exampleRoutes),
    SharedModule,
    NgOtpInputModule,
    SvgIconsModule
  ]
})
export class MoneyTransferModule { }
