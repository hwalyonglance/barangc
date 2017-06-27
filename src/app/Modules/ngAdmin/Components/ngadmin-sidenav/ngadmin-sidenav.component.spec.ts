import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgadminSidenavComponent } from './ngadmin-sidenav.component';

describe('NgadminSidenavComponent', () => {
  let component: NgadminSidenavComponent;
  let fixture: ComponentFixture<NgadminSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgadminSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgadminSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
