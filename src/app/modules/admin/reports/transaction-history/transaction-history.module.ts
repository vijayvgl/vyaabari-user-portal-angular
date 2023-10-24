import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Route, RouterModule } from "@angular/router";
import { MatLuxonDateModule } from "@angular/material-luxon-adapter";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSelectModule } from "@angular/material/select";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { TgssHighlightModule } from "@tgss/components/highlight";
import { TransactionHistoryComponent } from "./transaction-history.component";
import { SharedModule } from "app/shared/shared.module";

const transactionRoutes: Route[] = [
  {
    path: "",
    component: TransactionHistoryComponent,
  },
];

@NgModule({
  declarations: [TransactionHistoryComponent],
  imports: [
    RouterModule.forChild(transactionRoutes),
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
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    SharedModule,
  ],
})
export class TransactionHistoryModule {}
