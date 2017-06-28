import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAdminNguserDataTableComponent } from './ngadmin-nguser-data-table.component';

describe('NgadminNguserDataTableComponent', () => {
  let component: NgAdminNguserDataTableComponent;
  let fixture: ComponentFixture<NgAdminNguserDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgAdminNguserDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAdminNguserDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
