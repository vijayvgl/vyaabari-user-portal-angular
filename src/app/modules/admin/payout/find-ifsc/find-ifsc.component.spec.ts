import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindIfscComponent } from './find-ifsc.component';

describe('FindIfscComponent', () => {
  let component: FindIfscComponent;
  let fixture: ComponentFixture<FindIfscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindIfscComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindIfscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
