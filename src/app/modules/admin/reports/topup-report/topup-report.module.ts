import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TopUpReportComponent } from "./topup-report.component";
import { Route, RouterModule } from "@angular/router";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { MatSelectModule } from "@angular/material/select";
import { SearchIconModule } from "app/layout/common/search-icon/search-icon.module";
import { SharedModule } from "app/shared/shared.module";

const topupRoutes: Route[] = [
  {
    path: "",
    component: TopUpReportComponent,
  },
];

@NgModule({
  declarations: [TopUpReportComponent],
  imports: [
    RouterModule.forChild(topupRoutes),
    CommonModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatTableModule,
    SearchIconModule,
    MatSelectModule,
    SharedModule,
    MatFormFieldModule,
  ],
})
export class TopUpReportModule {}
