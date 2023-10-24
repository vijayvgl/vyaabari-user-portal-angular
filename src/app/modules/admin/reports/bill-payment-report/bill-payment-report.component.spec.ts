import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillPaymentReportComponent } from './bill-payment-report.component';

describe('BillPaymentReportComponent', () => {
  let component: BillPaymentReportComponent;
  let fixture: ComponentFixture<BillPaymentReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillPaymentReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillPaymentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
