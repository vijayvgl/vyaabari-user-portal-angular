import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TgssCardComponent } from '@tgss/components/card/card.component';

@NgModule({
    declarations: [
        TgssCardComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        TgssCardComponent
    ]
})
export class TgssCardModule
{
}
