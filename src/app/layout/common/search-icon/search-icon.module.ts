import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { SharedModule } from 'app/shared/shared.module';
import { SearchIconComponent } from './search-icon.component';

@NgModule({
    declarations: [
        SearchIconComponent
    ],
    imports     : [
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        SharedModule,
      
    ],
    exports     : [
        SearchIconComponent
    ]
})
export class SearchIconModule
{
}
