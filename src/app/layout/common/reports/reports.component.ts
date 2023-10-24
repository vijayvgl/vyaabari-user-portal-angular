import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnDestroy,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { BooleanInput } from '@angular/cdk/coercion';
import { Subject, takeUntil } from 'rxjs';
import { User } from 'app/core/user/user.types';
import { decodedToken } from 'app/core/helpers/token.helper';
import { UserService } from 'app/core/services/user.service';
import { checkNull } from 'app/core/custom-validations/return-functions';
import { MatDialog } from '@angular/material/dialog';
import { UpiQrComponent } from 'app/modules/admin/upi-qr/upi-qr.component';
import { CertificateComponent } from 'app/modules/admin/certificate/certificate.component';
interface report {
    title: string;
    path: string;
    svg?: any;
}
@Component({
    selector: 'reports',
    templateUrl: './reports.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: 'reports',
})
export class ReportsComponent implements OnInit, OnDestroy {
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
    ) {}

    changeIcon() {
        // this.menuIcon = this.menuIcon == true ? false : true;
    }

    menuOpen() {
        this.menuIcon = false;
    }

    menuClose() {
        this.menuIcon = true;
    }

    ngOnInit(): void {
        let token = decodedToken();
        this.user = token;
    }
    ngOnDestroy(): void {
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    reports: report[] = [
        {
            title: 'Account Statement',
            path: 'reports/account-statement', 
            svg: 'acc_statement'
        },
        { title: 'Refund Report', path: 'reports/refund-report' ,svg: 'refund_report' },
        { title: 'DMT Report', path: 'reports/dmt-report' , svg: 'dmt_report' },
        {
            title: 'Payout Transaction Report',
            path: 'reports/payout-transaction-report',
             svg: 'payout_transaction_report'
        },
        { title: 'Payout Refund Report', path: 'reports/payout-refund-report' , svg: 'payout_refund_report' },
        { title: 'PG Report', path: 'reports/pg-report' , svg: 'pg_report'},
        { title: 'Top Up Report', path: 'reports/topup-report' , svg: 'topup_report' },
        // { title: 'Transaction Report', path: 'reports/transaction-report' },
        {
            title: 'Settlement Status Report',
            path: 'reports/settlement-status-report'
            , svg: 'settlement_status_report'
        },
        { title: 'Topup Claim Report', path: 'reports/topup-claim-report' , svg: 'topup_claim_report' },
        { title: 'Recharge Report', path: 'reports/recharge-status-report'  , svg: 'recharge_report'},
        { title: 'Bill Payment Report', path: 'reports/bill-payment-report' , svg: 'bill_payments_report' },
        { title: 'Credit Ledger History', path: 'reports/ledger-history'  , svg: 'credit_ledger_report'},
        { title: 'Transaction History', path: 'reports/transaction-history'  , svg: 'transaction_report'},
    ];
    navigate(data): void {
        this._router.navigate([data]);
    }

    updateUserStatus(status: string): void {}

    signOut(): void {
     this._router.navigate(['/'])
    }

    checkNull(data: any) {
        return checkNull(data);
    }
}
