import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as _NG_AUTH_NG_ADMIN_FORM_ from './ng-auth-user.form';
@Component({
	selector: 'app-ng-auth-user',
	templateUrl: './ng-auth-user.component.html',
	styleUrls: ['./ng-auth-user.component.scss']
})
export class NgAuthUserComponent implements OnInit {
	_FORM_ = _NG_AUTH_NG_ADMIN_FORM_;
	authForm: FormGroup;
	constructor(private _formBuilder$$: FormBuilder, private _router: Router) { }
	ngOnInit() {
		this.buildNgauthNgadminForm();
	}
	buildNgauthNgadminForm(): void {
		this.authForm = this._formBuilder$$.group(this._FORM_.FORM_GROUP_OBJECT_PARAM);
	}
	onSubmit(authForm): void {
		const _store = {
			username: authForm.username,
			password: authForm.password,
			timestamp: Date.now()
		};
		window.localStorage.ngadmin = JSON.stringify(_store);
		this._router.navigate(['ngadmin', 'dashboard']);
	}
	onKeyPress($event: KeyboardEvent): void {
		const number = ($event.keyCode >= 48) && ($event.keyCode <= 57);
		const _ = ($event.keyCode === 95);
		const alphabet = ($event.keyCode >= 97) && ($event.keyCode <= 122);
		const ALPHABET = ($event.keyCode >= 65) && ($event.keyCode <= 90);
		if (!(number || _ || alphabet || ALPHABET)) {
			$event.preventDefault();
		}
		// console.log($event.keyCode);
	}
	onPaste($event: any): void {
		setTimeout(() => {
			const result = this.authForm.controls.username.value.replace(/[\s\r\n\`\~\!\@\#\$\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\<\.\>\/\?]/gi, '');
			this.authForm.controls.username.setValue(result);
		}, 1);
	}
}
