import { useEffect, useState } from 'react';

export default function Grandchild({ childData }) {
	const [grandchildData, setGrandchildData] = useState('Gradchild Data');

	useEffect(() => {
		console.log('Grandchild componentDidMount');

		return () => {
			console.log('Grandchild componentWillUnmount');
		};
	}, []);

	useEffect(() => {
		console.log('Grandchild componentDidUpdate');
	});

	console.log('Grandchild render');
	return (
		<div>
			<h3>Grandchild Component</h3>
			<p>Child Data: {childData}</p>
			<p>Grandchild Data: {grandchildData}</p>
			<button onClick={() => setGrandchildData('Updated Grandchild Data')}>
				Change Grandchild Data
			</button>
			<button onClick={() => console.log('Grandchild rerender not triggered')}>
				No Render Change
			</button>
		</div>
	);
}
