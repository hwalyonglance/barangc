import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgadminTestimoniComponent } from './ngadmin-testimoni.component';

describe('NgadminTestimoniComponent', () => {
  let component: NgadminTestimoniComponent;
  let fixture: ComponentFixture<NgadminTestimoniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgadminTestimoniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgadminTestimoniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
