import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAuthComponent } from './ng-auth.component';

describe('NgAuthComponent', () => {
  let component: NgAuthComponent;
  let fixture: ComponentFixture<NgAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
