import { Component } from 'react';
import { Grandchild } from './Grandchild';

export class Child extends Component {
	constructor(props) {
		super(props);
		console.log('Child constructor');
		this.state = {
			childData: 'Child Data',
		};
	}

	static getDerivedStateFromProps(props, state) {
		console.log('Child getDerivedStateFromProps', { props, state });
		return null;
	}

	componentDidMount() {
		console.log('Child componentDidMount');
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('Child shouldComponentUpdate');
		return true;
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('Child getSnapshotBeforeUpdate');
		return null;
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('Child componentDidUpdate');
	}

	componentWillUnmount() {
		console.log('Child componentWillUnmount');
	}

	// Start of custom methods

	changeChildData = () => {
		this.setState({
			childData: 'Updated Child Data',
		});
	};

	noRenderChange = () => {
		console.log('This will not trigger rerender in Child');
	};

	// End of custom methods

	render() {
		console.log('Child Render');
		return (
			<div>
				<h2>Child Component</h2>
				<button onClick={this.changeChildData}>Change Child Data</button>
				<button onClick={this.noRenderChange}>No Render Change</button>
				<Grandchild childData={this.state.childData} />
			</div>
		);
	}
}
