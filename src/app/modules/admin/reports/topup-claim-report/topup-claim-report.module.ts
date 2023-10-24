import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TopUpClaimReportComponent } from "./topup-claim-report.component";
import { Route, RouterModule } from "@angular/router";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { MatSelectModule } from "@angular/material/select";
import { SearchIconModule } from "app/layout/common/search-icon/search-icon.module";
import { SharedModule } from "app/shared/shared.module";

const topupClaimRoutes: Route[] = [
  {
    path: "",
    component: TopUpClaimReportComponent,
  },
];

@NgModule({
  declarations: [TopUpClaimReportComponent],
  imports: [
    RouterModule.forChild(topupClaimRoutes),
    CommonModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    SearchIconModule,
    MatSelectModule,
    SharedModule,
    MatFormFieldModule,
  ],
})
export class TopUpClaimReportModule {}
