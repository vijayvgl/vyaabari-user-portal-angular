import { LiveAnnouncer } from '@angular/cdk/a11y';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { constant } from 'app/core/helpers/global.helper';
import { checkIsNull } from 'app/core/helpers/utils';
import { AppLoaderService } from 'app/core/services/app-loader.service';
import { EncryptDecryptService } from 'app/core/services/encrypt-decrypt.service';
import { PopupService } from 'app/core/services/popup.service';
import { TgsstoasterService } from 'app/core/services/tgsstoaster.service';
import { PaginationDTO } from 'app/shared/models/role/paginationDTO';
import { Role } from 'app/shared/models/role/role.model';
import { debounceTime, distinctUntilChanged, fromEvent, Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { RoleService } from './services/role.service';

export interface PeriodicElement {
  roles: string;
  status: string;
  action: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  { roles: 'Suresh', status: '0', action: '' },
  { roles: 'Ganesh', status: '1', action: '' },
  { roles: 'Mahesh', status: '0', action: '' },
  { roles: 'Kumar', status: '1', action: '' },

]
@Component({
  selector: 'app-manage-roles',
  templateUrl: './manage-roles.component.html',
  styleUrls: ['./manage-roles.component.scss']
})

export class ManageRolesComponent {

  displayedColumns: string[] = ['roles', 'status', 'action'];
  paginationDTO: PaginationDTO;
  dataSource = new MatTableDataSource<Role>();
  data: any;
  pageSizeOptions = [];
  value = "";
  selection = new SelectionModel<Role>(true, []);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("filterInput") filter: ElementRef;
  roles: any = {};
  rolesId: any[];
  status: any;
  obj: any;
  currentPageDataSize: number;
  roleListSub: Subscription;
  constructor(
    private modelService: RoleService,
    private toaster: TgsstoasterService,
    private loader: AppLoaderService,
    private alertPopup: PopupService,
    private router: Router,
    private encryptDecryptService: EncryptDecryptService
  ) {

    this.paginationDTO = new PaginationDTO();
    this.pageSizeOptions = constant().app.table.filtering.pageSizeOptions;
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getData('init');
  }

  ngAfterViewInit() {
    this.filterKeyUp();
  }

  filterKeyUp() {
    fromEvent(this.filter?.nativeElement, "keyup")
      .pipe(debounceTime(150), distinctUntilChanged())
      .subscribe(() => {
        if (!this.dataSource) {
          return;
        }
        let filterValue = this.filter?.nativeElement.value;
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.paginationDTO.searchWith = filterValue;
        this.getData();
      });
  }



  refreshDataSource(value) {
    if (value) {
      this.selection = new SelectionModel<Role>(true, []);
    }
  }

  sortData(sort: Sort) {
    this.paginationDTO.sortByKey = sort.active;
    this.paginationDTO.sortByType = sort.direction.toUpperCase();
    this.getData();
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.paginationDTO.searchWith = filterValue;
    this.paginationDTO.offset = 1
    this.getData();
  }

  onPaginateChange(event) {
    this.paginationDTO.offset = event.pageIndex + 1;
    this.paginationDTO.limit = event.pageSize;
    this.getData();
  }



  getData(value?) {
    if (checkIsNull(value)) {
      this.loader.open();
    }
    if (checkIsNull(this.roleListSub)) {
      this.roleListSub.unsubscribe();
    }
    this.roleListSub = this.modelService.getList(this.paginationDTO).subscribe((data: any) => {
      if (data?.keyword == 'success') {
        this.loader.close()
        this.paginationDTO.totalSize = data.pageSize;
        this.currentPageDataSize = data.roles.length;
        this.dataSource = new MatTableDataSource<Role>(data.roles);
      } else {
        this.loader.close()
        this.paginationDTO.totalSize = data.pageSize;
        this.currentPageDataSize = data.roles.length;
        this.dataSource = new MatTableDataSource<Role>(data.roles);
      }
    }, error => {
      this.toaster.errorToaster('Try again.');
    });
  }


  setStaus(status: number, element) {
    let lblAction = "";
    if (status == 1) {
      lblAction = "active";
    } else if (status == 0) {
      lblAction = "Inactive";
    } else if (status == 2) {
      lblAction = "delete";
    }
    if (element?.id) {
      var id = element?.id
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
    this.modelService.status(obj, status).subscribe((deleted) => {
      this.data = deleted;
      if (this.data.keyword == "success") {
        this.loader.close();
        this.getData()
        this.toaster.successToaster(this.data.message);
      } else {
        this.loader.close();
        this.getData()
        this.toaster.errorToaster(this.data.message);
      }
    });
  }


  private refreshTable(actionType) {
    this.filter.nativeElement.value = "";
    this.value = "";
    this.paginationDTO.offset = this.paginator.pageIndex + 1;
    this.paginationDTO.limit = this.paginator.pageSize;
    this.paginationDTO.totalSize = this.paginator.length;
    if (actionType == 'add') {
      this.paginationDTO.offset = 1;
    }
    this.getData()
    this.paginator.pageIndex = this.paginationDTO.offset;
    this.paginator.pageSize = this.paginationDTO.limit;
    this.paginator.length = this.paginationDTO.totalSize;
    this.selection = new SelectionModel<Role>(true, []);
  }

  ngOnDestroy() {
    if (checkIsNull(this.roleListSub)) {
      this.roleListSub.unsubscribe();
    }
  }
  action(data) {
    this.router.navigate(['/settings/manage-roles/update'], { queryParams: { roleId: data?.id } })
  }
}
