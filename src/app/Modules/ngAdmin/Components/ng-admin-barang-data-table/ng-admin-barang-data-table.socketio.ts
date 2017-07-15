import { ItemDatabase } from './barang.database';
import { Item } from '../../../../Interfaces/item';
declare var io: SocketIOStatic;
export function $Socket($this: ItemDatabase) {
	const $Socket: SocketIO.Server = io('http://localhost:3000/data/item');
	$Socket.on('connect', () => {
		$Socket.emit('gets', (Items: Item[]) => {
			Items.map((_Item) => {
				$this.add(_Item);
			})
		})
	});
	$Socket.on('add', (Item: Item) => {
		$this.add(Item);
	});
	$Socket.on('update', (Item: Item) => {
		$this.update(Item);
	});
	$Socket.on('delete', (_id: string) => {
		$this.delete(_id);
	});
}
