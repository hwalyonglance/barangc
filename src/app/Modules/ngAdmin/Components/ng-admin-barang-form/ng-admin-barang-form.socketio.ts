import { NgAdminBarangFormComponent } from './ng-admin-barang-form.component';
import { Category } from '../../../../Interfaces/category';
declare var io: SocketIOStatic;

export function $Socket($this: NgAdminBarangFormComponent, origin: string) {
	$this.$Socket.emit('Category.Data.get', (Categories: Category[]) => {
		$this.$Categories = Categories;
	});
	$this.$Socket.on('Category.Data.add', (Category: Category) => {
		$this.$Categories.unshift(Category);
	});
	$this.$Socket.on('Category.Data.delete', (UUID) => {
		const Categories = $this.$Categories;
		const _Categories = [];
		for (let i = 0; i < Categories.length; i++) {
			if (Categories[i].UUID !== UUID) { _Categories.push(Categories[i]); }
		} $this.$Categories = _Categories;
	});
	$this.$Socket.on('Category.Data.update', (Category: Category) => {
		$this.$Categories = $this.$Categories.map(($Category: Category) => {
			if ($Category.UUID === Category.UUID) {
				$Category = Category;
			} return $Category
		});
	});
}
