import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAdminNguserFormComponent } from './ngadmin-nguser-form.component';

describe('NgadminNguserFormComponent', () => {
  let component: NgAdminNguserFormComponent;
  let fixture: ComponentFixture<NgAdminNguserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgAdminNguserFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAdminNguserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
