import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PgLink1Component } from './pg-link-1.component';
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
    component: PgLink1Component,
  },
];

@NgModule({
  declarations: [
    PgLink1Component,
  ],
  imports: [
    RouterModule.forChild(exampleRoutes),
    SharedModule
  ]
})
export class PgLink1Module { }
