import DishCard from './DishCard';
import Loader from './Loader';
import { useDishes } from '../hooks/use-dishes';

const buttonClasses = `bg-blue-500 disabled:bg-blue-300 text-white py-2 px-4 rounded`;

export default function Dishes() {
	const {
		dishes,
		page,
		pageSize,
		isLoading,
		total,
		setPage,
		setPageSize,
		setSearchTerm,
	} = useDishes();

	return (
		<div className='p-4'>
			<div className='flex justify-center mb-4'>
				<input
					type='search'
					name='search'
					id='search'
					placeholder='Search...'
					onChange={e => {
						setPage(1);
						setSearchTerm(e.target.value);
					}}
					className='w-80 px-3 py-2 bg-white border border-slate-500 rounded-md text-sm shadow-sm placeholder-slate-500'
				/>
			</div>
			{isLoading ? (
				<Loader />
			) : (
				<div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
					{dishes.length ? (
						dishes.map(dish => <DishCard key={dish.id} dish={dish} />)
					) : (
						<p>No dishes found.</p>
					)}
				</div>
			)}
			<div className='flex justify-center mt-4 gap-x-2 pb-60'>
				<button
					className={buttonClasses}
					disabled={page === 1}
					onClick={() => setPage(page - 1)}>
					Previous
				</button>

				{Array.from({ length: Math.ceil(total / pageSize) }, (_, i) => (
					<button
						key={i + 1}
						className={buttonClasses}
						onClick={() => setPage(i + 1)}>
						{i + 1}
					</button>
				))}

				<button
					className={buttonClasses}
					disabled={total - pageSize * page <= 0}
					onClick={() => setPage(page + 1)}>
					Next
				</button>
				<select
					name='pageSize'
					id='pageSize'
					onChange={e => setPageSize(parseInt(e.target.value))}
					className='px-3 py-2 bg-white border border-slate-500 rounded-md text-sm shadow-md placeholder-slate-400'>
					{[2, 3, 4, 5, 6, 7, 8, 9].map(size => (
						<option key={size} value={size} selected={size === pageSize}>
							{size}
						</option>
					))}
				</select>
			</div>
		</div>
	);
}
