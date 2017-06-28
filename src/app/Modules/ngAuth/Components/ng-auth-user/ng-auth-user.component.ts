import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as _NG_AUTH_NG_USER_FORM_ from './ng-auth-user.form';

@Component({
	selector: 'app-ng-auth-user',
	templateUrl: './ng-auth-user.component.html',
	styleUrls: ['./ng-auth-user.component.scss']
})
export class NgAuthUserComponent implements OnInit {
	_FORM_ = _NG_AUTH_NG_USER_FORM_;
	authForm: FormGroup;
	constructor(private _formBuilder: FormBuilder) {
		this.buildAuthForm();
	}
	ngOnInit() {}
	buildAuthForm(): void {
		this.authForm = this._formBuilder.group(_NG_AUTH_NG_USER_FORM_.FORM_GROUP_OBJECT_PARAM);
	}
}
