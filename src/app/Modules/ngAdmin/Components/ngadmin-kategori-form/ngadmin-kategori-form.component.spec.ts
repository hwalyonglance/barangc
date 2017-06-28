import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgadminKategoriFormComponent } from './ngadmin-kategori-form.component';

describe('NgadminKategoriFormComponent', () => {
  let component: NgadminKategoriFormComponent;
  let fixture: ComponentFixture<NgadminKategoriFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgadminKategoriFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgadminKategoriFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
