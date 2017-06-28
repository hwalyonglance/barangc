import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgadminNguserFormComponent } from './ngadmin-nguser-form.component';

describe('NgadminNguserFormComponent', () => {
  let component: NgadminNguserFormComponent;
  let fixture: ComponentFixture<NgadminNguserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgadminNguserFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgadminNguserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
