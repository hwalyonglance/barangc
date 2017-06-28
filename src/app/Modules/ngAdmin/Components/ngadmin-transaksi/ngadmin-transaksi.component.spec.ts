import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgadminTransaksiComponent } from './ngadmin-transaksi.component';

describe('NgadminTransaksiComponent', () => {
  let component: NgadminTransaksiComponent;
  let fixture: ComponentFixture<NgadminTransaksiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgadminTransaksiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgadminTransaksiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
