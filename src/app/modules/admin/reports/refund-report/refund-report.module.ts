import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RefundReportComponent } from "./refund-report.component";
import { Route, RouterModule } from "@angular/router";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { SearchIconModule } from "app/layout/common/search-icon/search-icon.module";
import { SharedModule } from "app/shared/shared.module";
import { SvgIconsModule } from "app/layout/common/svg-icons/svg-icons.module";

const refundRoutes: Route[] = [
  {
    path: "",
    component: RefundReportComponent,
  },
];

@NgModule({
  declarations: [RefundReportComponent],
  imports: [
    RouterModule.forChild(refundRoutes),
    CommonModule,
    MatDatepickerModule,
    MatPaginatorModule,
    SearchIconModule,
    MatTableModule,
    SharedModule,
    MatFormFieldModule,
    SvgIconsModule,
  ],
})
export class RefundReportModule {}
