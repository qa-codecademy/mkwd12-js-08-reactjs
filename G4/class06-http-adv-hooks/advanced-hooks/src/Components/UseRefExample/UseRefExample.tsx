import { useRef, useState } from "react";

export const UseRefExample = () => {
  console.log("component rerender");

  const [rerenderToggle, setRerenderToggle] = useState(false);
  const [count, setCount] = useState(0);

  let rerenderCount = 0;
  const rerenderCountRef = useRef(0);

  const intervalIdRef = useRef(0);

  const inputRef = useRef<HTMLInputElement>(null);

  const addToRerenderCount = () => {
    rerenderCount++;
    rerenderCountRef.current++;
    console.log("Basic count", rerenderCount);
    console.log("Ref count", rerenderCountRef.current);
    setRerenderToggle(prev => !prev);
  };

  const startStopwatch = () => {
    intervalIdRef.current = setInterval(() => {
      console.log("interval called");
      setCount(prevCount => prevCount + 1);
    }, 1000);
  };

  const resetStopwatch = () => {
    clearInterval(intervalIdRef.current);
    setCount(0);
  };

  return (
    <section>
      <h1>useRef</h1>
      <h2>{rerenderToggle}</h2>
      <div>
        <button onClick={() => addToRerenderCount()}>Rerender Component</button>
      </div>
      <div>
        <div>
          <h2>Count: {count}</h2>
          <button onClick={startStopwatch}>START</button>
          <button onClick={resetStopwatch}>END</button>
        </div>
      </div>
      <div>
        <input type="text" ref={inputRef} />
        <button
          onClick={() => {
            inputRef.current?.focus();
            // const htmlInputEL = inputRef.current as HTMLInputElement;
            // htmlInputEL.focus();
          }}
        >
          Focus Input
        </button>
      </div>
    </section>
  );
};
