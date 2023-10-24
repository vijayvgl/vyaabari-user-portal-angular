import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FancyBoxService {

  private imagesBehaviourSubject = new BehaviorSubject<string[]>([])

  constructor() { }


  setImages(value: any[]) {
    this.imagesBehaviourSubject.next(value)
  }

  getImages() {
    return this.imagesBehaviourSubject.asObservable()
  }
}
