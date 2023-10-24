import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TgssMasonryComponent } from '@tgss/components/masonry/masonry.component';

@NgModule({
    declarations: [
        TgssMasonryComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        TgssMasonryComponent
    ]
})
export class TgssMasonryModule
{
}
