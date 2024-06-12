import { Link } from 'react-router-dom';
import { Category } from '../common/types/category.enum';

type HeaderProps = {
	selectCategory: (category: Category | null) => void;
	handleCartClick: () => void;
	cartItemsCount: number;
};

export default function Header({
	selectCategory,
	cartItemsCount,
}: HeaderProps) {
	const categories = Object.values(Category);

	return (
		<header className='flex flex-wrap justify-between items-center p-4 bg-gray-800 text-white'>
			<h1 className='text-xl font-bold cursor-pointer'>
				<Link to='/'>QA Delivery App</Link>
			</h1>
			<nav>
				<ul className='flex flex-wrap gap-x-4'>
					<li className='cursor-pointer' onClick={() => selectCategory(null)}>
						Home
					</li>
					{categories.map(category => (
						<li
							className='cursor-pointer'
							key={category}
							onClick={() => selectCategory(category)}>
							{category}
						</li>
					))}
				</ul>
			</nav>
			<div>
				<Link className='cursor-pointer' to='/cart'>
					Cart: {cartItemsCount}
				</Link>
			</div>
		</header>
	);
}
