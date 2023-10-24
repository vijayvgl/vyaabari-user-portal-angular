import { HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { decodedToken } from '../helpers/token.helper';
import { ApiService } from './api.service';
import { checkNull } from '../custom-validations/return-functions';

@Injectable({
  providedIn: 'root'
})
export class BellCountService {
  private bellCountSubject: BehaviorSubject<any> = new BehaviorSubject(0);
  clickedBell: EventEmitter<any> = new EventEmitter()
  constructor(
    private adminApi: ApiService,
    private empApi: ApiService,
    private router: Router

  ) { }


  setBellCount(number: any) {
    if (!Number.isNaN(number)) {
      this.bellCountSubject.next(number)
    } else {
      this.bellCountSubject.next(0)
    }
  }

  getBellCount() {
    return this.bellCountSubject.pipe(map(ele => ele))
  }
  private opened: boolean = false
  hitBell() {
    this.opened = this.opened == false ? true : false;
    this.clickedBell.emit(this.opened)
  }

  notificationForAdminPanel(): Observable<any> {
    return this.adminApi.get(`notification/list`)
  }

  notificationForEmployee(): Observable<any> {
    return this.empApi.get(`notification/list`)
  }

  readNotification(dto: any, portal: any): Observable<any> {
    let params = new HttpParams()
    for (let data in dto) {
      if (checkNull(dto[data])) {
        params = params.append(data, dto[data])
      }
    }
    if (portal == 'admin') {
      return this.adminApi.post(`readNotification`, params)
    } else {
      return this.empApi.post(`readNotification`, params)
    }
  }



  navigateByNoti(data: any) {
    let path = '';
    let querry: any = {}
    switch (data?.page) {
      case 'Mobile Register': {
        path = `customer-details/view/${data?.data?.customer_id}`
      }
        break
      default: {
        path = 'employee/notification/list'
      }
        break
    }
    this.router.navigate([path], { queryParams: querry })
  }

  // General Function Used for notification

  notificationList: any[] = [];
  refreshNotifactionList() {
    let msgCount =
      this.notificationList.filter((ele: any) => ele?.msg_read == 0)
        ?.length ?? 0;
    this.setBellCount(msgCount);
  }

  randomIdRead(random_id) {
    let portal = decodedToken().portal
    if (portal == 'admin') {
      this.notificationForAdminPanel().subscribe(async (res: any) => {
        if (res.keyword == 'success') {
          this.notificationList =
            (await res?.data.filter(
              (ele: any) => ele?.msg_read == 0
            )) ?? [];
          this.refreshNotifactionList();
          let notification_id = await this.notificationList.find(
            (ele: any) => ele?.data?.random_id == random_id
          )?.notification_id;
          let dto = {
            notification_id: notification_id,
            type: 'single',
          };
          if (checkNull(notification_id)) {
            this.readNotification(dto, 'admin').subscribe((res: any) => {
              if (res?.keyword == 'success') {
                this.notificationList.map(async (ele: any) => {
                  if (ele?.notification_id == notification_id) {
                    ele.msg_read = 1;
                    await this.refreshNotifactionList();
                  }
                });
              }
            });
          }
        }
      });
    } else {
      this.notificationForEmployee().subscribe(async (res: any) => {
        if (res.keyword == 'success') {
          this.notificationList =
            (await res?.data.filter(
              (ele: any) => ele?.msg_read == 0
            )) ?? [];
          this.refreshNotifactionList();
          let notification_id = await this.notificationList.find(
            (ele: any) => ele?.data?.random_id == random_id
          )?.notification_id;
          let dto = {
            notification_id: notification_id,
            type: 'single',
          };
          if (checkNull(notification_id)) {
            this.readNotification(dto, 'employee').subscribe((res: any) => {
              if (res?.keyword == 'success') {
                this.notificationList.map(async (ele: any) => {
                  if (ele?.notification_id == notification_id) {
                    ele.msg_read = 1;
                    await this.refreshNotifactionList();
                  }
                });
              }
            });
          }
        }
      });
    }



  }


  getForeGroundCount() {
    let portal = decodedToken().portal
    if (portal == 'admin') {
      this.notificationForAdminPanel().subscribe(
        (res: any) => {
          if (res.keyword == 'success') {
            this.notificationList =
              res?.data.filter((ele: any) => ele?.msg_read == 0) ??
              [];
            this.refreshNotifactionList();
          } else {
            this.notificationList =
              res?.data.filter((ele: any) => ele?.msg_read == 0) ??
              [];
            this.refreshNotifactionList();
          }
        },
        (err: any) => {
          this.notificationList = [];
          this.refreshNotifactionList();
        }
      );
    } else {
      this.notificationForEmployee().subscribe(
        (res: any) => {
          if (res.keyword == 'success') {
            this.notificationList =
              res?.data.filter((ele: any) => ele?.msg_read == 0) ??
              [];
            this.refreshNotifactionList();
          } else {
            this.notificationList =
              res?.data.filter((ele: any) => ele?.msg_read == 0) ??
              [];
            this.refreshNotifactionList();
          }
        },
        (err: any) => {
          this.notificationList = [];
          this.refreshNotifactionList();
        }
      );
    }

  }


}
