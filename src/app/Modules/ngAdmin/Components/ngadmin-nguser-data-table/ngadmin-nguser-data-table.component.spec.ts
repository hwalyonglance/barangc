import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgadminNguserDataTableComponent } from './ngadmin-nguser-data-table.component';

describe('NgadminNguserDataTableComponent', () => {
  let component: NgadminNguserDataTableComponent;
  let fixture: ComponentFixture<NgadminNguserDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgadminNguserDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgadminNguserDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
