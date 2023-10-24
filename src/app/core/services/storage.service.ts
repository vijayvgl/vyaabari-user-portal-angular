import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  saveItem(key, data) {
    if (environment.storageType == 'session') {
      window.sessionStorage.setItem(key, data)
    } else {
      window.localStorage.setItem(key, data)
    }
  }

  getItem(key) {
    if (environment.storageType == 'session') {
      return window.sessionStorage.getItem(key)
    } else {
      return window.localStorage.getItem(key)
    }
  }

  removeItem(key) {

    if (environment.storageType == 'session') {
      window.sessionStorage.removeItem(key)
    } else {
      window.localStorage.removeItem(key)
    }
  }

  clearItem() {
    if (environment.storageType == 'session') {
      window.sessionStorage.clear();
    } else {
      window.localStorage.clear();
    }
  }
}
