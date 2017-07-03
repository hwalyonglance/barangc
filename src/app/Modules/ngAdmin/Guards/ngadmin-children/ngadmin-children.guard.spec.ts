import { TestBed, async, inject } from '@angular/core/testing';

import { NgadminChildrenGuard } from './ngadmin-children.guard';

describe('NgadminChildrenGuard', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [NgadminChildrenGuard]
		});
	});

	it('should ...', inject([NgadminChildrenGuard], (guard: NgadminChildrenGuard) => {
		expect(guard).toBeTruthy();
	}));
});
