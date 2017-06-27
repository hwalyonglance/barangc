import { Component, OnInit, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';
@Component({
	selector: 'app-ngadmin-container',
	templateUrl: './ngadmin-container.component.html',
	styleUrls: ['./ngadmin-container.component.scss']
})
export class NgadminContainerComponent implements OnInit {
	@ViewChild('ngadminSidenav') _ngadminSidenav_: MdSidenav;
	SMALL_WIDTH_BREAKPOINT = 720;
	constructor() {}
	ngOnInit() {}
	onNgadminSidenavToggle(): void {
		this._ngadminSidenav_.toggle();
	}
	isScreenSmall(): boolean {
		return window.matchMedia(`(max-width: ${this.SMALL_WIDTH_BREAKPOINT}px)`).matches;
	}
}
