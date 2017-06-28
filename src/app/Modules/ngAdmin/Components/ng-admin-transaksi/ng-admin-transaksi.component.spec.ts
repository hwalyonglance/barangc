import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgAdminTransaksiComponent } from './ng-admin-transaksi.component';

describe('NgadminTransaksiComponent', () => {
	let component: NgAdminTransaksiComponent;
	let fixture: ComponentFixture<NgAdminTransaksiComponent>;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
		declarations: [ NgAdminTransaksiComponent ]
		}).compileComponents();
	}));
	beforeEach(() => {
		fixture = TestBed.createComponent(NgAdminTransaksiComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
