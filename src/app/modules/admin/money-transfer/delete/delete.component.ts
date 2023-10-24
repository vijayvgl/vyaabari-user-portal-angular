import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styles: [
  ]
})
export class DeleteComponent {
  showCountdown = false;
countdown = 60;
countdownInterval: any;
  otp: string;
  showOtpComponent = true;
  @ViewChild('ngOtpInput', { static: false}) ngOtpInput: any;
  config = {
    allowNumbersOnly: false,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      'width': '50px',
      'height': '50px'
    }
  };

  constructor(public dialogRef: MatDialogRef<DeleteComponent>){}

  closeDialog() {
    this.dialogRef.close(DeleteComponent);
  }

  startCountdown() {
    this.showCountdown = true;
    this.countdown = 60; // Reset countdown to 60 seconds
    this.countdownInterval = setInterval(() => {
      this.countdown--;
      if (this.countdown === 0) {
        clearInterval(this.countdownInterval); // Stop the countdown
        this.showCountdown = false; // Hide the countdown message
      }
    }, 1000); // Update countdown every 1 second
  }

  resend() {
    setTimeout(() => {
      this.startCountdown(); // Start the countdown again
    }, 0);
  }

  ngOnInit(): void {
    this.startCountdown();
  }
}
