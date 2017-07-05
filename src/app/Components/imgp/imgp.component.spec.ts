import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgpComponent } from './imgp.component';

describe('ImgpComponent', () => {
	let component: ImgpComponent;
	let fixture: ComponentFixture<ImgpComponent >;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ImgpComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ImgpComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
