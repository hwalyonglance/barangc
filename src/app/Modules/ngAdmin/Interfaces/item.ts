import { Category } from './category';
export interface Item {
	_id?: string;
	Category: Category;
	name: string;
	image?: string;
	price: number;
	stock: number;
	desc?: string;
	createdAt?: any;
	updatedAt?: any;
	__v?: number;
}
