import { NgAdminBarangDataTableComponent } from './ng-admin-barang-data-table.component';
import { Item } from '../../../../Interfaces/item';
declare var io: SocketIOStatic;
export function $Socket($this: NgAdminBarangDataTableComponent, origin: string) {
	$this.$Socket = io(origin);
	$this.$Socket.on('connect', () => { console.log('onconnect') });
	$this.$Socket.on('connecting', () => { console.log('onconnecting') });
	$this.$Socket.on('Item.Data.get', (Items: Item[]) => {
		$this.$Items = Items
		console.log(' on get connect');
	});
	$this.$Socket.on('Item.Data.add', (Item: Item) => {
		$this.$Items.unshift(Item);
	});
	$this.$Socket.on('Item.Data.update', (Item: Item) => {
		$this.$Items = $this.$Items.map(($Item: Item) => {
			console.log($Item.UUID, Item.UUID);
			return $Item.UUID === Item.UUID ? Item : $Item;
		});
	});
	$this.$Socket.on('Item.Data.delete', (UUID: string) => {
		$this.$Items = $this.$Items.filter(($Item) => {
			return $Item.UUID !== UUID;
		});
	});
}
