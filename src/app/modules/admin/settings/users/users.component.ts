import { SelectionModel } from "@angular/cdk/collections";
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort, Sort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { constant } from "app/core/helpers/global.helper";
import { checkIsNull } from "app/core/helpers/utils";
import { AppLoaderService } from "app/core/services/app-loader.service";
import { PopupService } from "app/core/services/popup.service";
import { TgsstoasterService } from "app/core/services/tgsstoaster.service";
import { PaginationDTO } from "app/shared/models/user/paginationDTO";
import { User } from "app/shared/models/user/user.model";
import { debounceTime, distinctUntilChanged, fromEvent, Subscription } from "rxjs";
import { UsersService } from "./services/users.service";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  actonType: any = null;
  currentState = 'initial';
  displayedColumns: string[] = ['name', 'roleName', 'mobileNumber', 'email',
    'status', 'action'];
  paginationDTO: PaginationDTO;
  dataSource = new MatTableDataSource<User>();
  data: any;
  pageSizeOptions = [];
  value = "";
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("filterInput") filter: ElementRef;
  obj: any;
  selection = new SelectionModel<User>(true, []);
  role: any = {};
  rolesId: any[];
  status: any;
  currentPageDataSize: number;
  userListSub: Subscription;
  constructor(
    private modelService: UsersService,
    private toaster: TgsstoasterService,
    private loader: AppLoaderService,
    private alertPopup: PopupService,
    private router: Router
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
    fromEvent(this.filter.nativeElement, "keyup")
      .pipe(debounceTime(150), distinctUntilChanged())
      .subscribe(() => {
        if (!this.dataSource) {
          return;
        }
        let filterValue = this.filter.nativeElement.value;
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.paginationDTO.searchWith = filterValue;
        this.getData();
      });

  }


  sortData(sort: Sort) {
    this.paginationDTO.sortByKey = sort.active;
    this.paginationDTO.sortByType = sort.direction.toUpperCase();
    this.getData();
  }



  refreshDataSource(value) {
    if (value) {
      this.selection = new SelectionModel<User>(true, []);
    }
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
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
    if (checkIsNull(this.userListSub)) {
      this.userListSub.unsubscribe();
    }
    this.userListSub = this.modelService.getList(this.paginationDTO).subscribe((data: any) => {
      if (data.keyword == 'success') {
        this.loader.close()
        this.paginationDTO.totalSize = data.pageSize;
        this.currentPageDataSize = data.user.length;
        this.dataSource = new MatTableDataSource<User>(data.user);
      } else {
        this.loader.close()
        this.paginationDTO.totalSize = data.pageSize;
        this.currentPageDataSize = data.user.length;
        this.dataSource = new MatTableDataSource<User>(data.user);
      }

    });
  }


  setStaus(status: number, element) {
    let lblAction = "";
    if (status == 1) {
      lblAction = "active";
    } else if (status == 0) {
      lblAction = "Inactive";
    }
    else if (status == 2) {
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
    let object = {
      'id': id,
      'status': status
    }
    this.loader.open();
    this.modelService.status(object, status).subscribe((deleted) => {
      this.data = deleted;
      if (this.data.keyword == "success") {
        this.loader.close();
        this.getData()
        this.toaster.successToaster(this.data.message);
      } else {
        this.loader.close();
        this.toaster.errorToaster(this.data.message);
      }
    });
  }

  private refreshTable(actionType) {
    this.filter.nativeElement.value = "";
    this.value = "";


    this.paginationDTO.offset = this.paginator.pageIndex + 1
    this.paginationDTO.limit = this.paginator.pageSize;
    this.paginationDTO.totalSize = this.paginator.length;


    if (actionType == 'add') {
      this.paginationDTO.offset = 1;
    }
    this.getData()
    this.paginator.pageIndex = this.paginationDTO.offset;
    this.paginator.pageSize = this.paginationDTO.limit;
    this.paginator.length = this.paginationDTO.totalSize;
    this.selection = new SelectionModel<User>(true, []);
  }

  action(data: any) {
    this.router.navigate(['/settings/users/update'], { queryParams: { userId: data.id } })
  }

  ngOnDestroy() {
    if (checkIsNull(this.userListSub)) {
      this.userListSub.unsubscribe();
    }
  }

}
