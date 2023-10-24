import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
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
import { MatRadioModule } from '@angular/material/radio';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { FAQComponent } from './faq.component';
import { SharedModule } from 'app/shared/shared.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { SvgIconsModule } from 'app/layout/common/svg-icons/svg-icons.module';


const exampleRoutes: Route[] = [
  {
      path: '',
      component: FAQComponent,
  },
];

@NgModule({
  declarations: [
    FAQComponent,
 
  ],
  imports: [
    RouterModule.forChild(exampleRoutes),
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
        MatChipsModule,
        MatExpansionModule,
        MatTabsModule,
        SharedModule,
        SvgIconsModule
  ]
})
export class FAQModule { }
