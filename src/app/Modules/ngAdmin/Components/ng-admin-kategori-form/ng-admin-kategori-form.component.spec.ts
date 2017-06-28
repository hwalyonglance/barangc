import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgAdminKategoriFormComponent } from './ng-admin-kategori-form.component';
describe('NgAdminKategoriFormComponent', () => {
	let component: NgadminKategoriFormComponent;
	let fixture: ComponentFixture<NgadminKategoriFormComponent>;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ NgadminKategoriFormComponent ]
		}).compileComponents();
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
