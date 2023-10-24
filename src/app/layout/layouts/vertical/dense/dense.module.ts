import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { TgssFullscreenModule } from '@tgss/components/fullscreen';
import { TgssLoadingBarModule } from '@tgss/components/loading-bar';
import { TgssNavigationModule } from '@tgss/components/navigation';
import { LanguagesModule } from 'app/layout/common/languages/languages.module';
import { MessagesModule } from 'app/layout/common/messages/messages.module';
import { NotificationsModule } from 'app/layout/common/notifications/notifications.module';
import { QuickChatModule } from 'app/layout/common/quick-chat/quick-chat.module';
import { SearchModule } from 'app/layout/common/search/search.module';
import { ShortcutsModule } from 'app/layout/common/shortcuts/shortcuts.module';
import { UserModule } from 'app/layout/common/user/user.module';
import { SharedModule } from 'app/shared/shared.module';
import { DenseLayoutComponent } from 'app/layout/layouts/vertical/dense/dense.component';
import { ReportsModule } from 'app/layout/common/reports/reports.module';
import { AddCreditsModule } from 'app/modules/admin/add-credits/add-credits.module';
import { TopUpModule } from 'app/layout/common/top-up/top-up.module';
import { SupportInfoModule } from 'app/modules/admin/support-info/support-info.module';
import { SvgIconsModule } from 'app/layout/common/svg-icons/svg-icons.module';

@NgModule({
    declarations: [
        DenseLayoutComponent
    ],
    imports     : [
        HttpClientModule,
        RouterModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        TgssFullscreenModule,
        TgssLoadingBarModule,
        TgssNavigationModule,
        LanguagesModule,
        MessagesModule,
        NotificationsModule,
        QuickChatModule,
        SearchModule,
        ShortcutsModule,
        UserModule,
        ReportsModule,
        SharedModule,
        AddCreditsModule,
        TopUpModule,
        SupportInfoModule,
        SvgIconsModule
    ],
    exports     : [
        DenseLayoutComponent
    ]
})
export class DenseLayoutModule
{
}
