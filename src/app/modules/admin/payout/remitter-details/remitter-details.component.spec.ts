import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemitterDetailsComponent } from './remitter-details.component';

describe('RemitterDetailsComponent', () => {
  let component: RemitterDetailsComponent;
  let fixture: ComponentFixture<RemitterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemitterDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemitterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
