import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgadminContainerComponent } from './ngadmin-container.component';

describe('NgadminContainerComponent', () => {
  let component: NgadminContainerComponent;
  let fixture: ComponentFixture<NgadminContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgadminContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgadminContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
