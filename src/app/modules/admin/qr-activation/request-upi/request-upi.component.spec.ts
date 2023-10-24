import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestUpiComponent } from './request-upi.component';

describe('RequestUpiComponent', () => {
  let component: RequestUpiComponent;
  let fixture: ComponentFixture<RequestUpiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestUpiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestUpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
