import { Category } from './category';
import { Category as C } from '../Classes/category';
export interface Item {
	UUID: string;
	ngadmin: any;
	Category: Category;
	name: string;
	image: string;
	price: number;
	stock: number;
	desc: string;
}
