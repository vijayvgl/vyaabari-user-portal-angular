import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanLeadComponent } from './loan-lead.component';

describe('LoanLeadComponent', () => {
  let component: LoanLeadComponent;
  let fixture: ComponentFixture<LoanLeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanLeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
