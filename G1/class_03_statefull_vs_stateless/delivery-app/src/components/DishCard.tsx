import { Dish } from '../common/types/dish.interface';

type DishCardProps = {
	dish: Dish;
};

export default function DishCard({ dish }: DishCardProps) {
	return (
		<div key={dish.id} className='border p-4 rounded shadow'>
			<img
				src={dish.image}
				alt={dish.name}
				className='w-full h-40 object-cover mb-2'
			/>
			<h3 className='text-lg font-bold'>{dish.name}</h3>
			<p className='text-gray-600'>{dish.description}</p>
			<div className='flex justify-between items-center mt-2'>
				<span className='text-green-600 font-bold'>${dish.price}</span>
				<button className='bg-blue-500 text-white px-2 py-1 rounded'>
					Add to Cart
				</button>
			</div>
		</div>
	);
}
