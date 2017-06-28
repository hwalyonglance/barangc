import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgAdminNgUserComponent } from './ng-admin-ng-user.component';
describe('NgAdminNgUserComponent', () => {
	let component: NgAdminNgUserComponent;
	let fixture: ComponentFixture<NgAdminNgUserComponent>;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ NgAdminNgUserComponent ]
		}).compileComponents();
	}));
	beforeEach(() => {
		fixture = TestBed.createComponent(NgAdminNgUserComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
