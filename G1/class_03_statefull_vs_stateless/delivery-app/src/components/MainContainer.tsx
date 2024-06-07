import dishes from '../data/dishes.json';

export default function MainComponent() {
	console.log(dishes);

	return (
		<div className='p-4'>
			<section>
				<h2 className='text-2xl font-bold mb-4'>Top 5 Most Popular Dishes</h2>
				<div>
					{dishes.map(dish => (
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
					))}
				</div>
			</section>
			<section>
				<h2 className='text-2xl font-bold mb-4'>Top 5 Recently Added Dishes</h2>
				<div></div>
			</section>
		</div>
	);
}
