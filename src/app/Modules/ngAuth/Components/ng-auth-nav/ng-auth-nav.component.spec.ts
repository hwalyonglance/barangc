import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgAuthNavComponent } from './ng-auth-nav.component';
describe('NgAuthNavComponent', () => {
	let component: NgAuthNavComponent;
	let fixture: ComponentFixture<NgAuthNavComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NgAuthNavComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NgAuthNavComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
