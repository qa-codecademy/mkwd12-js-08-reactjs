import { Link } from 'react-router-dom';

export default function OrderCompleted() {
	return (
		<div className='flex flex-col items-center justify-center h-screen text-center'>
			<h1 className='text-5xl font-bold mb-4'>Order Completed</h1>
			<p className='text-2xl mb-8'>
				Your order has been successfully placed. Soon our delivery team will be
				in touch with you.
			</p>
			<div className='flex justify-center items-center gap-x-4'>
				<Link to='/'>
					<button className='bg-blue-500 rounded-lg text-white py-2 px-4 hover:bg-blue-600 transition'>
						Go home
					</button>
				</Link>

				<Link to='/orders'>
					<button className='bg-blue-500 rounded-lg text-white py-2 px-4 hover:bg-blue-600 transition'>
						See orders
					</button>
				</Link>
			</div>
		</div>
	);
}
