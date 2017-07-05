import { FormControl, FormGroup, Validators } from '@angular/forms';

export const RULES = {
	UUID: {
		required: true
	},
	categoryName: {
		required: true,
		minLength: 1,
		maxLength: 32
	}
};
export const VALIDATION_MESSAGES = {
	UUID: {
		required: 'UUID is required.',
		valid: 'UUID is valid.'
	},
	categoryName: {
		required: 'Category name is required.',
		minLength: 'Category name must be at least ' + RULES.categoryName.minLength + ' characters long.',
		maxLength: 'Category name cannot be more than ' + RULES.categoryName.maxLength + ' characters long.',
		valid: 'Category name is valid.'
	}
};
export const VALIDATORS = {
	UUID: [
		Validators.required
	],
	categoryName: [
		Validators.required,
		Validators.minLength(RULES.categoryName.minLength),
		Validators.maxLength(RULES.categoryName.maxLength)
	]
};

export const FORM_GROUP_OBJECT_PARAM = {
	UUID: ['', VALIDATORS.UUID],
	categoryName: ['', VALIDATORS.categoryName]
};
