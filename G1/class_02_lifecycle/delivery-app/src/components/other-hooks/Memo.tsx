import { useMemo, useState } from 'react';

export default function MemoExample() {
	const [count, setCount] = useState(0);
	const [input, setInput] = useState('');

	const expensiveCalculation = useMemo(() => {
		console.log('Calculating...');
		return count * 2;
	}, [count]);

	console.log('Render Memo Component');
	return (
		<div>
			<h1>memo Example</h1>
			<input
				type='text'
				value={input}
				onChange={e => setInput(e.target.value)}
				placeholder='Type Something...'
			/>
			<div>Expensive Calculation Result: {expensiveCalculation}</div>
			<button onClick={() => setCount(count + 1)}>Increment Count</button>
			<p>Count: {count}</p>
		</div>
	);
}
