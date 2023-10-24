import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidthdrawHistoryComponent } from './widthdraw-history.component';

describe('WidthdrawHistoryComponent', () => {
  let component: WidthdrawHistoryComponent;
  let fixture: ComponentFixture<WidthdrawHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidthdrawHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidthdrawHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
