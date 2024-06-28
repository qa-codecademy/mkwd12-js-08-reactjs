import { ArrowPathIcon } from '@heroicons/react/24/outline';

export default function Loader() {
	return (
		<div className='flex justify-center items-center h-full'>
			<ArrowPathIcon className='animate-spin h-40 w-40' />
		</div>
	);
}
