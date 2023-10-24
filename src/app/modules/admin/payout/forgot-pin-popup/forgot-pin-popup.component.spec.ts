import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPinPopupComponent } from './forgot-pin-popup.component';

describe('ForgotPinPopupComponent', () => {
  let component: ForgotPinPopupComponent;
  let fixture: ComponentFixture<ForgotPinPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPinPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotPinPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
