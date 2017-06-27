import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
	selector: 'app-ngadmin-nav',
	templateUrl: './ngadmin-nav.component.html',
	styleUrls: ['./ngadmin-nav.component.scss']
})
export class NgadminNavComponent implements OnInit {
	@Output() $ngadminSideNavToggle$ = new EventEmitter<any>();
	constructor() {}

	ngOnInit() {}
}
