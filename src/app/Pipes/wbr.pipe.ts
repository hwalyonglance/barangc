import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'wbr'
})
export class WbrPipe implements PipeTransform {

	transform(value: any, args?: any): any {
		const val = value.split('');
		let retVal = '';
		for (let i = 0 ; i < val.length ; i ++) {
			if ( i % 5) {
				retVal += val[i] + '<wbr>';
			} else {
				retVal += val[i]
			}
		}
		return retVal;
	}

}
