import { Category } from './category.enum';

export interface Dish {
	id: number;
	name: string;
	description: string;
	image: string;
	price: number;
	discountPercentage: number;
	category: Category;
	orders: number;
	createdAt: string;
}
