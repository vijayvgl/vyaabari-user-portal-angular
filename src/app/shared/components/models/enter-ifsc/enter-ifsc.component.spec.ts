import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterIfscComponent } from './enter-ifsc.component';

describe('EnterIfscComponent', () => {
  let component: EnterIfscComponent;
  let fixture: ComponentFixture<EnterIfscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterIfscComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterIfscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
