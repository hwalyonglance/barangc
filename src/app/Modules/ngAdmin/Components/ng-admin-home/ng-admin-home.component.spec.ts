import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgAdminHomeComponent } from './ng-admin-home.component';
describe('NgAdminHomeComponent', () => {
	let component: NgAdminHomeComponent;
	let fixture: ComponentFixture<NgAdminHomeComponent>;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ NgAdminHomeComponent ]
		}).compileComponents();
	}));
	beforeEach(() => {
		fixture = TestBed.createComponent(NgAdminHomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
