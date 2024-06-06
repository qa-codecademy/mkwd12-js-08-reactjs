import { Component } from "react";

class Parent extends Component {
  constructor(props) {
    super(props);
    console.log("COSTRUCTOR PARENT");

    this.state = {
      message: "Initial message from parent.",
    };
  }

  //Executes after the render
  componentDidMount(): void {
    console.log("COMPONENT DID MOUNT PARENT");
    // Logic that I can execute on this moment of this LS of the component
    // fetch('some_url')
  }

  // Executes when a state of the component is changed or a prop is received
  componentDidUpdate(): void {
    console.log("COMPONENT DID UPDATE PARENT");
  }

  changeMessage = () => {
    this.setState({ message: "Updated message parent" });
  };

  componentWillUnmount(): void {
    console.log("COMPONENT WILL UNMOUNT");
  }

  render() {
    console.log("RENDER PARENT");
    return (
      <div>
        <h1>Class Component</h1>
        <p>{this.state.message}</p>
        <button onClick={this.changeMessage}>Click me</button>
      </div>
    );
  }
}

export default Parent;
