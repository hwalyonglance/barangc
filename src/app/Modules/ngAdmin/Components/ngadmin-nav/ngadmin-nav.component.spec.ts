import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgadminNavComponent } from './ngadmin-nav.component';

describe('NgadminNavComponent', () => {
  let component: NgadminNavComponent;
  let fixture: ComponentFixture<NgadminNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgadminNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgadminNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
