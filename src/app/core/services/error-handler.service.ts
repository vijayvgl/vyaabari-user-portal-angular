import { ErrorHandler, Injectable, Injector, ApplicationRef, ChangeDetectorRef } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ErrorHandlerService extends ErrorHandler {

    errorCount = 0;

    constructor(protected injector: Injector) {
        super();
    }
    // https://github.com/angular/angular/issues/17010
    handleError(error: any) {
        let increment = 5;
        let max = 50;

        // Prevents change detection
        let debugCtx = error['ngDebugContext'];
        let changeDetectorRef = debugCtx && debugCtx.injector.get(ChangeDetectorRef);
        if (changeDetectorRef) changeDetectorRef.detach();

        this.errorCount = this.errorCount + 1;
        if (this.errorCount % increment === 0) {

            super.handleError(error);

            if (this.errorCount === max) {

                let appRef = this.injector.get(ApplicationRef);
                appRef.tick();
            }
        }
        else if (this.errorCount === 1) {
            super.handleError(error);
        }
    }
}
