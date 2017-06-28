import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAdminComponent } from './ng-admin.component';

describe('NgadminComponent', () => {
	let component: NgAdminComponent;
	let fixture: ComponentFixture<NgAdminComponent>;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ NgAdminComponent ]
		}).compileComponents();
	}));
	beforeEach(() => {
		fixture = TestBed.createComponent(NgAdminComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
