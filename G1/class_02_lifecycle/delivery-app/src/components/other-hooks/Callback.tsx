import { memo, useCallback, useState } from 'react';

const Button = memo(({ handleCountChange }) => {
	console.log('button rendered');
	return <button onClick={handleCountChange}>Increment count</button>;
});

export default function Callback() {
	const [count, setCount] = useState(0);

	const handleCountChange = useCallback(() => {
		// setCount(count + 1) same as the one below
		setCount(prevState => prevState + 1);
	}, []);

	console.log('Callback render');

	return (
		<div>
			<h1>useCallback Example</h1>
			<Button handleCountChange={handleCountChange} />
			<p>Count: {count}</p>
		</div>
	);
}
