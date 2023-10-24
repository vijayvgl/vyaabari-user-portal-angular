import { ComponentFixture, TestBed } from '@angular/core/testing';

import {  SettlementStatusReportComponent } from './settlement-status-report.component';

describe(' SettlementStatusReportComponent', () => {
  let component:  SettlementStatusReportComponent;
  let fixture: ComponentFixture< SettlementStatusReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [  SettlementStatusReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent( SettlementStatusReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
