import { useState } from 'react';
import Child from './Child';

export default function InputHandler() {
	const [inputValue, setInputValue] = useState('test');

	return (
		<div>
			<h2>Input Handler</h2>
			<input
				type='text'
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
			/>
			{/* <p>Current Value: {inputValue}</p> */}
			<Child message={inputValue} otherMessage={'ne e bitno'} />
		</div>
	);
}
