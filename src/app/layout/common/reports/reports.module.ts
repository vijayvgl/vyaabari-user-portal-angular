import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { UpiQrModule } from 'app/modules/admin/upi-qr/upi-qr.module';
import { SharedModule } from 'app/shared/shared.module';
import { CertificateModule } from 'app/modules/admin/certificate/certificate.module';
import { ReportsComponent } from './reports.component';
import { SvgIconsModule } from '../svg-icons/svg-icons.module';
@NgModule({
    declarations: [
        ReportsComponent,
    ],
    imports     : [
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        SharedModule,
        UpiQrModule,
        CertificateModule,
        SvgIconsModule
    ],
    exports     : [
        ReportsComponent,
        // SvgIconsComponent
    ]
})
export class ReportsModule
{
}
