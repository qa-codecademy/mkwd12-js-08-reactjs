import { useForm } from 'react-hook-form';
import { CheckOutAddressFormValues } from '../common/types/check-out-address-form-values.interface';

const inputClasses = `mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
invalid:border-red-500 invalid:text-red-600
focus:invalid:border-red-500 focus:invalid:ring-red-500
`;

export default function CheckOutAddress() {
	const { register } = useForm<CheckOutAddressFormValues>();

	return (
		<div className='px-10 py-5'>
			<h1 className='text-2xl font-bold mb-4'>Checkout</h1>
			<h2 className='text-xl font-bold mb-4'>Address</h2>
			<form className='flex flex-col gap-y-5'>
				<label className='block w-80'>
					<span className='block text-sm font-medium text-slate-700'>Name</span>
					<input
						{...register('name', { required: true })}
						type='text'
						className={inputClasses}
					/>
				</label>

				<label className='block w-80'>
					<span className='block text-sm font-medium text-slate-700'>
						Email
					</span>
					<input type='email' className={inputClasses} />
				</label>

				<label className='block w-80'>
					<span className='block text-sm font-medium text-slate-700'>
						Phone Number
					</span>
					<input type='tel' className={inputClasses} />
				</label>

				<label className='block w-80'>
					<span className='block text-sm font-medium text-slate-700'>
						Street
					</span>
					<input type='text' className={inputClasses} />
				</label>

				<label className='block w-80'>
					<span className='block text-sm font-medium text-slate-700'>City</span>
					<input type='text' className={inputClasses} />
				</label>

				<label className='block w-80'>
					<span className='block text-sm font-medium text-slate-700'>
						Country
					</span>
					<input type='text' className={inputClasses} />
				</label>

				<button
					type='submit'
					className='mx-auto mt-4 bg-blue-500 text-white px-4 py-2 rounded'>
					Make Order
				</button>
			</form>
		</div>
	);
}
