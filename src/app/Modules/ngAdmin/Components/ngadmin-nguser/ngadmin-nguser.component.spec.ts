import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgadminNguserComponent } from './ngadmin-nguser.component';

describe('NgadminNguserComponent', () => {
  let component: NgadminNguserComponent;
  let fixture: ComponentFixture<NgadminNguserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgadminNguserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgadminNguserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
