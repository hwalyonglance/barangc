import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Component({
	selector: 'app-rp',
	templateUrl: './rp.component.html',
	styleUrls: ['./rp.component.scss']
})
export class RpComponent implements OnInit {
	constructor(
		private __activatedRoute$$: ActivatedRoute,
	) {}
	ngOnInit() {
		setTimeout(() => {
			this.haha();
		}, 1000);
	}
	haha(): void {
		console.log(this.__activatedRoute$$);
		console.log(this.__activatedRoute$$.snapshot.params);
		console.log(this.__activatedRoute$$.snapshot.queryParams);
	}
}
