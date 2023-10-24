import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { TgssConfirmationModule } from '@tgss/services/confirmation';
import { TgssLoadingModule } from '@tgss/services/loading';
import { TgssMediaWatcherModule } from '@tgss/services/media-watcher/media-watcher.module';
import { TgssPlatformModule } from '@tgss/services/platform/platform.module';
import { TgssSplashScreenModule } from '@tgss/services/splash-screen/splash-screen.module';
import { TgssUtilsModule } from '@tgss/services/utils/utils.module';

@NgModule({
    imports  : [
        TgssConfirmationModule,
        TgssLoadingModule,
        TgssMediaWatcherModule,
        TgssPlatformModule,
        TgssSplashScreenModule,
        TgssUtilsModule
    ],
    providers: [
        {
            // Disable 'theme' sanity check
            provide : MATERIAL_SANITY_CHECKS,
            useValue: {
                doctype: true,
                theme  : false,
                version: true
            }
        },
        {
            // Use the 'fill' appearance on Angular Material form fields by default
            provide : MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: {
                appearance: 'fill'
            }
        }
    ]
})
export class TgssModule
{
    /**
     * Constructor
     */
    constructor(@Optional() @SkipSelf() parentModule?: TgssModule)
    {
        if ( parentModule )
        {
            throw new Error('TgssModule has already been loaded. Import this module in the AppModule only!');
        }
    }
}
