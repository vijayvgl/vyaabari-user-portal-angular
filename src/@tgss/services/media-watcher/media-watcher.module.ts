import { NgModule } from '@angular/core';
import { TgssMediaWatcherService } from '@tgss/services/media-watcher/media-watcher.service';

@NgModule({
    providers: [
        TgssMediaWatcherService
    ]
})
export class TgssMediaWatcherModule
{
    /**
     * Constructor
     */
    constructor(private _tgssMediaWatcherService: TgssMediaWatcherService)
    {
    }
}
