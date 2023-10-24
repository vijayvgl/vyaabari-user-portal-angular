import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotpinComponent } from './forgot-pin.component';

describe('ForgotpinComponent', () => {
  let component: ForgotpinComponent;
  let fixture: ComponentFixture<ForgotpinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotpinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotpinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
