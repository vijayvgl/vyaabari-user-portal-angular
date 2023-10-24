import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpOtpVerifyComponent } from './signup-otp-verify.component';

describe('SignUpSignUpOtpVerifyComponent', () => {
  let component: SignUpOtpVerifyComponent;
  let fixture: ComponentFixture<SignUpOtpVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpOtpVerifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpOtpVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
