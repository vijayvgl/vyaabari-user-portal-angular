import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { BooleanInput } from '@angular/cdk/coercion';
import { Subject, takeUntil } from 'rxjs';
import { decodedToken } from 'app/core/helpers/token.helper';
import { checkNull } from 'app/core/custom-validations/return-functions';
import { MatDialog } from '@angular/material/dialog';
import { TopupInfoComponent } from 'app/modules/admin/topup-info/topup-info.component';
import { TopupClaimComponent } from 'app/modules/admin/topup-claim/topup-claim.component';
import { UpiTopupComponent } from 'app/modules/admin/upi-topup/upi-topup.component';

@Component({
    selector: 'top-up',
    templateUrl: './top-up.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: 'top-up'
})
export class TopUpComponent implements OnInit, OnDestroy {

    // style: boolean = false;

    // toggle(){
    //   console.log(this.style);
    //   this.style = !this.style;
    // }
    /* eslint-disable @typescript-eslint/naming-convention */
    static ngAcceptInputType_showAvatar: BooleanInput;
    /* eslint-enable @typescript-eslint/naming-convention */

    @Input() showAvatar: boolean = true;
    user: any;

    menuIcon: boolean = true;
 
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        public dialog: MatDialog,
        private _changeDetectorRef: ChangeDetectorRef,
        private _router: Router,
    ) {
    }

    changeIcon() {
        // this.menuIcon = this.menuIcon == true ? false : true;
    }


    menuOpen() {
        this.menuIcon = false
    }

    menuClose() {
        this.menuIcon = true
    }

    ngOnInit(): void {
        let token = decodedToken()
        this.user = token
    }
    ngOnDestroy(): void {
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
    updateUserStatus(status: string): void {
    }

    signOut(): void {
    }

    checkNull(data: any) {
        return checkNull(data)
    }

    topupInfo() {
        this.dialog.open(TopupInfoComponent, {
          
        });
      }

      topupClaim() {
        this.dialog.open(TopupClaimComponent, {
         
        });
      }

      upiTopup() {
        this.dialog.open(UpiTopupComponent, {
          width: '400px'
        });
      }

}
