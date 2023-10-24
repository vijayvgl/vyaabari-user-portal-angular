import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CMSComponent } from './cms.component';

describe('CMSComponent', () => {
  let component: CMSComponent;
  let fixture: ComponentFixture<CMSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CMSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
