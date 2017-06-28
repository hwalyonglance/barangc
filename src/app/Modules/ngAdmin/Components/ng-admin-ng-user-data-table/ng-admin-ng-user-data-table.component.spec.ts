import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgAdminNgUserDataTableComponent } from './ng-admin-ng-user-data-table.component';
describe('NgAdminNgUserDataTableComponent', () => {
	let component: NgAdminNgUserDataTableComponent;
	let fixture: ComponentFixture<NgAdminNgUserDataTableComponent>;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
		declarations: [ NgAdminNgUserDataTableComponent ]
		}).compileComponents();
	}));
	beforeEach(() => {
		fixture = TestBed.createComponent(NgAdminNgUserDataTableComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
