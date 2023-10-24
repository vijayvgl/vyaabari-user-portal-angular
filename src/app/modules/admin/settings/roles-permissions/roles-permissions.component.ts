import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, UntypedFormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { constant } from 'app/core/helpers/global.helper';
import { checkIsNull } from 'app/core/helpers/utils';
import { AppLoaderService } from 'app/core/services/app-loader.service';
import { PopupService } from 'app/core/services/popup.service';
import { TgsstoasterService } from 'app/core/services/tgsstoaster.service';
import { PaginationDTO } from 'app/shared/models/role-permission/paginationDTO';
import { Subscription } from 'rxjs';
import { RolepermissionService } from './services/rolepermission.service';

@Component({
  selector: 'app-roles-permissions',
  templateUrl: './roles-permissions.component.html',
  styleUrls: ['./roles-permissions.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RolesPermissionsComponent {
  rolesList: any = []
  count: any = 0
  paginationDTO: PaginationDTO;
  rolePermissionListSub: Subscription;
  pageSizeOptions = [];
  constructor(private router: Router,
    private toaster: TgsstoasterService,
    private loader: AppLoaderService,
    private service: RolepermissionService,
    private alertPopup: PopupService,
  ) {
    this.paginationDTO = new PaginationDTO();
    this.pageSizeOptions = constant().app.table.filtering.pageSizeOptions;
  }

  ngOnInit(): void {
    this.rolesPerMissionList('init')
  }

  rolesPerMissionList(value?) {
    if (checkIsNull(value)) {
      this.loader.open();
    }
    if (checkIsNull(this.rolePermissionListSub)) {
      this.rolePermissionListSub.unsubscribe();
    }
    this.rolePermissionListSub = this.service.getRoleslist(this.paginationDTO).subscribe((res: any) => {
      this.loader.close()
      if (res?.keyword == 'success') {
        this.rolesList = res?.roles ?? []
        this.rolesList.map((ele: any) => {
          ele.color = this.getRandomColor();
        })
        this.paginationDTO.totalSize = res?.count ?? 0
      }
    }, (err: any) => {
      this.loader.close()
      this.toaster.errorToaster(err.message ? err.message : 'Try again.')
    })

  }


  letters = '0123456789ABCDEF';
  color = '#';

  getRandomColor() {
    this.color = "#";
    for (var i = 0; i < 6; i++) {

      this.color += this.letters[Math.floor(Math.random() * 16)];
    }

    return this.color

  }

  getLogo(data: string) {

    let arr = data.split(' ')
    let logo: string = ''
    if (arr.length > 1) {
      logo = `${arr[0][0]}${arr[1][0]}`

    } else {
      logo = `${data[0]}${data[1]}`

    }

    return logo.toUpperCase()

  }

  /*************** Go To Permission ********/
  redirectPermissionView(id) {
    this.router.navigate([`/settings/roles-permissions/view/${id}`])
  }

  setStaus(status: number, element, event) {
    event.preventDefault();
    event.stopPropagation();
    let lblAction = "";
    if (status == 1) {
      lblAction = "active";
    } else if (status == 0) {
      lblAction = "Inactive";
    } else if (status == 2) {
      lblAction = "delete";
    }
    if (element) {
      var id = element
      this.statusAlert(lblAction, status, id);
    }
  }

  statusAlert(lblAction: string, status, id) {
    this.alertPopup.show(
      {
        title: "Confirm?",
        message: "Are you sure? You want to " + lblAction + " it !",
        type: "info",
        showCancelButton: true,
        confirm_label: "Yes, " + lblAction + " it!",
        cancel_label: 'Cancel'
      }).afterClosed().subscribe(res => {

        if (res == 'confirmed') {
          this.saveStatus(status, id);
        }
      });
  }

  saveStatus(status, id) {
    let ids = [];
    ids.push(id);
    let obj = {
      "id": id,
      "status": status
    }
    this.loader.open();
    this.service.status(obj, status).subscribe((deleted) => {
      if (deleted.keyword == "success") {
        this.loader.close();
        this.rolesPerMissionList()
        this.toaster.successToaster(deleted.message);
      } else {
        this.loader.close();
        this.rolesPerMissionList()
        this.toaster.errorToaster(deleted.message);
      }
    });
  }


  onPaginateChange(event: MatPaginator) {
    this.paginationDTO.limit = event.pageSize;
    this.paginationDTO.offset = event.pageIndex + 1;
    this.rolesPerMissionList()
  }

  ngOnDestroy() {
    if (checkIsNull(this.rolePermissionListSub)) {
      this.rolePermissionListSub.unsubscribe();
    }
  }
}