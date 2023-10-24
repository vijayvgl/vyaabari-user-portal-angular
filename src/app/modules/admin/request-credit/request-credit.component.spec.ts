import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestCreditComponent } from './request-credit.component';

describe('RequestCreditComponent', () => {
  let component: RequestCreditComponent;
  let fixture: ComponentFixture<RequestCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestCreditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
