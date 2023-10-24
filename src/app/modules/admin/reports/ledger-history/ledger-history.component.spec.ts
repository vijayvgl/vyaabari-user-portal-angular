import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerHistoryComponent } from './ledger-history.component';

describe('LedgerHistoryComponent', () => {
  let component: LedgerHistoryComponent;
  let fixture: ComponentFixture<LedgerHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LedgerHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LedgerHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
