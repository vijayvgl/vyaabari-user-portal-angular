import { NgModule } from '@angular/core';
import { TgssUtilsService } from '@tgss/services/utils/utils.service';

@NgModule({
    providers: [
        TgssUtilsService
    ]
})
export class TgssUtilsModule
{
    /**
     * Constructor
     */
    constructor(private _tgssUtilsService: TgssUtilsService)
    {
    }
}
