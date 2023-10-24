import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopupClaimComponent } from './topup-claim.component';

describe('TopupClaimComponent', () => {
  let component: TopupClaimComponent;
  let fixture: ComponentFixture<TopupClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopupClaimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopupClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
