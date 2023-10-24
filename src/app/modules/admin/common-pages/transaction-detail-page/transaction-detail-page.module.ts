import { NgModule } from "@angular/core";
import { TransactionDetailPageComponent } from "./transaction-detail-page.component";
import { Route, RouterModule } from "@angular/router";
import { SharedModule } from "app/shared/shared.module";
import { SvgIconsModule } from "app/layout/common/svg-icons/svg-icons.module";

const cmsRoutes: Route[] = [
  {
    path: "",
    component: TransactionDetailPageComponent,
  },
];

@NgModule({
  declarations: [TransactionDetailPageComponent],
  imports: [
    RouterModule.forChild(cmsRoutes),
    SharedModule,
    SvgIconsModule
  ],
})
export class TransactionDetailPageModule {}
