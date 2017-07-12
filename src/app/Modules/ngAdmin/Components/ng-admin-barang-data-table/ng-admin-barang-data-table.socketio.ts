import { NgAdminBarangDataTableComponent } from './ng-admin-barang-data-table.component';
import { Category } from '../../../../Interfaces/category';
import { Item } from '../../../../Interfaces/item';
declare var io: SocketIOStatic;
export function $Socket($this: NgAdminBarangDataTableComponent) {
	const $Item$: SocketIO.Server = io($this.__configService.SocketIO.origin + '/data/item');
	$Item$.on('connect', () => {
		$Item$.emit('gets', (Items: Item[]) => {
			$this.$Items = Items.reverse();
			console.log('emit get item => ', Items);
		})
	});
	$Item$.on('add', (Item: Item) => {
		$this.$Items.unshift(Item);
		console.log('on add => ', Item);
	});
	$Item$.on('update', (Item: Item) => {
		$this.$Items = $this.$Items.map(($Item: Item) => {
			return $Item._id === Item._id ? Item : $Item;
		});
		console.log('on update => ', Item);
	});
	$Item$.on('delete', (_id: string) => {
		$this.$Items = $this.$Items.filter(($Item) => {
			return $Item._id !== _id;
		});
		console.log('on delete => ', _id);
	});
}
