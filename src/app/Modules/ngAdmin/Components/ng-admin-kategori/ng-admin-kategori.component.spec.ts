import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAdminKategoriComponent } from './ngadmin-kategori.component';

describe('NgadminKategoriComponent', () => {
  let component: NgAdminKategoriComponent;
  let fixture: ComponentFixture<NgAdminKategoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgAdminKategoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAdminKategoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
