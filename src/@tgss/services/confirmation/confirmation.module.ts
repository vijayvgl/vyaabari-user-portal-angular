import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TgssConfirmationService } from '@tgss/services/confirmation/confirmation.service';
import { TgssConfirmationDialogComponent } from '@tgss/services/confirmation/dialog/dialog.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        TgssConfirmationDialogComponent
    ],
    imports     : [
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        CommonModule
    ],
    providers   : [
        TgssConfirmationService
    ]
})
export class TgssConfirmationModule
{
    /**
     * Constructor
     */
    constructor(private _tgssConfirmationService: TgssConfirmationService)
    {
    }
}
