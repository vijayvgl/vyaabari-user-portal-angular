import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PgLinkDetailComponent } from 'app/shared/components/models/pg-link-detail/pg-link-detail.component';



@Component({
  selector: 'app-pg-link',
  templateUrl: './pg-link.component.html',
})
export class PgLinkComponent implements OnInit {

  params
  constructor(
    public dialog: MatDialog, 
  ) {
  }
  openDialog(){
    this.dialog.open( PgLinkDetailComponent, {
      
      panelClass:'transaction_details',
      width:'40%'

    });
  }

  ngOnInit(): void {}


  
 



}
