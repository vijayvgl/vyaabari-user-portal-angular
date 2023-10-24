import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpiQrComponent } from './upi-qr.component';

describe('UpiQrComponent', () => {
  let component: UpiQrComponent;
  let fixture: ComponentFixture<UpiQrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpiQrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpiQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
