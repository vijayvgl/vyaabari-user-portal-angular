import { Route } from '@angular/router';
import { LayoutComponent } from 'app/layout/layout.component';


export const appRoutes: Route[] = [
    {
        path: '',
        component: LayoutComponent,
        data: {
            layout: 'empty',
        },
        children: [
            // Admin
            {
                path: '',
                loadChildren: () =>
                    import('./modules/admin/session/session.module').then(
                        (m) => m.SessionModule
                    ),
                data: { title: 'Session' },
            },
           
        ],
    },
    // Admin routes
    {
        path: '',
        // PayoutAuthgaurdGuard
        canActivate: [],
        component: LayoutComponent,
        data: {
            layout: 'dense',
        },
        children: [
            {
                path: 'dashboard',
                loadChildren: () =>
                    import('app/modules/admin/dashboard/dashboard.module').then(
                        (m) => m.DashboardModule
                    ),
            },
            {
                path: 'bill-payments',
                loadChildren: () =>
                    import('app/modules/admin/bil-payments/bil-payments.module').then(
                        (m) => m.BilPaymentsModule
                    ),
            },
        
         
            {
                path: 'loan-lead',
                loadChildren: () =>
                    import('app/modules/admin/loan-lead/loan-lead.module').then(
                        (m) => m.LoanLeadModule
                    ),
            },
            {
                path: 'aeps',
                loadChildren: () =>
                    import('app/modules/admin/aeps/aeps.module').then(
                        (m) => m.AepsModule
                    ),
            },
            {
                path: 'withdrawal-limit',
                loadChildren: () =>
                    import('app/modules/admin/widthdraw-limit/widthdraw-limit.module').then(
                        (m) => m.WidthdrawLimitModule
                    ),
            },
            {
                path: 'bank-details',
                loadChildren: () =>
                    import('app/modules/admin/bank-details/bank-details.module').then(
                        (m) => m.BankDetailsModule
                    ),
            },
            {
                path: 'money-transfer',
                loadChildren: () =>
                    import('app/modules/admin/money-transfer/money-transfer.module').then(
                        (m) => m.MoneyTransferModule
                    ),
            },

            {
                path: 'payout',
                loadChildren: () =>
                    import('app/modules/admin/payout/payout.module').then(
                        (m) => m.PayoutModule
                    ),
            },
            {
                path: 'cms',
                loadChildren: () =>
                    import('app/modules/admin/cms/cms.module').then(
                        (m) => m.CMSModule
                    ),
            },
            {
                path: 'collect-money',
                loadChildren: () =>
                    import('app/modules/admin/collect-money/collect-money.module').then(
                        (m) => m.CollectMoneyModule),
            },
            {
                path: 'gold',
                loadChildren: () =>
                    import('app/modules/admin/gold/gold.module').then(
                        (m) => m.GoldModule),
            },
            {
                path: 'recharge',
                loadChildren: () =>
                    import('app/modules/admin/recharge/recharge.module').then(
                        (m) => m.RechargeModule
                    ),
            },
            // {
            //     path: 'ledger-history',
            //     loadChildren: () =>
            //         import('app/modules/admin/ledger-history/ledger-history.module').then(
            //             (m) => m.LedgerHistoryModule
            //         ),
            // },
            //      {
            //     path: 'transaction-history',
            //     loadChildren: () =>
            //         import('app/modules/admin/transaction-history/transaction-history.module').then(
            //             (m) => m.TransactionHistoryModule
            //         ),
            // },
            {
                path: 'faq',
                loadChildren: () =>
                    import('app/modules/admin/faq/faq.module').then(
                        (m) => m.FAQModule
                    ),
            },
            {
                path: 'change-password',
                loadChildren: () =>
                    import('app/modules/admin/change-password/change-password.module').then(
                        (m) => m.ChangePasswordModule
                    ),
            },
            {
                path: 'request-credit',
                loadChildren: () =>
                    import('app/modules/admin/request-credit/request-credit.module').then(
                        (m) => m.RequestCreditModule
                    ),
            },
            {
                path: 'change-pin',
                loadChildren: () =>
                    import('app/modules/admin/change-pin/change-pin.module').then(
                        (m) => m.ChangePinModule
                    ),
            },
            {
                path: 'cash-in',
                loadChildren: () =>
                    import('app/modules/admin/cashin/cashin.module').then(
                        (m) => m.CashInModule
                    ),
            },
            {
                path: 'cash-out',
                loadChildren: () =>
                    import('app/modules/admin/cashout/cashout.module').then(
                        (m) => m.CashoutModule
                    ),
            },
            {
                path: 'payment-gateway',
                loadChildren: () =>
                    import('app/modules/admin/pg-link/pg-link.module').then(
                        (m) => m.PgLinkModule
                    ),
                    },
            {
                path: 'pg-link/:id',
                loadChildren: () =>
                    import('app/modules/admin/pg-link-1/pg-link-1.module').then(
                        (m) => m.PgLink1Module
                    ),
                    },
            {
                path: 'qr-activation',
                loadChildren: () =>
                    import('app/modules/admin/qr-activation/qr-activation.module').then(
                        (m) => m.QrActivationModule
                    ),
            },
            {
                path: 'pos-activation',
                loadChildren: () =>
                    import('app/modules/admin/pos-activation/pos-activation.module').then(
                        (m) => m.PosActivationModule
                    ),
            },
            {
                path: 'notification-details',
                loadChildren: () =>
                    import(
                        'app/modules/admin/notification-details/notification-details.module'
                    ).then((m) => m.NotificationDetailsModule),
            },
            {
                path: 'reports/account-statement',
                loadChildren: () =>
                    import('app/modules/admin/reports/account-statement/account-statement.module').then(
                        (m) => m.AccountStatementModule
                    ),
            },
            {
                path: 'reports/refund-report',
                loadChildren: () =>
                    import('app/modules/admin/reports/refund-report/refund-report.module').then(
                        (m) => m.RefundReportModule
                    ),
            },
            {
                path: 'reports/dmt-report',
                loadChildren: () =>
                    import('app/modules/admin/reports/dmt-report/dmt-report.module').then(
                        (m) => m.DMTReportModule
                    ),
            },
            {
                path: 'reports/payout-transaction-report',
                loadChildren: () =>
                    import('app/modules/admin/reports/payout-transaction-report/payout-transaction-report.module').then(
                        (m) => m.PayoutTransactionReportModule
                    ),
            },
            {
                path: 'reports/payout-refund-report',
                loadChildren: () =>
                    import('app/modules/admin/reports/payout-refund-report/payout-refund-report.module').then(
                        (m) => m.PayoutRefundReportModule
                    ),
            },
            {
                path: 'reports/pg-report',
                loadChildren: () =>
                    import('app/modules/admin/reports/pg-report/pg-report.module').then(
                        (m) => m.PGReportModule
                    ),
            },
            {
                path: 'reports/topup-report',
                loadChildren: () =>
                    import('app/modules/admin/reports/topup-report/topup-report.module').then(
                        (m) => m.TopUpReportModule
                    ),
            },
            {
                path: 'reports/transaction-report',
                loadChildren: () =>
                    import('app/modules/admin/reports/transaction-report/transaction-report.module').then(
                        (m) => m.TransactionReportModule
                    ),
            },
            {
                path: 'reports/settlement-status-report',
                loadChildren: () =>
                    import('app/modules/admin/reports/settlement-status-report/settlement-status-report.module').then(
                        (m) => m.SettlementStatusReportModule
                    ),
            },
            {
                path: 'reports/topup-claim-report',
                loadChildren: () =>
                    import('app/modules/admin/reports/topup-claim-report/topup-claim-report.module').then(
                        (m) => m.TopUpClaimReportModule
                    ),
            },
            {
                path: 'reports/recharge-status-report',
                loadChildren: () =>
                    import('app/modules/admin/reports/recharge-status-report/recharge-status-report.module').then(
                        (m) => m.RechargeStatusReportModule
                    ),
            },
            {
                path: 'reports/bill-payment-report',
                loadChildren: () =>
                    import('app/modules/admin/reports/bill-payment-report/bill-payment-report.module').then(
                        (m) => m.BillPaymentReportModule
                    ),
            },
            {
                path: 'reports/transaction-history',
                loadChildren: () =>
                    import('app/modules/admin/reports/transaction-history/transaction-history.module').then(
                        (m) => m.TransactionHistoryModule
                    ),
            },
            {
                path: 'reports/ledger-history',
                loadChildren: () =>
                    import('app/modules/admin/reports/ledger-history/ledger-history.module').then(
                        (m) => m.LedgerHistoryModule
                    ),
            },
            {
                path: 'settings',
                loadChildren: () =>
                    import('app/modules/admin/settings/settings.module').then(
                        (m) => m.SettingsModule
                    ),
                data: { title: '', breadcrumb: '' },
            },
            {
                path: 'transaction-detail',
                loadChildren: () =>
                    import('app/modules/admin/common-pages/transaction-detail-page/transaction-detail-page.module').then(
                        (m) => m.TransactionDetailPageModule
                    ),
            },

        ],
    },

    // Merchant routes


    {
        path: '**',
        loadChildren: () =>
            import('app/modules/error/error-404/error-404.module').then(
                (m) => m.Error404Module
            ),
    },
];
