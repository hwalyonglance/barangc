import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgAdminBarangComponent } from './ng-admin-barang.component';
describe('NgAdminBarangComponent', () => {
	let component: NgAdminBarangComponent;
	let fixture: ComponentFixture<NgAdminBarangComponent>;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NgAdminBarangComponent]
		}).compileComponents();
	}));
	beforeEach(() => {
		fixture = TestBed.createComponent(NgAdminBarangComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
