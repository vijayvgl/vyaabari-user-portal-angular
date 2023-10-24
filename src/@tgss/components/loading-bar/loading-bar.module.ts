import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TgssLoadingBarComponent } from '@tgss/components/loading-bar/loading-bar.component';

@NgModule({
    declarations: [
        TgssLoadingBarComponent
    ],
    imports     : [
        CommonModule,
        MatProgressBarModule
    ],
    exports     : [
        TgssLoadingBarComponent
    ]
})
export class TgssLoadingBarModule
{
}
