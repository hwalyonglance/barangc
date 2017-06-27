import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';

@Component({
	selector: 'app-fa-icon',
	templateUrl: './fa-icon.component.html',
	styleUrls: ['./fa-icon.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class FaIconComponent implements OnInit {
	@Input() faIcon: string;
	constructor($mdIconRegistry: MdIconRegistry, $sanitizer: DomSanitizer) {
		$mdIconRegistry.registerFontClassAlias('fontawesome', 'fa');
	}
	ngOnInit() {}
}
// fa-key
