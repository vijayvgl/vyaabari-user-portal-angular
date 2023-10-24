import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesPermissionsViewComponent } from './roles-permissions-view.component';

describe('RolesPermissionsViewComponent', () => {
  let component: RolesPermissionsViewComponent;
  let fixture: ComponentFixture<RolesPermissionsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolesPermissionsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolesPermissionsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
