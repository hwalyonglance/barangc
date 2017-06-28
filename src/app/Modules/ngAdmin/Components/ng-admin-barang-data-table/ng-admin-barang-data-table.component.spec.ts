import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAdminBarangDataTableComponent } from './ngadmin-barang-data-table.component';

describe('NgadminBarangDataTableComponent', () => {
  let component: NgAdminBarangDataTableComponent;
  let fixture: ComponentFixture<NgAdminBarangDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgAdminBarangDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAdminBarangDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});