import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import * as _NG_AUTH_NG_ADMIN_FORM_ from './ng-auth-ngadmin.form';
@Component({
	selector: 'app-ng-auth-ngadmin',
	templateUrl: './ng-auth-ngadmin.component.html',
	styleUrls: ['./ng-auth-ngadmin.component.scss']
})
export class NgAuthNgadminComponent implements OnInit {
	_FORM_ = _NG_AUTH_NG_ADMIN_FORM_;
	authForm: FormGroup;
	constructor(private _formBuilder: FormBuilder) {}
	ngOnInit() {
		this.buildNgauthNgadminForm();
	}
	buildNgauthNgadminForm(): void {
		this.authForm = this._formBuilder.group(_NG_AUTH_NG_ADMIN_FORM_.FORM_GROUP_OBJECT_PARAM);
		// this.authForm = _NG_AUTH_NG_ADMIN_FORM_.FORM_GROUP_OBJECT;
	}
	log(_data) {
		console.log(_data);
	}
	onSubmit(controls): void {
		console.log(controls);
	}
	onKeyPress($event: KeyboardEvent): void {
		const number = ($event.keyCode >= 48) && ($event.keyCode <= 57);
		const _ = ($event.keyCode === 95);
		const alphabet = ($event.keyCode >= 97) && ($event.keyCode <= 122);
		const ALPHABET = ($event.keyCode >= 65) && ($event.keyCode <= 90);
		if ( !( number || _ || alphabet || ALPHABET) ) {
			$event.preventDefault();
		}
		// console.log($event.keyCode);
	}
	onPaste( $event: any ): void {
		setTimeout(() => {
			const val = this.authForm.controls.username.value;
			const result = val.replace(/[\s\r\n\`\~\!\@\#\$\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\<\.\>\/\?]/gi, '');
			this.authForm.controls.username.setValue(result);
		}, 1);
	}
}
