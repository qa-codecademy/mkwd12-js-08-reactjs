import { useRef, useState } from 'react';

export function RefExample() {
	const [count, setCount] = useState(0);
	const countRef = useRef(0);
	const heading = useRef(null);

	const handleClick = () => {
		setCount(count + 1);
		countRef.current += 1;

		console.log(document.querySelector('h1'));
		console.log(heading);
	};

	return (
		<div>
			<h1 ref={heading}>Ref Example</h1>
			<button onClick={handleClick}>Increment Count</button>
			<p>Count: {count}</p>
			<p>Count Ref: {countRef.current}</p>
		</div>
	);
}
