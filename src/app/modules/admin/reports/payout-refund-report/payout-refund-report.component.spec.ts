import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayoutRefundReportComponent } from './payout-refund-report.component';

describe('PayoutRefundReportComponent', () => {
  let component: PayoutRefundReportComponent;
  let fixture: ComponentFixture<PayoutRefundReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayoutRefundReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayoutRefundReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
