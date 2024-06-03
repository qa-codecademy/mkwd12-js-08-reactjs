const Child = ({ message, otherMessage }) => {
	console.log('Child rerender');
	return (
		<div>
			<h2>Child</h2>
			<p>The message: {message}</p>
			<p>The other message: {otherMessage}</p>
		</div>
	);
};

export default Child;
