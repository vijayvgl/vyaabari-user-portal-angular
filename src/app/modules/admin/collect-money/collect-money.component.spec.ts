import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectMoneyComponent } from './collect-money.component';

describe('CMSComponent', () => {
  let component: CollectMoneyComponent;
  let fixture: ComponentFixture<CollectMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectMoneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
