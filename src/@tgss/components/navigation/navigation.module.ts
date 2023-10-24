import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TgssScrollbarModule } from '@tgss/directives/scrollbar/public-api';
import { TgssHorizontalNavigationBasicItemComponent } from '@tgss/components/navigation/horizontal/components/basic/basic.component';
import { TgssHorizontalNavigationBranchItemComponent } from '@tgss/components/navigation/horizontal/components/branch/branch.component';
import { TgssHorizontalNavigationDividerItemComponent } from '@tgss/components/navigation/horizontal/components/divider/divider.component';
import { TgssHorizontalNavigationSpacerItemComponent } from '@tgss/components/navigation/horizontal/components/spacer/spacer.component';
import { TgssHorizontalNavigationComponent } from '@tgss/components/navigation/horizontal/horizontal.component';
import { TgssVerticalNavigationAsideItemComponent } from '@tgss/components/navigation/vertical/components/aside/aside.component';
import { TgssVerticalNavigationBasicItemComponent } from '@tgss/components/navigation/vertical/components/basic/basic.component';
import { TgssVerticalNavigationCollapsableItemComponent } from '@tgss/components/navigation/vertical/components/collapsable/collapsable.component';
import { TgssVerticalNavigationDividerItemComponent } from '@tgss/components/navigation/vertical/components/divider/divider.component';
import { TgssVerticalNavigationGroupItemComponent } from '@tgss/components/navigation/vertical/components/group/group.component';
import { TgssVerticalNavigationSpacerItemComponent } from '@tgss/components/navigation/vertical/components/spacer/spacer.component';
import { TgssVerticalNavigationComponent } from '@tgss/components/navigation/vertical/vertical.component';
import { SvgIconsModule } from 'app/layout/common/svg-icons/svg-icons.module';

@NgModule({
    declarations: [
        TgssHorizontalNavigationBasicItemComponent,
        TgssHorizontalNavigationBranchItemComponent,
        TgssHorizontalNavigationDividerItemComponent,
        TgssHorizontalNavigationSpacerItemComponent,
        TgssHorizontalNavigationComponent,
        TgssVerticalNavigationAsideItemComponent,
        TgssVerticalNavigationBasicItemComponent,
        TgssVerticalNavigationCollapsableItemComponent,
        TgssVerticalNavigationDividerItemComponent,
        TgssVerticalNavigationGroupItemComponent,
        TgssVerticalNavigationSpacerItemComponent,
        TgssVerticalNavigationComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,
        TgssScrollbarModule,
        SvgIconsModule
    ],
    exports     : [
        TgssHorizontalNavigationComponent,
        TgssVerticalNavigationComponent
    ]
})
export class TgssNavigationModule
{
}
