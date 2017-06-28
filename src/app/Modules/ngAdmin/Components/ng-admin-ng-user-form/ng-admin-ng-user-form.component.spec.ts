import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgAdminNgUserFormComponent } from './ng-admin-ng-user-form.component';
describe('NgAdminNgUserFormComponent', () => {
	let component: NgAdminNgUserFormComponent;
	let fixture: ComponentFixture<NgAdminNgUserFormComponent>;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ NgAdminNgUserFormComponent ]
		}).compileComponents();
	}));
	beforeEach(() => {
		fixture = TestBed.createComponent(NgAdminNgUserFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
