import { FormControl, FormGroup, Validators } from '@angular/forms';

export const RULES = {
	username: {
		required: true,
		minLength: 8,
		maxLength: 32
	},
	password: {
		required: true,
		minLength: 8,
		maxLength: 32
	},
	robot: {
		required: true
	}
}
export const VALIDATION_MESSAGES = {
	username: {
		required: 'Username is required.',
		minLength: 'Username must be at least ' + RULES.username.minLength + ' characters long.',
		maxLength: 'Name cannot be more than ' + RULES.username.maxLength + ' characters long.',
		valid: 'Username is valid.'
	},
	password: {
		required: 'Password is required.',
		minLength: 'Password must be at least ' + RULES.password.minLength + ' characters long.',
		maxLength: 'Password cannot be more than ' + RULES.password.maxLength + ' characters long.',
		valid: 'Password is valid.'
	}
};
export const VALIDATORS = {
	username: [
		Validators.required,
		Validators.minLength(RULES.username.minLength),
		Validators.maxLength(RULES.username.maxLength)
	],
	password: [
		Validators.required,
		Validators.minLength(RULES.password.minLength),
		Validators.maxLength(RULES.password.maxLength)
	],
	robot: [
		Validators.required
	]
};
export const FORM_GROUP_OBJECT_PARAM = {
	username: ['', VALIDATORS.username],
	password: ['', VALIDATORS.password]
	// ,robot: ['', VALIDATORS.robot]
};
