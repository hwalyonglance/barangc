import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgAdminKategoriDataTableComponent } from './ng-admin-kategori-data-table.component';
describe('NgAdminKategoriDataTableComponent', () => {
	let component: NgAdminKategoriDataTableComponent;
	let fixture: ComponentFixture<NgAdminKategoriDataTableComponent>;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ NgAdminKategoriDataTableComponent ]
		}).compileComponents();
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
