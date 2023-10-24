import { ComponentFixture, TestBed } from '@angular/core/testing';

import {  PayoutTransactionReportComponent } from './payout-transaction-report.component';

describe(' PayoutTransactionReportComponent', () => {
  let component:  PayoutTransactionReportComponent;
  let fixture: ComponentFixture< PayoutTransactionReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [  PayoutTransactionReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent( PayoutTransactionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
