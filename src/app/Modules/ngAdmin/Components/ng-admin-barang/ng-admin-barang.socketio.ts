import { NgAdminBarangComponent } from './ng-admin-barang.component';

import { Category } from '../../../../Interfaces/category';
declare var io: SocketIOStatic;


export function $Socket($this: NgAdminBarangComponent) {
	const $Categories$: SocketIO.Server = io($this._config.SocketIO.origin + '/data/category');
	$Categories$.emit('get', (Categories: Category[]) => {
		$this.$Categories = Categories;
		$this.$Categories$.emit();
		console.log('darimana => ', Categories);
	});
	$Categories$.on('add', (Category: Category) => {
		$this.$Categories.unshift(Category);
		$this.$Categories$.emit();
	});
	$Categories$.on('delete', (_id) => {
		$this.$Categories = $this.$Categories.filter((_Category) => {
			return _Category._id !== _id;
		});
		$this.$Categories$.emit();
	});
	$Categories$.on('update', (Category: Category) => {
		$this.$Categories = $this.$Categories.map(($Category: Category) => {
			if ($Category._id === Category._id) {
				$Category = Category;
			} return $Category
		});
		$this.$Categories$.emit();
	});
}

