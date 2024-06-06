import { useEffect, useState } from 'react';
import Grandchild from './Grandchild';

export default function Child({ parentData }) {
	const [childData, setChildData] = useState('Child Data');

	useEffect(() => {
		console.log('Child componentDidMount');

		return () => {
			console.log('Child componentWillUnmount');
		};
	}, []);

	useEffect(() => {
		console.log('Child componentDidUpdate');
	});

	console.log('Child render');
	return (
		<div>
			<h2>Child Component</h2>
			<p>Parent Data: {parentData}</p>
			<button onClick={() => setChildData('Updated child data')}>
				Change Child Data
			</button>
			<button onClick={() => console.log('no rednder change')}>
				No Render Change
			</button>
			<Grandchild childData={childData} />
		</div>
	);
}
