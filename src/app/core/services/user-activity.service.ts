import { HostListener, Injectable } from "@angular/core";
import { UserIdleService } from "angular-user-idle";
import { Subject } from "rxjs";
import { decodedToken, getToken } from "../helpers/token.helper";
import { PopupInterface, PopUpResult, PopupService } from "./popup.service";
import { MatDialog } from '@angular/material/dialog';
import { UserService } from "./user.service";

@Injectable({
    providedIn: 'root'
})


export class UserActivityService {


    @HostListener('window:mousemove') refreshUserState() {


    }
    userActivity;
    public isEnableIdleTime: any;
    isPopEnable: boolean = false;
    userInactive: Subject<any> = new Subject();
    constructor(
        public userIdle: UserIdleService,
        private popup: PopupService,
        private dialog: MatDialog,
        private userService: UserService) {
    }

    ngOnInit(): void {

    }

    initiate() {
        this.setIdeleConfig(120, 1200, 120);
        this.startWatching();
        this.idleTimeCount();
        this.idleTimeOut();
        this.refres();
    }

    setTimeout() {
        this.userActivity = setTimeout(() => this.userInactive.next(undefined), 5000);
    }

    setIdeleConfig(ping?: number, idle?: number, timeout?: number, idleSensitivity?: number) {
        this.userIdle.setConfigValues({ ping: ping, idle: idle, timeout: timeout });
    }

    //Start watching for user inactivity.
    startWatching() {
        this.userIdle.startWatching();
    }

    restart() {
        this.userIdle.resetTimer();
    }

    idleTimeCount() {
        // Start watching when user idle is starting.
        this.userIdle.onTimerStart().subscribe(count => {
            this.isEnableIdleTime = count;
            if (!this.isPopEnable) {
                this.isPopEnable = true;
                this.sessionTimeOutPopUp();
            }

        });
    }


    idleTimeOut() {
        // Start watch when time is up.
        this.userIdle.onTimeout().subscribe(() => {

            this.stopWatching();
            this.isEnableIdleTime = undefined;
            this.isPopEnable = false;
            this.userService.logout();
            this.dialog.closeAll();
        });
    }

    stop() {
        this.userIdle.stopTimer();
    }

    stopWatching() {
        this.userIdle.stopWatching();
    }

    refres() {
        this.userIdle.ping$.subscribe(() => {

        });
    }

    sessionTimeOutPopUp() {
        let data: any = {
            title: 'Session Time Out',
            confirm_label: 'Ok',
            showCancelButton: true,
            type: 'info'
        }
        this.popup.show(data).afterClosed().subscribe({
            next: (res: PopUpResult) => {
                if (res == 'confirmed') {
                    this.stopWatching();
                    this.userService.logout();
                    this.isEnableIdleTime = undefined;
                    this.isPopEnable = false;
                } else {
                    this.restart();
                }
            }
        })
    }

}