import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgadminComponent } from './ngadmin.component';

describe('NgadminComponent', () => {
  let component: NgadminComponent;
  let fixture: ComponentFixture<NgadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
