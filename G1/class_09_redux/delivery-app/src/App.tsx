import Header from './components/Header';
import MainComponent from './components/MainContainer';
import CategoryPage from './components/Category';
import Cart from './components/Cart';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import CheckOutAddress from './components/CheckOutAddress';
import DishProvider from './context/dish.context';
import OrderCompleted from './components/OrderCompleted';
import Orders from './components/Orders';

export default function App() {
	return (
		<DishProvider>
			<Header />
			<Routes>
				<Route path='/' element={<MainComponent />} />
				<Route path='/cart' element={<Cart />} />
				<Route path={`/category/:categoryName`} element={<CategoryPage />} />
				<Route path='check-out-address' element={<CheckOutAddress />} />
				<Route path='order-completed' element={<OrderCompleted />} />
				<Route path='orders' element={<Orders />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</DishProvider>
	);
}
