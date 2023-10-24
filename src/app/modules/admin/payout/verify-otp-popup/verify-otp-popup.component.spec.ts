import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyOtpPopupComponent } from './verify-otp-popup.component';

describe('VerifyOtpPopupComponent', () => {
  let component: VerifyOtpPopupComponent;
  let fixture: ComponentFixture<VerifyOtpPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyOtpPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyOtpPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
