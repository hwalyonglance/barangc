import { Component, OnInit, ViewChild } from '@angular/core';
import { NgadminContainerComponent } from './Components/ngadmin-container/ngadmin-container.component';
import { NgadminNavComponent } from './Components/ngadmin-nav/ngadmin-nav.component';

@Component({
	selector: 'app-ngadmin',
	templateUrl: './ngadmin.component.html',
	styleUrls: ['./ngadmin.component.scss']
})
export class NgadminComponent implements OnInit {
	@ViewChild('ngadminContainer') _ngadminContainer_: NgadminContainerComponent;
	constructor() { }

	ngOnInit() {}

	onNgadminSidenavToggle() {
		this._ngadminContainer_.onNgadminSidenavToggle();
	}

}
