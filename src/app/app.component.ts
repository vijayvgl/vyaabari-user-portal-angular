import { Component, HostListener, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { StorageService } from './core/services/storage.service';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    userActivity;
    userInactive: Subject<any> = new Subject();
    subscription: Subscription;
    constructor(

    ) {
 
    }


    ngOnInit(): void {
    }





    setTimeout() {
        this.userActivity = setTimeout(() => this.userInactive.next(undefined), 3000);
    }


}
