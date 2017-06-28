import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAdminNavComponent } from './ngadmin-nav.component';

describe('NgadminNavComponent', () => {
  let component: NgAdminNavComponent;
  let fixture: ComponentFixture<NgAdminNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgAdminNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAdminNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});