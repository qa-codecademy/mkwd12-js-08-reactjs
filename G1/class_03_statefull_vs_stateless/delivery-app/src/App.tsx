import { useState } from 'react';
import Header from './components/Header';
import MainComponent from './components/MainContainer';
import { Category } from './common/types/category.enum';

export default function App() {
	// null is homepage
	const [selectedCategory, setSelectedCategory] = useState<Category | null>(
		null
	);

	return (
		<div>
			<Header selectCategory={setSelectedCategory} />
			{selectedCategory === null ? (
				<MainComponent />
			) : (
				<div>{selectedCategory} Page</div>
			)}
		</div>
	);
}
