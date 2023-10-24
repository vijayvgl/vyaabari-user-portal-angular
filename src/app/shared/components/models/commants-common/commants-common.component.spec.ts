import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommantsCommonComponent } from './commants-common.component';

describe('CommantsCommonComponent', () => {
  let component: CommantsCommonComponent;
  let fixture: ComponentFixture<CommantsCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommantsCommonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommantsCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
