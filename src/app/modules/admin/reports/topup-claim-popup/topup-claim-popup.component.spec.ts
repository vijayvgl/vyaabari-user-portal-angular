import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopupClaimPopupComponent } from './topup-claim-popup.component';

describe('TopupClaimPopupComponent', () => {
  let component: TopupClaimPopupComponent;
  let fixture: ComponentFixture<TopupClaimPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopupClaimPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopupClaimPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
