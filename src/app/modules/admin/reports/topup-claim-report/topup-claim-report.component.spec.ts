import { ComponentFixture, TestBed } from '@angular/core/testing';

import {  TopUpClaimReportComponent } from './topup-claim-report.component';

describe(' TopUpClaimReportComponent', () => {
  let component:  TopUpClaimReportComponent;
  let fixture: ComponentFixture< TopUpClaimReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [  TopUpClaimReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent( TopUpClaimReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
