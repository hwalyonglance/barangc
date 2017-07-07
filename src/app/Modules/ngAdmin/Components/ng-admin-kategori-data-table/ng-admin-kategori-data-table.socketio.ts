import { Category } from '../../../../Interfaces/category';

export function $Socket( __p__this ) {
	__p__this.$Socket.on('Category.Data.get', ($Categories) => {
		__p__this.$Categories = $Categories;
	});
	__p__this.$Socket.on('Category.Data.add', (data) => {
		__p__this.$Categories = [data, ...__p__this.$Categories];
	});
	__p__this.$Socket.on('Category.Data.delete', (UUID) => {
		const Categories = __p__this.$Categories;
		const _Categories = [];
		for (let i = 0; i < Categories.length; i++) {
			if (Categories[i].UUID !== UUID) {
				_Categories.push(Categories[i]);
			}
		}
		__p__this.$Categories = _Categories;
	});
	__p__this.$Socket.on('Category.Data.update', (Category: Category) => {
		const _Categories = [];
		for (let i = 0; i < __p__this.$Categories.length; i++) {
			if (Category.UUID === __p__this.$Categories[i].UUID) {
				__p__this.$Categories[i].name = Category.name;
			}
			_Categories.push(__p__this.$Categories[i]);
		}
		__p__this.$Categories = _Categories;
	});
}
