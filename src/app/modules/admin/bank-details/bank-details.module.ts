import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BankDetailsComponent } from "./bank-details.component";
import { MatLuxonDateModule } from "@angular/material-luxon-adapter";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatRippleModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatTooltipModule } from "@angular/material/tooltip";
import { Route, RouterModule } from "@angular/router";
import { TgssHighlightModule } from "@tgss/components/highlight";
import { SharedModule } from "app/shared/shared.module";
import { AddBankDetailsComponent } from "./add-bank-details/add-bank-details.component";

const exampleRoutes: Route[] = [
  {
    path: "",
    component: BankDetailsComponent,
  },
];

@NgModule({
  declarations: [BankDetailsComponent, AddBankDetailsComponent],
  imports: [
    CommonModule,
    MatLuxonDateModule,
    MatSelectModule,
    RouterModule.forChild(exampleRoutes),
    TgssHighlightModule,
    MatDatepickerModule,
    MatDividerModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatProgressBarModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatRadioModule,
    MatChipsModule,
    MatTabsModule,
    SharedModule,
  ],
})
export class BankDetailsModule {}
