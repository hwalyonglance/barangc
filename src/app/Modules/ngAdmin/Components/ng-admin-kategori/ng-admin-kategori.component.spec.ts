import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgAdminKategoriComponent } from './ng-admin-kategori.component';
describe('NgAdminKategoriComponent', () => {
	let component: NgAdminKategoriComponent;
	let fixture: ComponentFixture<NgAdminKategoriComponent>;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ NgAdminKategoriComponent ]
		}).compileComponents();
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
