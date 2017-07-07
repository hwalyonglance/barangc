import { FormControl, FormGroup, Validators } from '@angular/forms';

export const RULES = {
	UUID: {
		required: true
	},
	name: {
		required: true,
		minLength: 1,
		maxLength: 32
	}
};
export const VALIDATION_MESSAGES = {
	UUID: {
		required: 'UUID is required.',
	},
	name: {
		required: 'Category name is required.',
		minLength: 'Category name must be at least ' + RULES.name.minLength + ' characters long.',
		maxLength: 'Category name cannot be more than ' + RULES.name.maxLength + ' characters long.',
	}
};
export const VALIDATORS = {
	UUID: [
		Validators.required
	],
	name: [
		Validators.required,
		Validators.minLength(RULES.name.minLength),
		Validators.maxLength(RULES.name.maxLength)
	]
};

export const FORM_GROUP_OBJECT_PARAM = {
	UUID: ['', VALIDATORS.UUID],
	name: ['', VALIDATORS.name]
};
