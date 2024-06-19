import { Link } from 'react-router-dom';

export default function NotFound() {
	return (
		<div className='flex flex-col items-center justify-center h-screen text-center'>
			<h1 className='text-5xl font-bold mb-4'>404</h1>
			<h2 className='text-2xl mb-8'>Page Not Found</h2>
			<Link
				className='bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition'
				to='/'>
				Go Back Home
			</Link>
		</div>
	);
}
