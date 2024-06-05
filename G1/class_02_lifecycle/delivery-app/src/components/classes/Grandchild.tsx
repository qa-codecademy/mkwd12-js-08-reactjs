import { Component } from 'react';

export class Grandchild extends Component {
	constructor(props) {
		super(props);
		console.log('Grandchild constructor');

		this.state = {
			grandchildData: 'Grandchild data',
		};
	}

	static getDerivedStateFromProps(props, state) {
		console.log('Child getDerivedStateFromProps', { props, state });
		return null;
	}

	componentDidMount() {
		console.log('Grandchild componentDidMount');
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('Grandchild shouldComponentUpdate');
		return true;
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('Grandchild getSnapshotBeforeUpdate');
		return null;
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('Grandchild componentDidUpdate');
	}

	componentWillUnmount() {
		console.log('Grandchild componentWillUnmount');
	}

	changeGrandchildData = () => {
		this.setState({ grandchildData: 'Updated grandchild data' });
	};

	noRenderChange = () => {
		console.log(
			'This will not trigger a re-render of the Grandchild component'
		);
	};

	render() {
		console.log('Grandchild render');
		return (
			<div>
				<h3>Grandchild Component</h3>
				<p>Data from Child: {this.props.childData}</p>
				<button onClick={this.changeGrandchildData}>
					Change Grandchild data
				</button>
				<button onClick={this.noRenderChange}>No Render Change</button>
			</div>
		);
	}
}
