import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'exponential'
})
export class ExponentialPipe implements PipeTransform {

	transform(value: any, args?: any): any {
		console.log('val => ', value);
		return Math.pow(Number(value), 2);
	}

}
