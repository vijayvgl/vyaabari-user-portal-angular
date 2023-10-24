import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { ActivatedRoute, Router } from '@angular/router';
import { AppLoaderService } from 'app/core/services/app-loader.service';
import { TgsstoasterService } from 'app/core/services/tgsstoaster.service';
import { RolepermissionService } from '../services/rolepermission.service';


interface MenuNames {
  acl_menu_module_id?: any;
  action?: any[];
  others?: any[];
  name?: any;
  status?: any;
  view_type?: any;
}

interface ELE {
  acl_menu_module_id;
  action: any[];
  name: any;
  status: any;
  view_type: any;
}

interface ACT {
  "acl_menu_id": any
  "acl_menu_module_id": any
  "menu_name": any
  "icon_type": any
  "icon": any
  "url_type": any
  "url": any
  "url_target": any
  "menu_class": any
  "active": any
  "parent": any
  "sort": any
  "accesskey": any
}

@Component({
  selector: 'app-roles-permissions-view',
  templateUrl: './roles-permissions-view.component.html',
  styleUrls: ['./roles-permissions-view.component.scss']
})
export class RolesPermissionsViewComponent {
  rol_id: any;
  rolesPermissionList: any = [];
  actualList: any[] = []
  permList = new Set();
  selectedData = new Set();
  params: any
  constructor(private route: ActivatedRoute,
    private toaster: TgsstoasterService,
    private loader: AppLoaderService,
    private service: RolepermissionService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe((res: any) => {
      this.params = res.role
    })
    this.route.paramMap.subscribe((res: any) => {
      if (res.params.id != undefined) {
        this.rol_id = res.params.id;
      }
    })
  }
  @ViewChild('menu') menu: MatMenuTrigger
  ngOnInit(): void {
    this.getPermissions();
  }
  /************** Get Permission List *************/
  getPermissions() {
    this.loader.open()
    this.service.getlist(this.rol_id).subscribe((res: any) => {
      if (res?.status == true) {
        this.rolesPermissionList = res?.data[0] ?? [];
        this.modifyRoleNames(res?.data[0]).then(() => {
          this.loadPermissions();
        })
        // this.modifyPermission();
        this.loader.close();
      } else {
        this.loader.close()
        //  this.toaster.errorToaster(res?.message ?? 'Error')
      }
    }, (err: any) => {
      this.loader.close()
      this.toaster.errorToaster('Try again!')
    })
  }
  /************ Load Checked Permission ***********/
  loadPermissions() {
    if (this.rolesPermissionList.role_permissions.length > 0) {
      this.rolesPermissionList.role_permissions.forEach((x) => {
        this.permList.add(`${x.acl_menu_id},${x.acl_menu_module_id}`);
        this.selectedData.add({ acl_menu_id: x.acl_menu_id, acl_menu_module_id: x.acl_menu_module_id });
      });
    }

  }
  /***************** Modify Menu List ***********/
  modifyPermission() {
    this.rolesPermissionList?.tabular_view.filter((res) => {
      let obj = {
        accesskey: '',
        acl_menu_id: '',
        acl_menu_module_id: res?.acl_menu_module_id,
        active: 1,
        icon: '',
        icon_type: '',
        menu_class: '',
        menu_name: "",
        parent: '',
        sort: '',
        url: "",
        url_target: '',
        url_type: ''
      }
      let others: any = [];
      let count: any = 0;
      if (res.action.length > 0) {
        count = res.action.length;
        let remaining_Count = 5 - count
        if (res.action.length < 5) {
          for (let i = 0; i < remaining_Count; i++) {
            res.action.push(obj);
          }
          res.others = [];
        }
        else if (res.action.length > 5) {
          let other = res.action.filter((res, index) => index > 4);
          res.others = other;
          res.action.splice(res.action.length - res.others.length, res.others.length);
        }
        else if (res.action.length == 5) {
          res.others = [];
        }
      }
      else {
        for (let i = 0; i < 6; i++) {
          res.action.push(obj);
        }
        res.others = [];
      }
    })

  }
  async modifyRoleNames(data) {
    let first5: any[] = ["List", "Create", 'Update', 'Delete', 'View']
    let obj = {
      accesskey: '',
      acl_menu_id: '',
      acl_menu_module_id: null,
      active: 1,
      icon: '',
      icon_type: '',
      menu_class: '',
      menu_name: "",
      parent: '',
      sort: '',
      url: "",
      url_target: '',
      url_type: ''
    }
    function returnFirst5(action: ACT[]) {
      let returnValue: any[] = []
      first5.forEach((ele: any) => {
        returnValue.push(action.find((menu: ACT) => String(menu.menu_name).trim() == ele) ?? obj)
      })
      return returnValue
    }
    function returnOthers(action: ACT[]) {
      let value = action.filter((ele: ACT) => !first5.includes(String(ele.menu_name).trim()))
      return value ?? []
    }
    this.actualList = []
    new Promise((resolve) => {
      data?.tabular_view.filter((ele: any) => {
        this.actualList.push({
          acl_menu_module_id: ele.acl_menu_module_id,
          action: returnFirst5(ele.action),
          others: returnOthers(ele.action),
          name: ele.name,
          status: ele.status,
          view_type: ele.view_type
        })
      })
      resolve(true)
    }).then((res) => {

    })
  }
  /************** Checked Value ***********/
  valueChange(checked: boolean, permission: string) {
    let val = permission.split(',');
    if (checked) {
      this.permList.add(permission);
      this.selectedData.add({ acl_menu_id: Number(val[0]), acl_menu_module_id: Number(val[1]) });
    } else {
      this.permList.delete(permission);
      this.selectedData.forEach((el, index) => {
        if (el['acl_menu_id'] == Number(val[0])) {
          this.selectedData.delete(el);
        }
      })
    }
  }
  /****************** Update Permission ***********/
  update() {
    let formData = {
      "role_menu_id": Array.from(this.selectedData),
      "acl_role_id": this.rol_id
    };
    this.loader.open();
    this.service.update(formData).subscribe((data) => {
      if (data.status == true) {
        this.toaster.successToaster(data.message);
        this.loader.close();
        this.router.navigate(['/settings/roles-permissions'])
      } else {
        this.loader.close();
        this.toaster.errorToaster(data.message);
      }
    });
  }
  /**************** Clear Permission *********/
  clearPermission() {
    this.permList = new Set([]);
    this.selectedData = new Set([]);
  }

  checkDefaultMenu(menuName: String) {
    menuName = menuName.trim();
    if (menuName == 'List' || menuName == 'Create' || menuName == 'Update' || menuName == 'View' || menuName == 'Delete') {
      return true;
    } else {
      return false;
    }
  }
}