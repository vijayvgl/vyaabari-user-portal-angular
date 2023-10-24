import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CMSComponent } from "./cms.component";
import { Route, RouterModule } from "@angular/router";
import { MatLuxonDateModule } from "@angular/material-luxon-adapter";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { TgssHighlightModule } from "@tgss/components/highlight";
import { SharedModule } from "app/shared/shared.module";

const cmsRoutes: Route[] = [
  {
    path: "",
    component: CMSComponent,
  },
];

@NgModule({
  declarations: [CMSComponent],
  imports: [
    RouterModule.forChild(cmsRoutes),
    CommonModule,
    MatLuxonDateModule,
    MatSelectModule,
    TgssHighlightModule,
    MatDatepickerModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    SharedModule,
  ],
})
export class CMSModule {}
