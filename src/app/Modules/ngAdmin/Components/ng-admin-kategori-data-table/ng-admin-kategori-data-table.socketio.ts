import { NgAdminKategoriDataTableComponent } from './ng-admin-kategori-data-table.component';
import { Category } from '../../../../Interfaces/category';
declare var io: SocketIOStatic;

export function $Socket( $this: NgAdminKategoriDataTableComponent, origin: string ) {
	$this.$Socket = io(origin);
	const $Socket: SocketIO.Server = $this.$Socket;
	$Socket.nsp = '/data/category';
	$Socket.emit('get', ($Categories) => {
		$this.$Categories = $Categories.reverse();
	});
	$Socket.on('add', (data) => {
		$this.$Categories.unshift({ _id: data._id, type: data.type });
	});
	$Socket.on('delete', (_id) => {
		const Categories = $this.$Categories;
		const _Categories = [];
		for (let i = 0; i < Categories.length; i++) {
			if (Categories[i]._id !== _id) {
				_Categories.push(Categories[i]);
			}
		}
		$this.$Categories = _Categories;
	});
	$Socket.on('update', (Category: Category | any) => {
		Object.keys($this.$Categories).map($key => {
			if (Category._id === $this.$Categories[$key]._id) {
				Object.assign($this.$Categories[$key], {
					type: Category.type,
					updatedAt: Date.now()
				});
			}
		});
	});
}
