import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgAdminKategoriFormComponent } from './ng-admin-kategori-form.component';
describe('NgAdminKategoriFormComponent', () => {
	let component: NgAdminKategoriFormComponent;
	let fixture: ComponentFixture<NgAdminKategoriFormComponent>;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ NgAdminKategoriFormComponent ]
		}).compileComponents();
	}));
	beforeEach(() => {
		fixture = TestBed.createComponent(NgAdminKategoriFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
