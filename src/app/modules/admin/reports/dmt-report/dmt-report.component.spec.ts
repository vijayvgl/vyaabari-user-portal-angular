import { ComponentFixture, TestBed } from '@angular/core/testing';

import {  DMTReportComponent } from './dmt-report.component';

describe(' DMTReportComponent', () => {
  let component:  DMTReportComponent;
  let fixture: ComponentFixture< DMTReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [  DMTReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent( DMTReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
