import { Component } from '@angular/core';
import { AppLoaderService } from 'app/core/services/app-loader.service';
import { ServiceService } from './service.service';
import { Router } from '@angular/router';
import { GenerateRouteService } from 'app/core/services/generate-route.service';
import { MessagingService } from 'app/core/services/messaging.service';
import { constant } from 'app/core/helpers/global.helper';
import { decodedToken } from 'app/core/helpers/token.helper';
import { BellCountService } from 'app/core/services/bell-count.service';
import { TgsstoasterService } from 'app/core/services/tgsstoaster.service';
export interface PeriodicElement {
  title: string;
  description: string;
  created_on: any;
  status: any;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {title: '1', description: 'New Merchant Created', created_on: '', status: 'Read'},
  {title: '0', description: 'New Account Created', created_on: '', status: 'Un-read'},
  {title: '1', description: 'New Merchant Created', created_on: '', status: 'Read'},
  {title: '0', description: 'New Account Created', created_on: '', status: 'Un-read'},
  {title: '1', description: 'New Account Created', created_on: '', status: 'Read'},
  {title: '0', description: 'New Merchant Created', created_on: '', status: 'Un-read'},
  {title: '1', description: 'New Account Created', created_on: '', status: 'Read'},
  {title: '0', description: 'New Account Created', created_on: '', status: 'Un-read'},
  {title: '1', description: 'New Merchant Created', created_on: '', status: 'Read'},

];
@Component({
  selector: 'app-notification-details',
  templateUrl: './notification-details.component.html',
  styleUrls: ['./notification-details.component.scss']
})
export class NotificationDetailsComponent {
  displayedColumns: string[] = ['title', 'description', 'created_on', 'status'];
  dataSource = ELEMENT_DATA;
  pageSizeOptions: number[];
  notificationList: any[] = []
  token: any;

  constructor(private service: ServiceService,
    private loader: AppLoaderService,
    private router: Router,
    private generateRouteService: GenerateRouteService,
    private messagingService: MessagingService,
    private toastr: TgsstoasterService,
    private countService: BellCountService
  ) {
    this.pageSizeOptions = constant().app.table.filtering.pageSizeOptions;
  }
  ngOnInit(): void {
    this.token = decodedToken()
    this.getNotificationList() 

  }

  ngAfterViewInit() {
  }


  getNotificationList() {
    this.loader.open()
    this.service.getNotificationList().subscribe((res: any) => {
      this.loader.close();
      if (res.status == true) {
        let msgCount = res?.data.filter((ele: any) => ele?.msg_read == 0)?.length ?? 0;
        this.countService.setBellCount(msgCount)
        this.notificationList = res?.data ?? [];
        // this.dataSource = new MatTableDataSource(this.notificationList)
      } else {
        this.notificationList = res?.data ?? []
        // this.dataSource = new MatTableDataSource(this.notificationList)
        let msgCount = res?.data.map((ele: any) => ele?.msg_read == 0)?.length ?? 0;
        this.countService.setBellCount(msgCount)
        this.toastr.warningToaster(res?.message ?? 'Warning from API');
      }
    }, (err: any) => {
      this.loader.close();
      this.toastr.errorToaster('Something went wrong!');
      this.countService.setBellCount(0)
      // this.dataSource = new MatTableDataSource([]);
    })
  }

  refreshNotifactionList() {
    let msgCount = this.notificationList.filter((ele: any) => ele?.msg_read == 0)?.length ?? 0;
    this.countService.setBellCount(msgCount)
    //this.dataSource = new MatTableDataSource(this.notificationList)
  }

  readSingleMessage(data: any) {
    if (data?.msg_read == 0) {
      let params = {
        notification_id: data?.notification_id,
        type: 'single'
      }
      this.loader.open()
      this.service.readNotification(params).subscribe((res: any) => {
        this.loader.close();
        if (res?.status == true) {
          this.notificationList.map((ele: any) => {
            if (ele?.notification_id == data?.notification_id) {
              ele.msg_read = 1;
              this.refreshNotifactionList()
              //this.routePage(data?.data)
            }
          })
        } else {
          this.toastr.warningToaster(res?.message ?? 'Warning from API!')
        }
      }, (err: any) => {
        this.loader.close();
        this.toastr.errorToaster('Something went wrong!')
      })
    } else {
      //this.routePage(data?.data)
    }

  }

  readAllNotification() {
    const hasSome = this.notificationList.filter((ele: any) => ele?.msg_read == 0)?.length > 0
    if (hasSome) {
      let formData = {
        type: 'all'
      }
      this.loader.open()
      this.service.readNotification(formData).subscribe((res: any) => {
        this.loader.close();
        if (res?.status == true) {
          this.getNotificationList()
        } else {
          this.toastr.warningToaster(res?.message ?? 'Warning from ApI!')
        }
      }, (err: any) => {
        this.loader.close();
        this.toastr.errorToaster('Something went wrong!')
      })
    }

  }

}
