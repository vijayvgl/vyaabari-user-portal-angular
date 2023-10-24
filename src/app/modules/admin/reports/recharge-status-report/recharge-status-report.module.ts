import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RechargeStatusReportComponent } from "./recharge-status-report.component";
import { Route, RouterModule } from "@angular/router";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { MatSelectModule } from "@angular/material/select";
import { SearchIconModule } from "app/layout/common/search-icon/search-icon.module";
import { SharedModule } from "app/shared/shared.module";

const rechargeRoutes: Route[] = [
  {
    path: "",
    component: RechargeStatusReportComponent,
  },
];

@NgModule({
  declarations: [RechargeStatusReportComponent],
  imports: [
    RouterModule.forChild(rechargeRoutes),
    CommonModule,
    MatDatepickerModule,
    MatPaginatorModule,
    SearchIconModule,
    MatTableModule,
    MatFormFieldModule,
    SharedModule,
    MatSelectModule,
  ],
})
export class RechargeStatusReportModule {}
