import { memo } from "react";

interface CounterControllsProps {
  increment: () => void;
  decrement: () => void;
}

export const CounterControlls = memo((props: CounterControllsProps) => {
  console.log("COUNTER CONTROLLS COMPONENT");
  const { increment, decrement } = props;
  return (
    <>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
});
