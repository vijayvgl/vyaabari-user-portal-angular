import { Injectable, NgZone } from '@angular/core';

import { mergeMapTo, mergeMap, distinctUntilChanged } from 'rxjs/operators';
import { take } from 'rxjs/operators';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { GenerateRouteService } from './generate-route.service';
import { decodedToken } from '../helpers/token.helper';
import { get } from 'lodash';
import { CurrentUserService } from './current-user.service';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { BellCountService } from './bell-count.service';

@Injectable({
    providedIn: 'root'
})
export class MessagingService {

    currentMessage = new BehaviorSubject(null);
    removeMessage = new BehaviorSubject(null);
    reloadNotificationList = new BehaviorSubject(null);
    users: any = [];
    constructor(
        private httpClient: HttpClient,
        private ngZone: NgZone,
        private generateRouteService: GenerateRouteService,
        private currentUserService: CurrentUserService,
        private angularFireMessaging: AngularFireMessaging,
    ) {
        this.users = this.currentUserService.users;
        this.permission = this.isSupported() ? 'default' : 'denied';
        this.requestPermissions();
    }


    /**
     * request permission for notification from firebase cloud messaging
     *
     * @param userId userId
     */

    requestPermission(userId) {
        this.angularFireMessaging.requestToken.subscribe(
            (token) => {

                const tokens = decodedToken();
                var type = get(tokens, 'type')
                // this.sendFCMToken(token);
            }, (err) => {
                console.error('Unable to get permission to notify.', err);
            }
        );
    }

    sendFCMToken(token) {
        let obj = { token: token }
        let portal = decodedToken().portal
        return this.httpClient.post(environment.apiURL + 'userupdateFcmToken', obj)
            .toPromise()
            .then(this.handleData)
            .catch(this.handleError);


    }


    private handleData(res: any) {
        const body = res;
        return body || {};
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }

    /**
     * hook method when new notification received in foreground
     */
    receiveMessage() {
        this.angularFireMessaging.messages.subscribe(
            (payload) => {

                // this.countService.getForeGroundCount()
                const notifyMsg = payload['data'];
                if (notifyMsg) {
                    notifyMsg.title = notifyMsg.title ? notifyMsg.title : '';
                    notifyMsg.data = notifyMsg.data ? JSON.parse(notifyMsg.data) : '';
                    // if (notifyMsg.page! = 'greeting_create') {
                    this.notify(notifyMsg.title, {
                        body: notifyMsg.body,
                        icon: 'favicon-32x32.png',
                        page: notifyMsg.page,
                        data: notifyMsg.data,
                        portal: notifyMsg.portal
                    });
                    this.currentMessage.next(notifyMsg);
                    // }
                } else {
                    if (notifyMsg.page! = 'greeting_create') {
                        let trackingNotify = payload['notification']
                        this.notify(trackingNotify.title, { body: trackingNotify.body, icon: 'favicon-32x32.png' })
                    }
                }
            });
    }



    requestPermissions(): void {
        let self = this;
        if ('Notification' in window) {
            Notification.requestPermission(function (status) {
                return self.permission = status;
            });
        }
    }

    public permission: Permission;

    public isSupported(): boolean {
        return 'Notification' in window;
    }

    notify(title, options) {
        this.generateNotification(title, options);
    }

    generateNotification(title, options): void {
        let self = this;
        let notify = self.create(title, options).subscribe();
    }
    deleteToken() {
        this.angularFireMessaging.getToken
            .pipe(mergeMap(token => this.angularFireMessaging.deleteToken(token)))
            .subscribe((token) => { console.log('Token deleted!'); });
    }
    create(title: string, options?: PushNotification): any {
        let self = this;
        return new Observable((obs) => {
            if (!('Notification' in window)) {
                obs.complete();
            }
            if (self.permission !== 'granted') {
                obs.complete();
            }
            let _notify = new Notification(title, options);
            _notify.onshow = (e) => { return obs.next({ notification: _notify, event: e }); };
            _notify.onclick = (e) => {
                this.ngZone.run(() => {
                    let parsedData = (options['data']);
                    this.generateRouteService.navigateRouteMessage(decodedToken().portal, options['data'], '')

                });
            };
            _notify.onerror = (e) => { return obs.error({ notification: _notify, event: e }); };
            _notify.onclose = function () { return obs.complete(); };
        });
    }

}

export declare type Permission = 'denied' | 'granted' | 'default';

export interface PushNotification {
    body?: string;
    icon?: string;
    tag?: string;
    data?: any;
    renotify?: boolean;
    silent?: boolean;
    sound?: string;
    noscreen?: boolean;
    sticky?: boolean;
    dir?: 'auto' | 'ltr' | 'rtl';
    lang?: string;
    vibrate?: number[];
}