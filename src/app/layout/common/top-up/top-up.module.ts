import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { SharedModule } from 'app/shared/shared.module';
import { TopUpComponent } from './top-up.component';
import { TopupInfoModule } from 'app/modules/admin/topup-info/topup-info.module';
import { TopupClaimModule } from 'app/modules/admin/topup-claim/topup-claim.module';
import { UpiTopupModule } from 'app/modules/admin/upi-topup/upi-topup.module';
import { SvgIconsModule } from '../svg-icons/svg-icons.module';
@NgModule({
    declarations: [
        TopUpComponent
    ],
    imports     : [
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        SharedModule,
        TopupInfoModule,
        TopupClaimModule,
        UpiTopupModule,
        SvgIconsModule
    ],
    exports     : [
        TopUpComponent
    ]
})
export class TopUpModule
{
}
