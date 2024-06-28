import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './components/Loader';

const Header = lazy(() => import('./components/Header'));
const MainComponent = lazy(() => import('./components/MainContainer'));
const CategoryPage = lazy(() => import('./components/Category'));
const Cart = lazy(() => import('./components/Cart'));
const NotFound = lazy(() => import('./components/NotFound'));
const CheckOutAddress = lazy(() => import('./components/CheckOutAddress'));
const OrderCompleted = lazy(() => import('./components/OrderCompleted'));
const Orders = lazy(() => import('./components/Orders'));
const Dishes = lazy(() => import('./components/Dishes'));

export default function App() {
	return (
		<Suspense fallback={<Loader />}>
			<Header />
			<Routes>
				<Route path='/' element={<MainComponent />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/dishes' element={<Dishes />} />
				<Route path={`/category/:categoryName`} element={<CategoryPage />} />
				<Route path='check-out-address' element={<CheckOutAddress />} />
				<Route path='order-completed' element={<OrderCompleted />} />
				<Route path='orders' element={<Orders />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</Suspense>
	);
}
