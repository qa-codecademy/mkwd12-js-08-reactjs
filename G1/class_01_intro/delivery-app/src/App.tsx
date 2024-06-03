import './App.css';
import CategoryList from './components/CategoryList';
import Counter from './components/Counter';
import InputHandler from './components/InputHandler';
import Parent from './components/Parent';
import Toggle from './components/Toggle';

function App() {
	// return <Counter />;
	// return <Parent />;
	// return <CategoryList />;
	return (
		<>
			<InputHandler />
			<Toggle />
		</>
	);
}

export default App;
