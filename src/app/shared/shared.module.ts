import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TgssToasterComponent } from './components/tgss-toaster/tgss-toaster.component';
import { TgssAlertModule } from '@tgss/components/alert';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TgssCardModule } from '@tgss/components/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectBoxModule } from './stable-components/select-box/select-box.module';
import { DatePickerModule } from './stable-components/date-picker/date-picker.module';
import { FancyBoxStableModule } from './stable-components/fancy-box-stable/fancy-box-stable.module';
import { TextEditorModule } from './stable-components/text-editor/text-editor.module';
import { SureIfscComponent } from './components/models/sure-ifsc/sure-ifsc.component';
import { FindIfscComponent } from './components/models/find-ifsc/find-ifsc.component';
import { CustomTooltipModule } from './stable-components/cutom-tooltip/custom-tooltip.module';
import { EnterIfscComponent } from './components/models/enter-ifsc/enter-ifsc.component';
import { PgLinkDetailComponent } from './components/models/pg-link-detail/pg-link-detail.component';
// import { StylePaginatorDirective } from './directives/paginator.directive';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SharedMaterialModule } from './sharedmaterial.module';
import { StylePaginatorDirective } from './directives/paginator.directive';
import { SvgIconsModule } from 'app/layout/common/svg-icons/svg-icons.module';
import { CommantsCommonComponent } from './components/models/commants-common/commants-common.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { EnterTpinComponent } from './components/models/enter-t-pin/enter-t-pin.component';
import { VerifyOtpPopupComponent } from './components/models/verify-otp-popup/verify-otp-popup.component';
import { ForgotpinComponent } from './components/models/forgot-pin/forgot-pin.component';
import { ResetPinComponent } from './components/models/reset-pin/reset-pin.component';
import { VerifyOtpComponent } from './components/models/verify-otp/verify-otp.component';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        TgssCardModule,
        TgssAlertModule,
        MatProgressSpinnerModule,
        SelectBoxModule,
        DatePickerModule,
        FancyBoxStableModule,
        TextEditorModule,
        FormsModule,
        ReactiveFormsModule,
        CustomTooltipModule,
        MatPaginatorModule,
        SharedMaterialModule,
        SvgIconsModule,
        NgOtpInputModule

    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TgssToasterComponent,
        SelectBoxModule,
        DatePickerModule,
        FancyBoxStableModule,
        TextEditorModule,
        FormsModule,
        ReactiveFormsModule,
        CustomTooltipModule,
        StylePaginatorDirective

    ],
    declarations: [
        TgssToasterComponent,
        SureIfscComponent,
        FindIfscComponent,
        EnterIfscComponent,
        PgLinkDetailComponent,
        CommantsCommonComponent,
        StylePaginatorDirective,
        EnterTpinComponent,
        VerifyOtpPopupComponent,
        ForgotpinComponent,
        ResetPinComponent,
        VerifyOtpComponent
    ]
})
export class SharedModule {
}
