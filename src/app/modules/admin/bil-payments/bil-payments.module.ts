import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BilPaymentsComponent } from "./bil-payments.component";
import { MatLuxonDateModule } from "@angular/material-luxon-adapter";
import { MatButtonModule } from "@angular/material/button";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { TgssHighlightModule } from "@tgss/components/highlight";
import { Route, RouterModule } from "@angular/router";
import { SharedModule } from "app/shared/shared.module";
import { SvgIconsModule } from "app/layout/common/svg-icons/svg-icons.module";
import { BillPaymentFormNewComponent } from "./bill-payment-form-new/bill-payment-form-new.component";

const billpaymentRoutes: Route[] = [
  {
    path: "",
    component: BilPaymentsComponent,
  },
  {
    path: "bill-payments-form",
    component: BillPaymentFormNewComponent,
  },
];

@NgModule({
  declarations: [BilPaymentsComponent, BillPaymentFormNewComponent],
  imports: [
    CommonModule,
    MatLuxonDateModule,
    MatSelectModule,
    RouterModule.forChild(billpaymentRoutes),
    TgssHighlightModule,
    MatDatepickerModule,
    MatDividerModule,
    MatTableModule,
    SvgIconsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    SharedModule,
  ],
  exports: [BillPaymentFormNewComponent],
})
export class BilPaymentsModule {}
