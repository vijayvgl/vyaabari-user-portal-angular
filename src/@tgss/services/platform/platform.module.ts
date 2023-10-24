import { NgModule } from '@angular/core';
import { TgssPlatformService } from '@tgss/services/platform/platform.service';

@NgModule({
    providers: [
        TgssPlatformService
    ]
})
export class TgssPlatformModule
{
    /**
     * Constructor
     */
    constructor(private _tgssPlatformService: TgssPlatformService)
    {
    }
}
