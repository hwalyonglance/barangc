import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAdminNguserComponent } from './ngadmin-nguser.component';

describe('NgadminNguserComponent', () => {
  let component: NgAdminNguserComponent;
  let fixture: ComponentFixture<NgAdminNguserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgAdminNguserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAdminNguserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
