import { NgModule } from '@angular/core';
import { TgssScrollbarDirective } from '@tgss/directives/scrollbar/scrollbar.directive';

@NgModule({
    declarations: [
        TgssScrollbarDirective
    ],
    exports     : [
        TgssScrollbarDirective
    ]
})
export class TgssScrollbarModule
{
}
