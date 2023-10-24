import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TgssHighlightComponent } from '@tgss/components/highlight/highlight.component';

@NgModule({
    declarations: [
        TgssHighlightComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        TgssHighlightComponent
    ]
})
export class TgssHighlightModule
{
}
