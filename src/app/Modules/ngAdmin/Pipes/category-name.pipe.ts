import { Pipe, PipeTransform, EventEmitter } from '@angular/core';
import { ConfigService } from '../../../Services/config/config.service';
declare var io: SocketIOStatic;

@Pipe({
	name: 'categoryName'
})
export class CategoryNamePipe implements PipeTransform {
	$Socket: SocketIO.Server = io(this.__configService.SocketIO.origin);
	$categoryName = new EventEmitter<string>();
	constructor(private __configService: ConfigService) {}
	transform(categoryUUID: string, args?: any): string {
		console.log('UUID => ', categoryUUID);
		let retVal;
		this.$Socket.emit('Category.name.where.UUID', categoryUUID);
		console.log('name => ', this.$categoryName);
		this.$categoryName.subscribe((val) => {
			retVal = val;
			console.log('EventEmitter => ', val);
			setTimeout(function() {
				retVal = val;
			}, 1000);
		});
		console.log('before ret => ', retVal);
		return this.block();
	}
	block(callback?: () => string) {
		const __p__this = this;
		let retVal;
		this.$Socket.on('Category.name.where.UUID', (_categoryName: string) => {
			console.log(_categoryName);
			retVal = _categoryName;
			__p__this.$categoryName.emit(_categoryName);
		});
		return retVal;
	}

}
