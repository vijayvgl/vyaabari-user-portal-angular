import { Component, OnInit, ViewChild, Input, ElementRef } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { generatePassword } from "app/core/helpers/global.helper";
import { checkIsNull } from "app/core/helpers/utils";
import { AppLoaderService } from "app/core/services/app-loader.service";
import { ErrorMessageV2Service } from "app/core/services/error-message-v2.service";
import { PopupService } from "app/core/services/popup.service";
import { TgsstoasterService } from "app/core/services/tgsstoaster.service";
import { Role } from "app/shared/models/role/role.model";
import { User } from "app/shared/models/user/user.model";
import { RoleService } from "../../manage-roles/services/role.service";
import { UsersService } from "../services/users.service";


@Component({
  selector: "app-users-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"]
})
export class UserseditComponent implements OnInit {
  userEditForm: FormGroup;
  role: Role = new Role();
  roles: Role[];
  hide = true;
  userDetails: any;
  user: User;
  InvalidContols: any = [];
  rolesOne: Role[];
  userId: any;
  errorMessagelabels: any[] = [
    { name: 'username', label: 'name', type: 'provide' },
    { name: 'rolename', label: 'role', type: 'choose' },
    { name: 'mobileNo', label: 'mobile number', type: 'provide' },
    { name: 'email', label: 'email', type: 'provide' },
    { name: 'password', label: 'password', type: 'provide', number: 8 },
  ]
  constructor(
    private modelService: UsersService,
    private roleService: RoleService,
    private toaster: TgsstoasterService,
    private loader: AppLoaderService,
    private nativeelement: ElementRef,
    private invalidservice: ErrorMessageV2Service,
    private router: Router,
    private alertPopup: PopupService,
    private activeRouter: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.form();
    this.activeRouter.queryParams.subscribe((res: any) => {
      if (checkIsNull(res.userId)) {
        this.userId = res.userId ?? '';
        this.getUserDetails();
      }
    })
  }

  form() {
    this.userEditForm = new FormGroup({
      username: new FormControl("",
        [Validators.required, Validators.maxLength(25), Validators.pattern(/^\S$|^\S[\s\S]*\S$/)],
      ),
      rolename: new FormControl("", Validators.required),
      mobileNo: new FormControl("",
        [Validators.required, Validators.pattern("^[6,7,8,9]{1}[0-9]{9}$"), Validators.pattern(/^\S$|^\S[\s\S]*\S$/)],
      ),
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.minLength(8), Validators.pattern(/^\S$|^\S[\s\S]*\S$/)]),
    });
  }

  getrole() {
    this.roleService.getAllList({}).subscribe((role: any) => {
      this.roles = role.roles;
      this.roles = this.roles.filter((x) => Number(x.status) == 1);
      this.rolesOne = this.roles;
      if (role.keyword == "success") {
      } else {
        this.toaster.errorToaster(role.message);
      }
    });
  }

  getUserDetails() {
    this.loader.open();
    this.modelService.getOne(this.userId).subscribe((res: any) => {
      this.loader.close();
      if (res.keyword == 'success') {
        this.userDetails = res?.user[0];
        this.setValue(res?.user[0]);
      }
    }, error => {
      this.loader.close();
    })
  }

  setValue(item: any) {

    this.userEditForm.setValue({
      username: item.name ? item.name : '',
      rolename: item.roleId ? Number(item.roleId) : '',
      mobileNo: item.mobileNumber ? Number(item.mobileNumber) : '',
      email: item.email ? item.email : '',
      password: '',
    });
  }

  generatePassword() {
    this.userEditForm.controls.password.setValue(generatePassword(12));
  }

  updateUser() {
    if (this.userEditForm.valid) {
      var form = this.userEditForm.value
      let obj =
      {
        'role_id': form?.rolename ?? '',
        'name': form?.username ?? '',
        "email": form?.email ?? '',
        "mobileno": form?.mobileNo ?? '',
        "password": form?.password ?? '',
        "id": this.userId ? Number(this.userId) : ''
      }
      this.loader.open();
      this.modelService.update(obj).subscribe((res: any) => {
        if (res.keyword == "success") {
          this.loader.close();
          this.redirectList();
          this.toaster.successToaster(res.message);
        } else {
          this.loader.close();
          this.toaster.errorToaster(res.message);
        }
      }, error => {
        this.toaster.errorToaster(error?.message ? error?.message : 'Try again.');
      });
    }
    else {
      let invalidControl: any;
      invalidControl = this.invalidservice.invalidControls(this.userEditForm);
      if (invalidControl.length > 0) {
        this.invalidservice.throwErrorMessage(this.userEditForm, invalidControl, this.errorMessagelabels);
      }
    }
  }

  redirectList() {
    this.router.navigate(['/settings/users']);
  }

}

