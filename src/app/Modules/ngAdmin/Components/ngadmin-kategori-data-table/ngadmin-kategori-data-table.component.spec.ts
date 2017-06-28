import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgadminKategoriDataTableComponent } from './ngadmin-kategori-data-table.component';

describe('NgadminKategoriDataTableComponent', () => {
  let component: NgadminKategoriDataTableComponent;
  let fixture: ComponentFixture<NgadminKategoriDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgadminKategoriDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgadminKategoriDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
