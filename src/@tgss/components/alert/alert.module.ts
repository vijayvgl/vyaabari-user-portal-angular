import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TgssAlertComponent } from '@tgss/components/alert/alert.component';

@NgModule({
    declarations: [
        TgssAlertComponent
    ],
    imports     : [
        CommonModule,
        MatButtonModule,
        MatIconModule
    ],
    exports     : [
        TgssAlertComponent
    ]
})
export class TgssAlertModule
{
}
