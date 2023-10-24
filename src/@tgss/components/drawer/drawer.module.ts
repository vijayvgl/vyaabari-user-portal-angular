import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TgssDrawerComponent } from '@tgss/components/drawer/drawer.component';

@NgModule({
    declarations: [
        TgssDrawerComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        TgssDrawerComponent
    ]
})
export class TgssDrawerModule
{
}
