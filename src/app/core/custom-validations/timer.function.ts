import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class OtpTimer {


    private timer: BehaviorSubject<any> = new BehaviorSubject('00.60')
    timer$: Observable<any> = this.timer.asObservable()

    constructor() {

    }



    startTimer() {
        let sec = 60;
        setInterval(() => {
            if (sec != 0) {
                sec = sec - 1
                let value = String(sec).length == 1 ? `00.0${sec}` : `00.${sec}`
                this.timer.next(value)
            }
        }, 1000)
    }


    endTimer() {
        this.timer.next('00.00')
    }

}