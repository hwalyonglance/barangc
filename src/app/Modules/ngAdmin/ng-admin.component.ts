import { Component, ViewChild } from '@angular/core';
import { NgAdminContainerComponent } from './Components/ng-admin-container/ng-admin-container.component';
import { NgAdminNavComponent } from './Components/ng-admin-nav/ng-admin-nav.component';

@Component({
	selector: 'app-ngadmin',
	templateUrl: './ng-admin.component.html',
	styleUrls: ['./ng-admin.component.scss']
})
export class NgAdminComponent {
	@ViewChild('ngAdminContainer') _ngAdminContainer_: NgAdminContainerComponent;
	constructor() { }

	onNgadminSidenavToggle() {
		// this._ngadminContainer_.onNgadminSidenavToggle();
	}

}
