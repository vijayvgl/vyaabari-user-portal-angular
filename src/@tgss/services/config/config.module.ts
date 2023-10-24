import { ModuleWithProviders, NgModule } from '@angular/core';
import { TgssConfigService } from '@tgss/services/config/config.service';
import { TGSS_APP_CONFIG } from '@tgss/services/config/config.constants';

@NgModule()
export class TgssConfigModule
{
    /**
     * Constructor
     */
    constructor(private _tgssConfigService: TgssConfigService)
    {
    }

    /**
     * forRoot method for setting user configuration
     *
     * @param config
     */
    static forRoot(config: any): ModuleWithProviders<TgssConfigModule>
    {
        return {
            ngModule : TgssConfigModule,
            providers: [
                {
                    provide : TGSS_APP_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
