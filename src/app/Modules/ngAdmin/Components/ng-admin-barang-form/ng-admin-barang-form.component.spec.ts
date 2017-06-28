import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgAdminBarangFormComponent } from './ng-admin-barang-form.component';
describe('NgAdminBarangFormComponent', () => {
	let component: NgAdminBarangFormComponent;
	let fixture: ComponentFixture<NgAdminBarangFormComponent>;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NgAdminBarangFormComponent]
		}).compileComponents();
	}));
	beforeEach(() => {
		fixture = TestBed.createComponent(NgAdminBarangFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
