import { useEffect, useState } from 'react';
import Child from './Child';

export default function Parent() {
	const [showChild, setShowChild] = useState(true);
	const [parentData, setParentData] = useState('Parent Data');

	// only one execution on mounting
	useEffect(() => {
		console.log('Parent componentDidMount');

		return () => {
			console.log('Parent componentWillUnmount');
		};
	}, []);

	// triggers each change VERY DANGEROUS
	useEffect(() => {
		console.log('Parent componentDidUpdate');
	});

	// triggers when parentData is changed
	useEffect(() => {
		console.log('Parent data has been changed');
	}, [parentData]);

	console.log('Parent render');
	return (
		<div>
			<h1>Parent Component</h1>
			<button onClick={() => setShowChild(!showChild)}>Toggle Child</button>
			<button
				onClick={() => setParentData('Updated Parent Data' + Math.random())}>
				Change Parent Data
			</button>
			<button onClick={() => console.log('No re-render of Parent Component')}>
				No Render Change
			</button>
			{showChild && <Child parentData={parentData} />}
		</div>
	);
}
