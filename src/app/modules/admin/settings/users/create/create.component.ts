import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { constant, generatePassword } from "app/core/helpers/global.helper";
import { AppLoaderService } from "app/core/services/app-loader.service";
import { ErrorMessageV2Service } from "app/core/services/error-message-v2.service";
import { TgsstoasterService } from "app/core/services/tgsstoaster.service";
import { Role } from "app/shared/models/role/role.model";
import { User } from "app/shared/models/user/user.model";
import { RoleService } from "../../manage-roles/services/role.service";
import { UsersService } from "../services/users.service";
@Component({
  selector: "app-users-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"]
})
export class UserscreateComponent implements OnInit {
  userForm: FormGroup;
  role: Role = new Role();
  roles: Role[];
  rolesOne: Role[];
  hide = true;
  errorMessagelabels: any[] = [
    { name: 'username', label: 'name', type: 'provide' },
    { name: 'rolename', label: 'role', type: 'choose' },
    { name: 'mobileNo', label: 'mobile number', type: 'provide' },
    { name: 'email', label: 'email', type: 'provide' },
    { name: 'password', label: 'password', type: 'provide',number:8 },
  ]
  constructor(
    private modelService: UsersService,
    private roleService: RoleService,
    private toaster: TgsstoasterService,
    private loader: AppLoaderService,
    private nativeelement: ElementRef,
    private invalidservice: ErrorMessageV2Service,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.userForm = new FormGroup({
      username: new FormControl("", [
        Validators.required,
        Validators.maxLength(25), Validators.pattern(/^\S$|^\S[\s\S]*\S$/)
      ]),
      rolename: new FormControl("", Validators.required),
      mobileNo: new FormControl("", [
        Validators.required,
        Validators.pattern("^[6,7,8,9]{1}[0-9]{9}$")
      ]),
      email: new FormControl("", [Validators.required, Validators.email, Validators.pattern(constant().app.validators.emailPattern)]),
      password: new FormControl("", [Validators.required, Validators.minLength(8), Validators.pattern(/^\S$|^\S[\s\S]*\S$/)]),
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

  

  generatePassword() {
    this.userForm.controls.password.setValue(generatePassword(12));
  }

  createdUser() {
    if (this.userForm.valid) {
      let row = new User();
      row.name = this.userForm.value.username;
      row.roleId = JSON.stringify(this.userForm.value.rolename);
      row.mobileNumber = this.userForm.value.mobileNo;
      row.email = this.userForm.value.email;
      row.password = this.userForm.value.password;
      this.loader.open();
      this.modelService.create(row).subscribe((result: any) => {
        if (result.keyword == "success") {
          this.loader.close();
          this.redirectList();
          this.toaster.successToaster(result.message);
        } else {
          this.loader.close();
          this.toaster.errorToaster(result.message);
        }
      },(err:any)=>{
        this.loader.close()
        this.toaster.errorToaster(err?.message ? err?.message : 'Try again.');
      });
    } 
    else {
      let invalidControl: any;
      invalidControl = this.invalidservice.invalidControls(this.userForm);
      if (invalidControl.length > 0) {
        this.invalidservice.throwErrorMessage(this.userForm, invalidControl, this.errorMessagelabels);
      }
    }
  }
  
  redirectList(){
    this.router.navigate(['/settings/users']);
  }

}

