import { ErrorHandler, NgModule, Optional, SkipSelf } from '@angular/core';
import { AuthModule } from 'app/core/auth/auth.module';
import { IconsModule } from 'app/core/icons/icons.module';
import { TranslocoCoreModule } from 'app/core/transloco/transloco.module';
import { interceptorProviders } from './interceptors/interceptors';
import { ErrorHandlerService } from './services/error-handler.service';
import { Logger } from './services/logger.service';
import { serviceProvider } from './services/services';

@NgModule({
    imports: [
        AuthModule,
        IconsModule,
        TranslocoCoreModule,

    ],
    providers: [
        { provide: ErrorHandler, useClass: ErrorHandlerService },
        { provide: Logger, useFactory: Logger },
        interceptorProviders,
        serviceProvider,
    ]
})
export class CoreModule {
    /**
     * Constructor
     */
    constructor(
        @Optional() @SkipSelf() parentModule?: CoreModule
    ) {
        // Do not allow multiple injections
        if (parentModule) {
            throw new Error('CoreModule has already been loaded. Import this module in the AppModule only.');
        }
    }
}
