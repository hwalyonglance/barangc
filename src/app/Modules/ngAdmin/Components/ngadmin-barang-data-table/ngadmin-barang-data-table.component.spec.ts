import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgadminBarangDataTableComponent } from './ngadmin-barang-data-table.component';

describe('NgadminBarangDataTableComponent', () => {
  let component: NgadminBarangDataTableComponent;
  let fixture: ComponentFixture<NgadminBarangDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgadminBarangDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgadminBarangDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
