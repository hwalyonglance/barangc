import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgAuthNgadminComponent } from './ng-auth-ngadmin.component';
describe('NgAuthNgadminComponent', () => {
	let component: NgAuthNgadminComponent;
	let fixture: ComponentFixture<NgAuthNgadminComponent>;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ NgAuthNgadminComponent ]
		}).compileComponents();
	}));
	beforeEach(() => {
		fixture = TestBed.createComponent(NgAuthNgadminComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
