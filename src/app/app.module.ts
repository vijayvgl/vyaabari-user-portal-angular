import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { TgssModule } from '@tgss';
import { TgssConfigModule } from '@tgss/services/config';
import { CoreModule } from 'app/core/core.module';
import { appConfig } from 'app/core/config/app.config';
import { LayoutModule } from 'app/layout/layout.module';
import { AppComponent } from 'app/app.component';
import { appRoutes } from 'app/app.routing';
import { TestComponent } from './modules/landing/test/test.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { environment } from 'environments/environment.prod';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { provideUserIdleConfig } from 'angular-user-idle';
import { SharedModule } from './shared/shared.module';
import { LoanLeadComponent } from './modules/admin/loan-lead/loan-lead.component';
import { ActionReportPopupComponent } from './modules/admin/reports/action-report-popup/action-report-popup.component';
import { SettlementStatusPopupComponent } from './modules/admin/reports/settlement-status-popup/settlement-status-popup.component';
import { TopupClaimPopupComponent } from './modules/admin/reports/topup-claim-popup/topup-claim-popup.component';
import { SupportInfoComponent } from './modules/admin/support-info/support-info.component';
import { SvgIconsModule } from './layout/common/svg-icons/svg-icons.module';
const firebase = environment.firebaseConfig;
 
const routerConfig: ExtraOptions = {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
};

@NgModule({
    declarations: [AppComponent, TestComponent, ActionReportPopupComponent, SettlementStatusPopupComponent, TopupClaimPopupComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, routerConfig),

        // Tgss, TgssConfig & TgssMockAPI
        TgssModule,
        TgssConfigModule.forRoot(appConfig),

        // Core module of your application
        CoreModule,

        // Layout module of your application
        LayoutModule,
        // FireBase modules
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        AngularFirestoreModule,

        AngularFireStorageModule,
        AngularFireDatabaseModule,
        SharedModule,
        SvgIconsModule
    ],
    bootstrap: [AppComponent],
    providers: [ AngularFirestore,
        { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
       // provideUserIdleConfig({ping:120,idle:480,timeout:120})
    ]
})
export class AppModule { }
