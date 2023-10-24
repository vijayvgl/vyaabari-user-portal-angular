import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CashInComponent } from "./cashin.component";
import { Route, RouterModule } from "@angular/router";
import { MatLuxonDateModule } from "@angular/material-luxon-adapter";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { TgssHighlightModule } from "@tgss/components/highlight";
import { SharedModule } from "app/shared/shared.module";
import { NgOtpInputModule } from "ng-otp-input";
const cashInRoutes: Route[] = [
  {
    path: "",
    component: CashInComponent,
  },
];

@NgModule({
  declarations: [CashInComponent],
  imports: [
    RouterModule.forChild(cashInRoutes),
    CommonModule,
    MatLuxonDateModule,
    MatSelectModule,
    TgssHighlightModule,
    MatDatepickerModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    SharedModule,
    NgOtpInputModule,
  ],
})
export class CashInModule {}
