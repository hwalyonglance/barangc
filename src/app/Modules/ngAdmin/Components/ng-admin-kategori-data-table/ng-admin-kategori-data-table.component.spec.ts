import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAdminKategoriDataTableComponent } from './ngadmin-kategori-data-table.component';

describe('NgadminKategoriDataTableComponent', () => {
  let component: NgAdminKategoriDataTableComponent;
  let fixture: ComponentFixture<NgAdminKategoriDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgAdminKategoriDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAdminKategoriDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
