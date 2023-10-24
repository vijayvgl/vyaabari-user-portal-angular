import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { tgssAnimations } from '@tgss/animations';
import { checkNull } from 'app/core/custom-validations/return-functions';
export interface Dialog_Data {
  type: 'primary' | 'accent' | 'warn' | 'basic' | 'info' | 'success' | 'warning' | 'error',
  message: string,
  title: any
}
@Component({
  selector: 'tgss-tgss-toaster',
  templateUrl: './tgss-toaster.component.html',
  styleUrls: ['./tgss-toaster.component.scss'],
  animations: tgssAnimations
})
export class TgssToasterComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matDialogRef: MatDialogRef<TgssToasterComponent>
  ) {
    setTimeout(() => {
      this.matDialogRef.close()
    }, 3000);
  }

  ngOnInit(): void {

  }

  closeDialog() {
    this.matDialogRef.close()
  }

  checkNull(data: any) {
    return checkNull(data)
  }
}
