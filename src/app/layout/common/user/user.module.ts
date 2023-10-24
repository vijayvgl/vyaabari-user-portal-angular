import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { UserComponent } from 'app/layout/common/user/user.component';
import { UpiQrModule } from 'app/modules/admin/upi-qr/upi-qr.module';
import { SharedModule } from 'app/shared/shared.module';
import { CertificateModule } from 'app/modules/admin/certificate/certificate.module';
import { SvgIconsModule } from '../svg-icons/svg-icons.module';
import { ShopAddressModule } from 'app/modules/admin/shop-address/shop-address.module';
@NgModule({
    declarations: [
        UserComponent
    ],
    imports     : [
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        SharedModule,
        UpiQrModule,
        SvgIconsModule,
        CertificateModule,
        ShopAddressModule
    ],
    exports     : [
        UserComponent
    ]
})
export class UserModule
{
}
