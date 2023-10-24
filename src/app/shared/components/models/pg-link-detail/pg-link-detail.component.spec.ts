import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgLinkDetailComponent } from './pg-link-detail.component';

describe('PgLinkDetailComponent', () => {
  let component: PgLinkDetailComponent;
  let fixture: ComponentFixture<PgLinkDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgLinkDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgLinkDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
