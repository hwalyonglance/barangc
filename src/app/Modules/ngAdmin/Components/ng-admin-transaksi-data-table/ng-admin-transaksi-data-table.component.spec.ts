import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAdminTransaksiDataTableComponent } from './ngadmin-transaksi-data-table.component';

describe('NgadminTransaksiDataTableComponent', () => {
  let component: NgAdminTransaksiDataTableComponent;
  let fixture: ComponentFixture<NgAdminTransaksiDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgAdminTransaksiDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAdminTransaksiDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
