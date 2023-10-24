import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AepsServicesComponent } from './aeps-services.component';

describe('AepsServicesComponent', () => {
  let component: AepsServicesComponent;
  let fixture: ComponentFixture<AepsServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AepsServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AepsServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
