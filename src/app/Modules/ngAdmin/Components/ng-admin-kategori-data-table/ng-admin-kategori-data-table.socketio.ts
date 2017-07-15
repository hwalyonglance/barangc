import { CategoryDatabase } from './kategori.database';
import { Category } from '../../../../Interfaces/category';
declare var io: SocketIOStatic;

export function $Socket( $this: CategoryDatabase ) {
	const $Socket: SocketIO.Server = io('http://localhost:3000/data/category');
	$Socket.emit('gets', ($Categories) => {
		$Categories.map((_Category) => {
			$this.add(_Category);
		});
	});
	$Socket.on('add', (Category: Category) => {
		$this.add(Category);
	});
	$Socket.on('update', (Category: Category | any) => {
		$this.update(Category);
	});
	$Socket.on('delete', (_id) => {
		$this.delete(_id);
	});
}
