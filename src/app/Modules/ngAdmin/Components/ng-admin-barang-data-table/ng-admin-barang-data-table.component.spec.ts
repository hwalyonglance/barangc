import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgAdminBarangDataTableComponent } from './ng-admin-barang-data-table.component';
describe('NgAdminBarangDataTableComponent', () => {
	let component: NgAdminBarangDataTableComponent;
	let fixture: ComponentFixture<NgAdminBarangDataTableComponent>;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NgAdminBarangDataTableComponent]
		}).compileComponents();
	}));
	beforeEach(() => {
		fixture = TestBed.createComponent(NgAdminBarangDataTableComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
