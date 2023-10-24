import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccountStatementComponent } from "./account-statement.component";
import { Route, RouterModule } from "@angular/router";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { SharedModule } from "app/shared/shared.module";
import { SearchIconModule } from "app/layout/common/search-icon/search-icon.module";

const accountStatementRoutes: Route[] = [
  {
    path: "",
    component: AccountStatementComponent,
  },
];

@NgModule({
  declarations: [AccountStatementComponent],
  imports: [
    RouterModule.forChild(accountStatementRoutes),
    CommonModule,
    MatDatepickerModule,
    MatPaginatorModule,
    SearchIconModule,
    MatTableModule,
    MatFormFieldModule,
    SharedModule,
  ],
})
export class AccountStatementModule {}
