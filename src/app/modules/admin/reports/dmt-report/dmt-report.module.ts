import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DMTReportComponent } from "./dmt-report.component";
import { Route, RouterModule } from "@angular/router";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { MatSelectModule } from "@angular/material/select";
import { SearchIconModule } from "app/layout/common/search-icon/search-icon.module";
import { SharedModule } from "app/shared/shared.module";
import { SvgIconsModule } from "app/layout/common/svg-icons/svg-icons.module";

const dmtReportRoutes: Route[] = [
  {
    path: "",
    component: DMTReportComponent,
  },
];

@NgModule({
  declarations: [DMTReportComponent],
  imports: [
    RouterModule.forChild(dmtReportRoutes),
    CommonModule,
    MatDatepickerModule,
    MatPaginatorModule,
    SearchIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    SharedModule,
    MatFormFieldModule,
    SvgIconsModule,
  ],
})
export class DMTReportModule {}
