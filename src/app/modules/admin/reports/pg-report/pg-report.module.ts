import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PGReportComponent } from "./pg-report.component";
import { Route, RouterModule } from "@angular/router";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { MatSelectModule } from "@angular/material/select";
import { SearchIconModule } from "app/layout/common/search-icon/search-icon.module";
import { SharedModule } from "app/shared/shared.module";

const pgReportRoutes: Route[] = [
  {
    path: "",
    component: PGReportComponent,
  },
];

@NgModule({
  declarations: [PGReportComponent],
  imports: [
    RouterModule.forChild(pgReportRoutes),
    CommonModule,
    MatDatepickerModule,
    MatPaginatorModule,
    SearchIconModule,
    MatTableModule,
    MatSelectModule,
    SharedModule,
    MatFormFieldModule,
  ],
})
export class PGReportModule {}
