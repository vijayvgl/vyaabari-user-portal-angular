import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TgssConfirmationService } from '@tgss/services/confirmation';
import { TgssConfirmationDialogComponent } from '@tgss/services/confirmation/dialog/dialog.component';
import { TgssToasterComponent } from 'app/shared/components/tgss-toaster/tgss-toaster.component';
export type icon = 'question-mark-circle' | 'exclamation' | 'ban' | 'bell' | 'clock' | 'cloud-upload' | 'exclamation'
export interface PopupInterface {
  title: string,
  message: string,
  type?:
  'basic'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';
  confirm_label?: string,
  cancel_label?: string,
  showCancelButton?:boolean,
  showOkButton?:boolean,
}
export type PopUpResult = 'confirmed' | 'cancelled' | 'undefined'

function chooseIcon(type: 'primary'
  | 'basic'
  | 'info'
  | 'success'
  | 'warning'
  | 'error') {
  switch (type) {
    case 'error': return 'x-circle';
    case 'warning': return 'exclamation';
    case 'info': return 'information-circle';
    case 'success': return 'shield-check';
    case 'basic': return 'question-mark-circle';
  }

}
@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(
    private confirm: TgssConfirmationService,
    private _matDialog: MatDialog,
  ) { }


  show(data:PopupInterface){
    let config = {
      "title": data?.title ?? '',
      "message": data?.message,
      "icon": {
        "show": true,
        "name": `heroicons_outline:${chooseIcon(data?.type ?? 'basic')}`,
        "color": data?.type ?? 'basic'
      },
      "actions": {
        "confirm": {
          "show": true,
          "label": data?.confirm_label ?? 'Confirm',
          "color": "primary"
        },
        "cancel": {
          "show": true,
          "label": data?.cancel_label ?? 'Cancel'
        }
      },
      "dismissible": false
    }

    return this._matDialog.open(TgssConfirmationDialogComponent, {
      autoFocus: false,
      disableClose: !config.dismissible,
      data: config,
      panelClass: 'tgss-confirmation-dialog-panel',
    });
  }
}
