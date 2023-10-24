import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'app/core/services/storage.service';
import { TgsstoasterService } from 'app/core/services/tgsstoaster.service';
import { environment } from 'environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SessionUserService {

  constructor(
    private router: Router,
    private toaster: TgsstoasterService,
    private storage: StorageService
  ) { }

  setSessionUserID(username) {

  }

  setLoginDetails(res) {
    this.storage.saveItem("token_id", res?.data?.token_id);
    this.storage.saveItem("session_id", res?.data?.session_id);
    this.storage.saveItem("sid", res?.data?.sid);
  }

  setErrorDetails(err) {
    this.storage.saveItem("token_id", err?.error?.data.token_id);
    this.storage.saveItem("session_id", err?.error?.data.session_id);
  }

  // Logs out when the user clicks the logout button
  logout() {
    this.storage.removeItem("token_id");
    this.storage.removeItem("session_id");
    this.storage.removeItem("sid");
    this.storage.removeItem("logged_user_id");
    this.storage.removeItem("retailer-source")

    this.router.navigate(['/'])

    this.toaster.successToaster('Signed out successfully.')
  }

  // Logs out when the router have no permission for the particular page
  logoutRouter() {
    this.storage.removeItem("token_id");
    this.storage.removeItem("session_id");
    this.storage.removeItem("sid");
    this.storage.removeItem("logged_user_id");
    this.storage.removeItem("retailer-source")
    this.router.navigate(['/'])
  }
}






export function getMachineId() {
  return sessionStorage.getItem('machineId')
}

export function getIPAddress() {
  return sessionStorage.getItem('current_ip')
}

export function tokenId() {
  return sessionStorage.getItem('token_id')
}

export function sessionId() {
  return sessionStorage.getItem('session_id')
}