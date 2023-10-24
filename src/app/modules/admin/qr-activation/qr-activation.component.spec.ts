import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrActivationComponent } from './qr-activation.component';

describe('QrActivationComponent', () => {
  let component: QrActivationComponent;
  let fixture: ComponentFixture<QrActivationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrActivationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
