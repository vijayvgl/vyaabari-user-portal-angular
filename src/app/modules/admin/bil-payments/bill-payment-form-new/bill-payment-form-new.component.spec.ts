import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillPaymentFormNewComponent } from './bill-payment-form-new.component';

describe('BillPaymentFormNewComponent', () => {
  let component: BillPaymentFormNewComponent;
  let fixture: ComponentFixture<BillPaymentFormNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillPaymentFormNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillPaymentFormNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
