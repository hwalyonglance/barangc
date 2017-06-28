import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgadminBarangComponent } from './ngadmin-barang.component';

describe('NgadminBarangComponent', () => {
  let component: NgadminBarangComponent;
  let fixture: ComponentFixture<NgadminBarangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgadminBarangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgadminBarangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
