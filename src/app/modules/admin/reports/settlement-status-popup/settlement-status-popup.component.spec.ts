import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettlementStatusPopupComponent } from './settlement-status-popup.component';

describe('SettlementStatusPopupComponent', () => {
  let component: SettlementStatusPopupComponent;
  let fixture: ComponentFixture<SettlementStatusPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettlementStatusPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettlementStatusPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
