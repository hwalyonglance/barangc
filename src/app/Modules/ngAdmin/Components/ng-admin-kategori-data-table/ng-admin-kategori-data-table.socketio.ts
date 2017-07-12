import { NgAdminKategoriDataTableComponent } from './ng-admin-kategori-data-table.component';
import { CategoryDatabase } from './kategori-database';
import { Category } from '../../../../Interfaces/category';
declare var io: SocketIOStatic;

export function $Socket( $this: CategoryDatabase ) {
	const $Socket: SocketIO.Server = io('http://localhost:3000/data/category');
	$Socket.emit('gets', ($Categories) => {
		$Categories.map((_Category) => {
			$this.addCategory(_Category);
		});
	});
	$Socket.on('add', (_Category: Category) => {
		// $this.$Categories.unshift({ _id: data._id, type: data.type });
		$this.addCategory(_Category);
	});
	$Socket.on('delete', (_id) => {
		$this.deleteCategory(_id);
	});
	$Socket.on('update', (Category: Category | any) => {
		$this.updateCategory(Category);
	});
}
