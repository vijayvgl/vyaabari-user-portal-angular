import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilPaymentsComponent } from './bil-payments.component';

describe('BilPaymentsComponent', () => {
  let component: BilPaymentsComponent;
  let fixture: ComponentFixture<BilPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BilPaymentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BilPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
