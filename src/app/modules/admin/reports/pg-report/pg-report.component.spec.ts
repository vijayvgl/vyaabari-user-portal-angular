import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PGReportComponent } from './pg-report.component';

describe('PGReportComponent', () => {
  let component: PGReportComponent;
  let fixture: ComponentFixture<PGReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PGReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PGReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
