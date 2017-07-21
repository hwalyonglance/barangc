import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgUserComponent } from './ng-user.component';

describe('NgUserComponent', () => {
  let component: NgUserComponent;
  let fixture: ComponentFixture<NgUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
