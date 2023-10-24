import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiaryManageComponent } from './beneficiary-manage.component';

describe('BeneficiaryManageComponent', () => {
  let component: BeneficiaryManageComponent;
  let fixture: ComponentFixture<BeneficiaryManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficiaryManageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeneficiaryManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
