import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAdminSidenavComponent } from './ngadmin-sidenav.component';

describe('NgadminSidenavComponent', () => {
  let component: NgAdminSidenavComponent;
  let fixture: ComponentFixture<NgAdminSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgAdminSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAdminSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
