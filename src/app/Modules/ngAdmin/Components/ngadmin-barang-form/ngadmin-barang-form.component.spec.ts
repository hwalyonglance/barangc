import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgadminBarangFormComponent } from './ngadmin-barang-form.component';

describe('NgadminBarangFormComponent', () => {
  let component: NgadminBarangFormComponent;
  let fixture: ComponentFixture<NgadminBarangFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgadminBarangFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgadminBarangFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
