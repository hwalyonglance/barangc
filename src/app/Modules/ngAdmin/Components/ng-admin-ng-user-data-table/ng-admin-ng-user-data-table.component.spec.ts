import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgAdminNgUserDataTableComponent } from './ng-admin-ng-user-data-table.component';
describe('NgAdminNgUserDataTableComponent', () => {
	let component: NgAdminNguserDataTableComponent;
	let fixture: ComponentFixture<NgAdminNguserDataTableComponent>;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
		declarations: [ NgAdminNguserDataTableComponent ]
		}).compileComponents();
	}));
	beforeEach(() => {
		fixture = TestBed.createComponent(NgAdminNguserDataTableComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
