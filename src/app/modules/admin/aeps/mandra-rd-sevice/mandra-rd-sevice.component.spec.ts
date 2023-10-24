import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandraRdSeviceComponent } from './mandra-rd-sevice.component';

describe('MandraRdSeviceComponent', () => {
  let component: MandraRdSeviceComponent;
  let fixture: ComponentFixture<MandraRdSeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MandraRdSeviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MandraRdSeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
