import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionReportPopupComponent } from './action-report-popup.component';

describe('ActionReportPopupComponent', () => {
  let component: ActionReportPopupComponent;
  let fixture: ComponentFixture<ActionReportPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionReportPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionReportPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
