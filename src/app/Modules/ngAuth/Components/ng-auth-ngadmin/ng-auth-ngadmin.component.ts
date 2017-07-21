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
	onSubmit(authForm): void {
		window.localStorage.ngadmin = JSON.stringify({
			username: authForm.username,
			password: authForm.password,
			created_at: Date.now()
		});
		this._router.navigate(['ngadmin', 'dashboard']);
	}
	onKeyPress($event: KeyboardEvent): void {
		const number = ($event.charCode >= 48) && ($event.charCode <= 57);
		const _ = ($event.charCode === 95);
		const alphabet = ($event.charCode >= 97) && ($event.charCode <= 122);
		const ALPHABET = ($event.charCode >= 65) && ($event.charCode <= 90);
		const tab = $event.keyCode === 9;
		if ( !( number || _ || alphabet || ALPHABET || tab) ) {
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
