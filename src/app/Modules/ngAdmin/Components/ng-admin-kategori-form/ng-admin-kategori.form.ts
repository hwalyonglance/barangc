import { FormControl, FormGroup, Validators } from '@angular/forms';

export const RULES = {
	_id: {
		required: true
	},
	type: {
		required: true,
		minLength: 1,
		maxLength: 32
	}
};
export const VALIDATION_MESSAGES = {
	_id: {
		required: '_id is required.',
	},
	type: {
		required: 'Category type is required.',
		minLength: 'Category type must be at least ' + RULES.type.minLength + ' characters long.',
		maxLength: 'Category type cannot be more than ' + RULES.type.maxLength + ' characters long.',
	}
};
export const VALIDATORS = {
	_id: [
		Validators.required
	],
	type: [
		Validators.required,
		Validators.minLength(RULES.type.minLength),
		Validators.maxLength(RULES.type.maxLength)
	]
};

export const FORM_GROUP_OBJECT_PARAM = {
	_id: ['', VALIDATORS._id],
	type: ['', VALIDATORS.type]
};
