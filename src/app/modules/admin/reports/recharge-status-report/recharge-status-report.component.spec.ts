import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeStatusReportComponent } from './recharge-status-report.component';

describe('RechargeStatusReportComponent', () => {
  let component: RechargeStatusReportComponent;
  let fixture: ComponentFixture<RechargeStatusReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechargeStatusReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechargeStatusReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
