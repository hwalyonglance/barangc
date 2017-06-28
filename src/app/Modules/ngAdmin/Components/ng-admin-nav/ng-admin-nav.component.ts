import { Component, Output, EventEmitter} from '@angular/core';

@Component({
	selector: 'app-ng-admin-nav',
	templateUrl: './ng-admin-nav.component.html',
	styleUrls: ['./ng-admin-nav.component.scss']
})
export class NgAdminNavComponent {
	@Output() $ngadminSideNavToggle$ = new EventEmitter<any>();
	constructor() {}
}
