import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root',
})
export class ToastService {

  constructor() {

  }


  showSuccessToast(message) {
    Swal.fire({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      text: `${message}`,
      icon: 'success',
      customClass: {
        popup: 'Success-popup-class',
      }
    });
  }

  showErrorToast(message) {
    Swal.fire({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      // title: 'Success!',
      text: `${message}`,
      icon: 'error',
      customClass: {
        popup: 'Error-popup-class',
      }
    });
  }

  showWarningToast(message) {
    Swal.fire({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 5000,
      text: `${message}`,
      icon: 'warning',
      customClass: {
        popup: 'warning-popup-class',
      }
    });
  }

  showInfoToast(message) {
    Swal.fire({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 5000,
      text: `${message}`,
      icon: 'info',
      customClass: {
        popup: 'Info-popup-class',
      }
    });
  }





}
