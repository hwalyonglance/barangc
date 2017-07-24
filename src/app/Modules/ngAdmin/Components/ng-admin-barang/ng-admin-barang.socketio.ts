import { NgAdminBarangComponent } from './ng-admin-barang.component';
import { CONFIG } from '../../../../../environments/config';
import { Category } from '../../Interfaces/category';
import { SocketIOStatic, Server } from '../../../../Interfaces/socket.io';
declare var io: SocketIOStatic;

export function $Socket($this: NgAdminBarangComponent) {
	const $Socket: Server = io(CONFIG.SocketIO.origin + '/data/category');
	$Socket.emit('gets', (Categories: Category[]) => {
		$this.$Categories = Categories;
		$this.$Categories$.emit();
	});
	$Socket.on('add', (Category: Category) => {
		$this.$Categories.unshift(Category);
		$this.$Categories$.emit();
	});
	$Socket.on('delete', (_id) => {
		$this.$Categories = $this.$Categories.filter((_Category) => {
			return _Category._id !== _id;
		});
		$this.$Categories$.emit();
	});
	$Socket.on('update', (Category: Category) => {
		$this.$Categories = $this.$Categories.map(($Category: Category) => {
			if ($Category._id === Category._id) {
				$Category = Category;
			} return $Category
		});
		$this.$Categories$.emit();
	});
}

