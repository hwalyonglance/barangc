import { Category } from '../../../../Interfaces/category';

export function $Socket( $this ) {
	$this.$Socket.on('Category.Data.get', ($Categories) => {
		$this.$Categories = $Categories;
	});
	$this.$Socket.on('Category.Data.add', (data) => {
		$this.$Categories = [data, ...$this.$Categories];
	});
	$this.$Socket.on('Category.Data.delete', (UUID) => {
		const Categories = $this.$Categories;
		const _Categories = [];
		for (let i = 0; i < Categories.length; i++) {
			if (Categories[i].UUID !== UUID) {
				_Categories.push(Categories[i]);
			}
		}
		$this.$Categories = _Categories;
	});
	$this.$Socket.on('Category.Data.update', (Category: Category) => {
		const _Categories = [];
		for (let i = 0; i < $this.$Categories.length; i++) {
			if (Category.UUID === $this.$Categories[i].UUID) {
				$this.$Categories[i].name = Category.name;
			}
			_Categories.push($this.$Categories[i]);
		}
		$this.$Categories = _Categories;
	});
}
