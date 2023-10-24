import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterTpinComponent } from './enter-t-pin.component';

describe('EnterTpinComponent', () => {
  let component: EnterTpinComponent;
  let fixture: ComponentFixture<EnterTpinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterTpinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterTpinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
