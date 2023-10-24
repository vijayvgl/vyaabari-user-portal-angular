import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { PgLinkDetailComponent } from 'app/shared/components/models/pg-link-detail/pg-link-detail.component';



@Component({
  selector: 'app-pg-link-1',
  templateUrl: './pg-link-1.component.html',
})
export class PgLink1Component implements OnInit {

  params
  constructor(
    public dialog: MatDialog, 
   
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((res:any)=>{
      this.params = res;
      console.log(res);
    })
  

  }
  openDialog(){
    this.dialog.open( PgLinkDetailComponent, {
      panelClass:'transaction_details',
      width:'40%'
    });
  }

  ngOnInit(): void {}


  
 



}
