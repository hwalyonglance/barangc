import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

	transform(value: any, end: number): string {
		// return value.substr(0, end);
		console.log(' => ', value);
		return 'lorem';
	}

}
