import { useForm } from 'react-hook-form';
import { CheckOutAddressFormValues } from '../common/types/check-out-address-form-values.interface';
import { useContext } from 'react';
import { DishContext } from '../context/dish.context';
import { Order } from '../common/types/order.interface';
import axios from 'axios';
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';

const inputClasses = `mt-1 block w-full px-3 py-2 bg-white border border-black rounded-md text-sm shadow-sm placeholder-slate-400
focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
invalid:border-red-500 invalid:text-red-600
focus:invalid:border-red-500 focus:invalid:ring-red-500
`;

export default function CheckOutAddress() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<CheckOutAddressFormValues>();
	const { cartItems, handleRemoveCartItems } = useContext(DishContext);
	const navigate = useNavigate();

	const onSubmit = async (data: CheckOutAddressFormValues) => {
		console.log('form submitting...');

		const order = {
			items: cartItems.map(item => ({
				dishId: item.dish.id,
				quantity: item.quantity,
				price: item.dish.price,
				discountPercentage: item.dish.discountPercentage,
			})),
			address: data,
		} satisfies Partial<Order>;

		try {
			await axios.post('http://localhost:3000/api/orders', order);
			handleRemoveCartItems();
			navigate('/order-completed');
		} catch (error) {
			console.error('Error while submitting order', { error });
		}
	};

	return (
		<div className='px-10 py-5'>
			<h1 className='text-2xl font-bold mb-4'>Checkout</h1>
			<h2 className='text-xl font-bold mb-4'>Address</h2>
			<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-5'>
				<label className='block w-80'>
					<span className='block text-sm font-medium text-slate-700'>Name</span>
					<input
						{...register('name', {
							required: 'Name is required',
							minLength: {
								value: 3,
								message: 'Name must be at least 3 characters long',
							},
						})}
						type='text'
						className={inputClasses}
					/>
					<p className='text-sm mt-1 text-red-500'>{errors.name?.message}</p>
				</label>

				<label className='block w-80'>
					<span className='block text-sm font-medium text-slate-700'>
						Email
					</span>
					<input
						{...register('email', { required: 'Email is required' })}
						type='email'
						className={inputClasses}
					/>
					<p className='text-sm mt-1 text-red-500'>{errors.email?.message}</p>
				</label>

				<label className='block w-80'>
					<span className='block text-sm font-medium text-slate-700'>
						Phone Number
					</span>
					<input
						{...register('phoneNumber', {
							required: 'Phone number is required',
						})}
						type='tel'
						className={inputClasses}
					/>
					<p className='text-sm mt-1 text-red-500'>
						{errors.phoneNumber?.message}
					</p>
				</label>

				<label className='block w-80'>
					<span className='block text-sm font-medium text-slate-700'>
						Street
					</span>
					<input
						{...register('street', {
							required: 'Street is required',
						})}
						type='text'
						className={inputClasses}
					/>
					<p className='text-sm mt-1 text-red-500'>{errors.street?.message}</p>
				</label>

				<label className='block w-80'>
					<span className='block text-sm font-medium text-slate-700'>City</span>
					<input
						{...register('city', {
							required: 'City is required',
						})}
						type='text'
						className={inputClasses}
					/>
					<p className='text-sm mt-1 text-red-500'>{errors.city?.message}</p>
				</label>

				<label className='block w-80'>
					<span className='block text-sm font-medium text-slate-700'>
						Country
					</span>
					<input
						{...register('country', {
							required: 'Country is required',
						})}
						type='text'
						className={inputClasses}
					/>
					<p className='text-sm mt-1 text-red-500'>{errors.country?.message}</p>
				</label>

				{isSubmitting && <Loader />}
				<button
					type='submit'
					className='mx-auto mt-4 bg-blue-500 text-white px-4 py-2 rounded'>
					Make Order
				</button>
			</form>
		</div>
	);
}
