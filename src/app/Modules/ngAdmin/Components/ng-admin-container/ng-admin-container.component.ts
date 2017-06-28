import { Component, OnInit, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';
@Component({
	selector: 'app-ng-admin-container',
	templateUrl: './ng-admin-container.component.html',
	styleUrls: ['./ng-admin-container.component.scss']
})
export class NgAdminContainerComponent implements OnInit {
	@ViewChild('ngAdminSidenav') _ngadminSidenav_: MdSidenav;
	SMALL_WIDTH_BREAKPOINT = 720;
	constructor() {}
	ngOnInit() {
		setTimeout(() => {
			if ( !this.isScreenSmall() ) {
				this._ngadminSidenav_.open();
			}
		}, 10);
	}
	isScreenSmall(): boolean {
		return window.matchMedia(`(max-width: ${this.SMALL_WIDTH_BREAKPOINT}px)`).matches;
	}
}
