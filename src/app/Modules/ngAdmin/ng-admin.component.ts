import { Component, OnInit, ViewChild } from '@angular/core';
import { NgAdminContainerComponent } from './Components/ng-admin-container/ngadmin-container.component';
import { NgAdminNavComponent } from './Components/ng-admin-nav/ngadmin-nav.component';

@Component({
	selector: 'app-ngadmin',
	templateUrl: './ng-admin.component.html',
	styleUrls: ['./ng-admin.component.scss']
})
export class NgAdminComponent implements OnInit {
	@ViewChild('ngAdminContainer') _ngAdminContainer_: NgAdminContainerComponent;
	constructor() { }

	ngOnInit() {}

	onNgadminSidenavToggle() {
		// this._ngadminContainer_.onNgadminSidenavToggle();
	}

}
