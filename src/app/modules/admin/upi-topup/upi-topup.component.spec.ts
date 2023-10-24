import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpiTopupComponent } from './upi-topup.component';

describe('UpiTopupComponent', () => {
  let component: UpiTopupComponent;
  let fixture: ComponentFixture<UpiTopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpiTopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpiTopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
