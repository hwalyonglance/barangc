import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import * as _NG_AUTH_NG_ADMIN_FORM_ from './ng-auth-ngadmin.form';
@Component({
	selector: 'app-ng-auth-ngadmin',
	templateUrl: './ng-auth-ngadmin.component.html',
	styleUrls: ['./ng-auth-ngadmin.component.scss']
})
export class NgAuthNgadminComponent implements OnInit {
	_FORM_ = _NG_AUTH_NG_ADMIN_FORM_;
	authForm: FormGroup;
	constructor(private _formBuilder: FormBuilder, private _router: Router) {}
	ngOnInit() {
		this.buildNgauthNgadminForm();
	}
	buildNgauthNgadminForm(): void {
		this.authForm = this._formBuilder.group(_NG_AUTH_NG_ADMIN_FORM_.FORM_GROUP_OBJECT_PARAM);
	}
	onSubmit(authForm: FormGroup): void {
		window.localStorage.ngadmin = JSON.stringify({
			username: authForm.get('username').value,
			password: authForm.get('password').value,
			created_at: Date.now()
		});
		this._router.navigate(['ngadmin', 'dashboard']);
	}
	onKeyPress($event: KeyboardEvent): void {
		const number = ($event.keyCode >= 48) && ($event.keyCode <= 57);
		const _ = ($event.keyCode === 95);
		const alphabet = ($event.keyCode >= 97) && ($event.keyCode <= 122);
		const ALPHABET = ($event.keyCode >= 65) && ($event.keyCode <= 90);
		if ( !( number || _ || alphabet || ALPHABET) ) {
			$event.preventDefault();
		}
	}
	onPaste( $event: any ): void {
		setTimeout(() => {
			const val = this.authForm.get('username').value;
			const result = val.replace(/[\s\r\n\`\~\!\@\#\$\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\<\.\>\/\?]/gi, '');
			this.authForm.get('username').setValue(result);
		}, 1);
	}
}
