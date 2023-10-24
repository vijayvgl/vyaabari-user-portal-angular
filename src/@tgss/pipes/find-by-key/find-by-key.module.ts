import { NgModule } from '@angular/core';
import { TgssFindByKeyPipe } from '@tgss/pipes/find-by-key/find-by-key.pipe';

@NgModule({
    declarations: [
        TgssFindByKeyPipe
    ],
    exports     : [
        TgssFindByKeyPipe
    ]
})
export class TgssFindByKeyPipeModule
{
}
