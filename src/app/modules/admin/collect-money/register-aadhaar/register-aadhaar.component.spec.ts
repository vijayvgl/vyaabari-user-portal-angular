import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAadhaarComponent } from './register-aadhaar.component';

describe('RegisterAadhaarComponent', () => {
  let component: RegisterAadhaarComponent;
  let fixture: ComponentFixture<RegisterAadhaarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterAadhaarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterAadhaarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
