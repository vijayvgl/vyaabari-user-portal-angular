import { NgModule } from '@angular/core';
import { TgssSplashScreenService } from '@tgss/services/splash-screen/splash-screen.service';

@NgModule({
    providers: [
        TgssSplashScreenService
    ]
})
export class TgssSplashScreenModule
{
    /**
     * Constructor
     */
    constructor(private _tgssSplashScreenService: TgssSplashScreenService)
    {
    }
}
