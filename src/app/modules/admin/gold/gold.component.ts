import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-gold',
  templateUrl: './gold.component.html',
})
export class GoldComponent {
  private _router: any;
  constructor(public dialog: MatDialog, private router: Router) {}

  current: any = 0
  onTabChanged(event) {
    console.log(event)
    this.current = event.index
  }
  // newRegister(){
  //   console.log('opened');
  //   this.dialog.open( NewRegistrationComponent, {
  //     panelClass:'new_register',
  //     width:'90%'
  //   });
  // }
//   newRegister() {
//     this._router.navigate(['/gold/registration'])
// }
gtype(id:any){

  this.router.navigate(['/gold/registration'], { queryParams: { id: 'first' }});

  

}
}
