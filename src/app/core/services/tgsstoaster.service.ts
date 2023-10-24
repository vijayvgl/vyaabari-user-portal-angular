import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TgssToasterComponent } from 'app/shared/components/tgss-toaster/tgss-toaster.component';

@Injectable({
  providedIn: 'root'
})

export class TgsstoasterService {
  constructor(
    private _matDialog: MatDialog,
  ) { }
  successToaster(message: string) {
    this._matDialog.open(TgssToasterComponent, {
      position: { top: '0px', right: '0px' },
      width: "400px",
      panelClass: 'toaster-class',
      hasBackdrop: false,
      disableClose: false,
      data: {
        message: message ?? '',
        type: 'success',
      },
    })
  }
  infoToaster(message: string) {
    this._matDialog.open(TgssToasterComponent, {
      position: { top: '0px', right: '0px' },
      width: "400px",
      panelClass: 'toaster-class',
      hasBackdrop: false,
      disableClose: false,
      data: {
        message: message,
        type: 'info',

      }
    })
  }
  primaryToaster(message: string) {
    this._matDialog.open(TgssToasterComponent, {
      position: { top: '0px', right: '0px' },
      width: "400px",
      panelClass: 'toaster-class',
      hasBackdrop: false,
      disableClose: false,
      data: {
        message: message,
        type: 'primary',

      }
    })
  }
  warningToaster(message: string) {
    this._matDialog.open(TgssToasterComponent, {
      position: { top: '0px', right: '0px' },
      width: "400px",
      panelClass: 'toaster-class',
      hasBackdrop: false,
      disableClose: false,
      data: {
        message: message,
        type: 'warning',

      }
    })
  }
  errorToaster(message?: string) {
    this._matDialog.open(TgssToasterComponent, {
      position: { top: '0px', right: '0px' },
      width: "400px",
      panelClass: 'toaster-class',
      hasBackdrop: false,
      disableClose: false,
      data: {
        message: message ?? 'Try again.',
        type: 'error',

      }
    })
  }

}
