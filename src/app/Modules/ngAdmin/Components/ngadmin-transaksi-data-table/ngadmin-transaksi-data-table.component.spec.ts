import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgadminTransaksiDataTableComponent } from './ngadmin-transaksi-data-table.component';

describe('NgadminTransaksiDataTableComponent', () => {
  let component: NgadminTransaksiDataTableComponent;
  let fixture: ComponentFixture<NgadminTransaksiDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgadminTransaksiDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgadminTransaksiDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
