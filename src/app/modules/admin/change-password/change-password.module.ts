import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from './change-password.component';
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
      component: ChangePasswordComponent,
  },
];

@NgModule({
  declarations: [
    ChangePasswordComponent,
 
  ],
  imports: [
    RouterModule.forChild(exampleRoutes),
    CommonModule,
        MatSelectModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule ,
        SharedModule,
        
  ]
})
export class ChangePasswordModule { }
