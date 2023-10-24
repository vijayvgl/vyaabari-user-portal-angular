import { NgModule } from '@angular/core';
import { TgssScrollResetDirective } from '@tgss/directives/scroll-reset/scroll-reset.directive';

@NgModule({
    declarations: [
        TgssScrollResetDirective
    ],
    exports     : [
        TgssScrollResetDirective
    ]
})
export class TgssScrollResetModule
{
}
