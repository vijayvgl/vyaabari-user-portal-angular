import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidthdrawLimitComponent } from './widthdraw-limit.component';

describe('WidthdrawLimitComponent', () => {
  let component: WidthdrawLimitComponent;
  let fixture: ComponentFixture<WidthdrawLimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidthdrawLimitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidthdrawLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
