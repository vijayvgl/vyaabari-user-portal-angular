import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TgssConfirmationConfig } from '@tgss/services/confirmation/confirmation.types';
import { UserActivityService } from 'app/core/services/user-activity.service';

@Component({
    selector     : 'tgss-confirmation-dialog',
    templateUrl  : './dialog.component.html',
    styles       : [
        `
            .tgss-confirmation-dialog-panel {

                @screen md {
                    @apply w-128;
                }

                .mat-mdc-dialog-container {

                    .mat-mdc-dialog-surface {
                        padding: 0 !important;
                    }
                }
            }
        `
    ],
    encapsulation: ViewEncapsulation.None
})
export class TgssConfirmationDialogComponent
{
    /**
     * Constructor
     */
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: TgssConfirmationConfig,
        public activityService:UserActivityService
        )
    {
    }
    
}
