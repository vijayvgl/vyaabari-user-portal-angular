import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopupInfoComponent } from './topup-info.component';

describe('TopupInfoComponent', () => {
  let component: TopupInfoComponent;
  let fixture: ComponentFixture<TopupInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopupInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopupInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
