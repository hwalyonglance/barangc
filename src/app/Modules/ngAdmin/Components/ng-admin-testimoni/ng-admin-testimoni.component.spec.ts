import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgAdminTestimoniComponent } from './ng-admin-testimoni.component';
describe('NgAdminTestimoniComponent', () => {
	let component: NgAdminTestimoniComponent;
	let fixture: ComponentFixture<NgAdminTestimoniComponent>;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ NgAdminTestimoniComponent ]
		}).compileComponents();
	}));
	beforeEach(() => {
		fixture = TestBed.createComponent(NgAdminTestimoniComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
