import { Injectable } from '@angular/core';
import { constant, DEFAULT_LANG } from '../helpers/global.helper';
import { decodedToken } from '../helpers/token.helper';
import { get } from "lodash";
import { PORTALTYPE } from '../helpers/enum.helper';
import { BehaviorSubject, Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class CurrentUserService {

    public currentStudentSubject = new BehaviorSubject<string>('');
    public currentStudent = this.currentStudentSubject.asObservable().pipe(distinctUntilChanged());
    public currentSub = new Subject();

    constructor() {
 
    }

    get users() {
        const token = decodedToken();
        return get(token, 'portal') === PORTALTYPE.ADMIN ? this.changeFormat(get(token, 'user')) : [];
    }

    changeFormat(respArray) {

        let arr = respArray?.map(el => { return { name: el.name, photo: el.photo, student_id: el.student_id.toString() } })
        return arr;
    }

   

    getStudentName(id) {
        let details = this.users.find(el => el.student_id == id);
        return details ? details.name : '';
    }

    

    

    unSubStud() {
        this.currentStudentSubject = new BehaviorSubject<string>('');
        this.currentStudent = this.currentStudentSubject.asObservable().pipe(distinctUntilChanged());
    }

}