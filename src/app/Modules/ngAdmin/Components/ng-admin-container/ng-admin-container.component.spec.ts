import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgAdminContainerComponent } from './ng-admin-container.component';
describe('NgAdminContainerComponent', () => {
	let component: NgAdminContainerComponent;
	let fixture: ComponentFixture<NgAdminContainerComponent>;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NgAdminContainerComponent]
		}).compileComponents();
	}));
	beforeEach(() => {
		fixture = TestBed.createComponent(NgAdminContainerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
