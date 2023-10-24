import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PayoutComponent } from "./payout.component";
import { Route, RouterModule } from "@angular/router";
import { MatLuxonDateModule } from "@angular/material-luxon-adapter";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRippleModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatTooltipModule } from "@angular/material/tooltip";
import { TgssHighlightModule } from "@tgss/components/highlight";
import { MatRadioModule } from "@angular/material/radio";
import { MatChipsModule } from "@angular/material/chips";
import { MatTabsModule } from "@angular/material/tabs";
import { RemitterDetailsComponent } from "./remitter-details/remitter-details.component";
import { SharedModule } from "app/shared/shared.module";
import { VerifyOtpPopupComponent } from "./verify-otp-popup/verify-otp-popup.component";
import { NgOtpInputModule } from "ng-otp-input";
import { PayoutBeneficiaryManageComponent } from "./payout-beneficiary-manage/payout-beneficiary-manage.component";
import { TgssDatePickerModule } from "app/shared/tgss-date-picker/tgss-date-picker.module";
import { CreateBeneficiaryComponent } from "./create-beneficiary/create-beneficiary.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CustomTooltipModule } from "app/shared/stable-components/cutom-tooltip/custom-tooltip.module";
import { SureIfscComponent } from "./sure-ifsc/sure-ifsc.component";
import { FindIfscComponent } from "./find-ifsc/find-ifsc.component";
import { PaynowComponent } from "./paynow/paynow.component";
import { DeleteComponent } from "./delete/delete.component";
import { ForgotPinPopupComponent } from "./forgot-pin-popup/forgot-pin-popup.component";
import { SvgIconsModule } from "app/layout/common/svg-icons/svg-icons.module";

const exampleRoutes: Route[] = [
  {
    path: "",
    component: PayoutComponent,
  },
  {
    path: "payout-beneficiary-manage",
    component: PayoutBeneficiaryManageComponent,
  },
  {
    path: "create-beneficiary",
    component: CreateBeneficiaryComponent,
  },
];

@NgModule({
  declarations: [
    PayoutComponent,
    RemitterDetailsComponent,
    VerifyOtpPopupComponent,
    PayoutBeneficiaryManageComponent,
    CreateBeneficiaryComponent,
    ForgotPinPopupComponent,
    SureIfscComponent,
    FindIfscComponent,
    PaynowComponent,
    DeleteComponent,
  ],
  imports: [
    RouterModule.forChild(exampleRoutes),
    CommonModule,
    MatLuxonDateModule,
    MatSelectModule,
    TgssHighlightModule,
    MatDatepickerModule,
    MatDividerModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatProgressBarModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatRadioModule,
    MatChipsModule,
    MatTabsModule,
    SharedModule,
    NgOtpInputModule,
    TgssDatePickerModule,
    FormsModule,
    ReactiveFormsModule,
    CustomTooltipModule,
    SvgIconsModule,
  ],
})
export class PayoutModule {}
