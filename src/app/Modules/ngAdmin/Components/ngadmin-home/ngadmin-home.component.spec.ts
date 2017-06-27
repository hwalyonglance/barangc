import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgadminHomeComponent } from './ngadmin-home.component';

describe('NgadminHomeComponent', () => {
  let component: NgadminHomeComponent;
  let fixture: ComponentFixture<NgadminHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgadminHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgadminHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
