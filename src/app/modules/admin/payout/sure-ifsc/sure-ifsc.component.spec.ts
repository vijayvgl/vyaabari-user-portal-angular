import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SureIfscComponent } from './sure-ifsc.component';

describe('SureIfscComponent', () => {
  let component: SureIfscComponent;
  let fixture: ComponentFixture<SureIfscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SureIfscComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SureIfscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
