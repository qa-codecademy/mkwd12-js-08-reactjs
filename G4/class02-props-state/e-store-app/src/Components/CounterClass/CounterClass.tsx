import React from "react";
import Button from "../Button/Button";

interface CounterClassProps {
  title: string;
}

export class CounterClass extends React.Component<CounterClassProps> {
  // this must be called state in order for react to know that it is a dynamic property that can be changed with user input
  state: { count: number } = {
    count: 0,
  };

  constructor(props: CounterClassProps) {
    super(props);
  }

  add() {
    this.setState((prevState: { count: number }) => {
      if (prevState.count === 10) return prevState;

      return {
        count: prevState.count + 1,
      };
    });
  }

  remove() {
    this.setState((prevState: { count: number }) => {
      if (prevState.count <= 0) return prevState;

      return {
        count: prevState.count - 1,
      };
    });
  }

  render() {
    console.log("Render called");

    return (
      <div className="counter">
        <div>{this.props.title}</div>
        <div className="counter-display">{this.state.count}</div>
        <div className="counter-controls">
          <Button text="Remove 1" onBtnClick={() => this.remove()} />
          <Button text="Add 1" onBtnClick={() => this.add()} />
        </div>
      </div>
    );
  }
}
