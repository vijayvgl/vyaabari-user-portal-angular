import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationCommonComponent } from './pagination-common.component';

describe('PaginationCommonComponent', () => {
  let component: PaginationCommonComponent;
  let fixture: ComponentFixture<PaginationCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationCommonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
