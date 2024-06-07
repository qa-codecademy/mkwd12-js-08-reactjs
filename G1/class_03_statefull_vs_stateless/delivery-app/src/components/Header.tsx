export default function Header() {
	return (
		<header className='flex justify-between items-center p-4 bg-gray-800 text-white'>
			<h1 className='text-xl font-bold cursor-pointer'>QA Delivery App</h1>
			<nav>
				<ul className='flex gap-x-4'>
					<li>Home</li>
					<li>Pizza</li>
					<li>Burger</li>
					<li>Sushi</li>
					<li>Pasta</li>
					<li>Traditional</li>
				</ul>
			</nav>
			<div>Cart: 0</div>
		</header>
	);
}
