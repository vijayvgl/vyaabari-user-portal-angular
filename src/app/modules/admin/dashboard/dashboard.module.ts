import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
import { Route, RouterModule } from '@angular/router';
import { DashboardComponent } from 'app/modules/admin/dashboard/dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CommonModule, DatePipe, DecimalPipe, CurrencyPipe } from '@angular/common';
import { MatLuxonDateModule } from '@angular/material-luxon-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule  } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TgssHighlightModule } from '@tgss/components/highlight';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SvgIconsModule } from 'app/layout/common/svg-icons/svg-icons.module';
import { SuccessRegistrationComponent } from './success-registration/success-registration.component';


const exampleRoutes: Route[] = [
    {
        path: '',
        component: DashboardComponent,
    },
];

@NgModule({
    declarations: [DashboardComponent, SuccessRegistrationComponent],
    imports: [RouterModule.forChild(exampleRoutes),
        NgApexchartsModule,
        CommonModule,
        MatLuxonDateModule,
        MatSelectModule,
        TgssHighlightModule,
        MatDatepickerModule,
        MatDividerModule,
        MatTableModule,
        MatCardModule,
        MatButtonModule,
        MatPaginatorModule,
        MatSortModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule ,
        MatMenuModule,
        MatProgressBarModule,
        MatRippleModule,
        MatSlideToggleModule,
        MatTooltipModule,
        MatRadioModule,
        CarouselModule ,
        MatTabsModule,
        MatChipsModule,
        FormsModule,ReactiveFormsModule, SvgIconsModule
    ],
    providers: [DatePipe, DecimalPipe,CurrencyPipe]
})
export class DashboardModule {}
