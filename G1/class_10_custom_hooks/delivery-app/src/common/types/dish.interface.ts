import { Category } from './category.enum';

export interface Dish {
	id: string;
	name: string;
	description: string;
	image: string;
	price: number;
	discountPercentage: number;
	category: Category;
	order_count: number;
	createdAt: string;
}
