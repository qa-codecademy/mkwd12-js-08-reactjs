// import { Fragment } from 'react';
import { useState } from 'react';

export default function Counter() {
	// let count = 1;
	const [count, setCount] = useState(1);

	const incrementCount = () => {
		console.log('increment clicked');
		console.log('count before', { count });
		setCount(count + 1);
		console.log('count after', { count });
	};

	const decrementCount = () => {
		console.log('decrement clicked');
		setCount(count - 1);
	};

	return (
		<>
			<h2>Counter</h2>
			<p>Count: {count}</p>
			<button onClick={incrementCount}>Increment</button>
			<button onClick={decrementCount}>Decrement</button>
		</>
	);
}

document
	.getElementById('nesto')
	?.addEventListener('click', e => console.log(e));
