import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PayoutTransactionReportComponent } from "./payout-transaction-report.component";
import { Route, RouterModule } from "@angular/router";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { MatSelectModule } from "@angular/material/select";
import { SearchIconModule } from "app/layout/common/search-icon/search-icon.module";
import { SharedModule } from "app/shared/shared.module";
import { SvgIconsModule } from "app/layout/common/svg-icons/svg-icons.module";

const payoutTransactionRoutes: Route[] = [
  {
    path: "",
    component: PayoutTransactionReportComponent,
  },
];

@NgModule({
  declarations: [PayoutTransactionReportComponent],
  imports: [
    RouterModule.forChild(payoutTransactionRoutes),
    CommonModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    SearchIconModule,
    MatSelectModule,
    SharedModule,
    MatFormFieldModule,
    SvgIconsModule,
  ],
})
export class PayoutTransactionReportModule {}
