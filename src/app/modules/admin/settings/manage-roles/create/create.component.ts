import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { Router } from '@angular/router';
import { AppLoaderService } from 'app/core/services/app-loader.service';
import { ErrorMessageV2Service } from 'app/core/services/error-message-v2.service';
import { TgsstoasterService } from 'app/core/services/tgsstoaster.service';
import { Role } from 'app/shared/models/role/role.model';
import { RoleService } from '../services/role.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateRoleComponent {
public show: boolean = false;
roleForm: FormGroup;
roles: Role = new Role();
public data: any;
@ViewChild(MatButton) submitButton: MatButton;
errorMessagelabels: any[] = [
  { name: 'rolename', label: 'role name', type: 'provide' }
]
constructor(
  private modelService: RoleService,
  private loader: AppLoaderService,
  private toaster: TgsstoasterService,
  private router:Router,
  private invalidservice: ErrorMessageV2Service,
) {
}

ngOnInit() {
  this.roleForm = new FormGroup({
    rolename: new FormControl('', [Validators.required, Validators.pattern(/^\S$|^\S[\s\S]*\S$/)])
  });
}


createRole() {
  if (this.roleForm.valid) {
    this.loader.open();
    this.roles.name = this.roleForm.value?.rolename;
    this.modelService.create(this.roles).subscribe((result: any) => {
      this.data = result;
      if (this.data.keyword == 'success') {
        this.modelService.recordAddedSubject.next(this.data.roles);
        this.loader.close();
        this.redirectRoleList();
        this.toaster.successToaster(this.data.message);
      } else {
        this.loader.close();
        this.toaster.errorToaster(this.data.message);
      }
    },error =>{
      this.toaster.errorToaster(error?.message ? error?.message : 'Try again.');
    });
  } 
  else {
    let invalidControl: any;
      invalidControl = this.invalidservice.invalidControls(this.roleForm);
      if (invalidControl.length > 0) {
        this.invalidservice.throwErrorMessage(this.roleForm, invalidControl, this.errorMessagelabels);
      }
  }

}

redirectRoleList() {
  this.router.navigate(['/settings/manage-roles'])
}

}