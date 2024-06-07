import { Category } from '../common/types/category.enum';

type HeaderProps = {
	selectCategory: (category: Category | null) => void;
};

export default function Header({ selectCategory }: HeaderProps) {
	const categories = Object.values(Category);

	return (
		<header className='flex justify-between items-center p-4 bg-gray-800 text-white'>
			<h1 className='text-xl font-bold cursor-pointer'>QA Delivery App</h1>
			<nav>
				<ul className='flex gap-x-4'>
					<li onClick={() => selectCategory(null)}>Home</li>
					{categories.map(category => (
						<li onClick={() => selectCategory(category)}>{category}</li>
					))}
				</ul>
			</nav>
			<div>Cart: 0</div>
		</header>
	);
}
