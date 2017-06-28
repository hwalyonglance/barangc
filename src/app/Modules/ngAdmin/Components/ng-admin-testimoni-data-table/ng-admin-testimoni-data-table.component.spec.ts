import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgadminTestimoniDataTableComponent } from './ngadmin-testimoni-data-table.component';

describe('NgadminTestimoniDataTableComponent', () => {
  let component: NgadminTestimoniDataTableComponent;
  let fixture: ComponentFixture<NgadminTestimoniDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgadminTestimoniDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgadminTestimoniDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
