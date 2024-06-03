import { useState } from 'react';
import './Toggle.css';

export default function Toggle() {
	const [isVisible, setIsVisible] = useState(true);

	const toggleMessage = () => {
		console.log('Toggle message');

		// if (isVisible) {
		// 	setIsVisible(false);
		// } else {
		// 	setIsVisible(true);
		// }

		setIsVisible(!isVisible);
	};

	return (
		<div>
			<h2 className='border-red'>Toggle Visibility</h2>

			<button onClick={toggleMessage}>
				{isVisible ? 'Hide' : 'Show'} Message
			</button>
			{isVisible && <p>This is a toggleable message!</p>}
			{isVisible ? <p>This is a toggleable message!</p> : null}
		</div>
	);
}

// {isVisible ? (
//   <button onClick={toggleMessage}>Hide Message</button>
// ) : (
//   <button onClick={toggleMessage}>Show Message</button>
// )}
