import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgadminKategoriComponent } from './ngadmin-kategori.component';

describe('NgadminKategoriComponent', () => {
  let component: NgadminKategoriComponent;
  let fixture: ComponentFixture<NgadminKategoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgadminKategoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgadminKategoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
