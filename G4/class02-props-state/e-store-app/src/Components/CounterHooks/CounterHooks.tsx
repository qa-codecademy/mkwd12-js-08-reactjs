import { useState } from "react";
import Button from "../Button/Button";
import "./CounterHooks.css";

interface CounterHooksProps {
  title: string;
}

function CounterHooks({ title }: CounterHooksProps) {
  console.log("counter hooks rerendered");

  const [count, setCount] = useState(0);

  const add = () => {
    console.log("add clicked");

    if (count === 10) return;

    setCount(prev => prev + 1);
  };
  const remove = () => {
    console.log("remove clicked");

    if (count <= 0) return;

    setCount(prev => prev - 1);
  };

  return (
    <div className="counter">
      <div>{title}</div>
      <div className="counter-display">{count}</div>
      <div className="counter-controls">
        <Button text="Remove 1" onBtnClick={remove} />
        <Button text="Add 1" onBtnClick={add} />
      </div>
    </div>
  );
}

export default CounterHooks;
