import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgAdminTestimoniDataTableComponent } from './ng-admin-testimoni-data-table.component';
describe('NgAdminTestimoniDataTableComponent', () => {
	let component: NgAdminTestimoniDataTableComponent;
	let fixture: ComponentFixture<NgAdminTestimoniDataTableComponent>;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ NgAdminTestimoniDataTableComponent ]
		}).compileComponents();
	}));
	beforeEach(() => {
		fixture = TestBed.createComponent(NgAdminTestimoniDataTableComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
