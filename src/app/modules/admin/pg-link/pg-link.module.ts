import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PgLinkComponent } from './pg-link.component';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule  } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from 'app/shared/shared.module';

const exampleRoutes: Route[] = [
  {
    path: '',
    component: PgLinkComponent,
  },
];

@NgModule({
  declarations: [
    PgLinkComponent,
  ],
  imports: [
    RouterModule.forChild(exampleRoutes),
    SharedModule
  ]
})
export class PgLinkModule { }
