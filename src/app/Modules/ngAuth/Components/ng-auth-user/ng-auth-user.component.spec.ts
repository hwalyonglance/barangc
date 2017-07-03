import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgAuthUserComponent } from './ng-auth-user.component';
describe('NgAuthUserComponent', () => {
	let component: NgAuthUserComponent;
	let fixture: ComponentFixture<NgAuthUserComponent>;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ NgAuthUserComponent ]
		}).compileComponents();
	}));
	beforeEach(() => {
		fixture = TestBed.createComponent(NgAuthUserComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
