import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { checkIsNull } from 'app/core/helpers/utils';
import { AppLoaderService } from 'app/core/services/app-loader.service';
import { ErrorMessageV2Service } from 'app/core/services/error-message-v2.service';
import { TgsstoasterService } from 'app/core/services/tgsstoaster.service';
import { Role } from 'app/shared/models/role/role.model';
import { RoleService } from '../services/role.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateRoleComponent {
  roleId: any;
  roleForm: FormGroup;
  row = new Role();
  details: any;
  deal: any;
  errorMessagelabels: any[] = [
    { name: 'rolename', label: 'role name', type: 'provide' }
  ]
  constructor(
    private modelService: RoleService,
    private loader: AppLoaderService,
    private toaster: TgsstoasterService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activeRouter: ActivatedRoute,
    private invalidservice: ErrorMessageV2Service,
  ) {
  }

  ngOnInit() {
    this.roleForm = this.formBuilder.group({
      rolename: new FormControl('', [Validators.required, Validators.pattern(/^\S$|^\S[\s\S]*\S$/)]),
    });
    this.activeRouter.queryParams.subscribe((res: any) => {
      if (checkIsNull(res.roleId)) {
        this.roleId = res.roleId ?? '';
        this.getRoleDetails();
      }
    })

  }

  getRoleDetails() {
    this.loader.open();
    this.modelService.getOne(this.roleId).subscribe((res: any) => {
      this.loader.close();
      if (res.keyword == 'success') {
        this.setValue(res?.roles ? res?.roles[0] : {});
      }
    })
  }

  setValue(item) {

    this.roleForm.setValue({
      rolename: item.name ? item.name : ''
    });
  }

  updateRole() {
    if (this.roleForm.valid) {
      var form = this.roleForm.value
      let obj =
      {
        'id': this.roleId,
        'name': form?.rolename
      }
      this.loader.open();
      this.modelService.update(obj).subscribe((res: any) => {
        if (res.keyword == "success") {
          this.loader.close();
          this.redirectRoleList();
          this.toaster.successToaster(res.message);
        } else {
          this.loader.close();
          this.toaster.errorToaster(res.message);
        }
      }, error => {
        this.toaster.errorToaster(error?.message ? error?.message : 'Try again.');
      });
    } else {
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

