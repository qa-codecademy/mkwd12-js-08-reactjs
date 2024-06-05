import { useState } from "react";

export const EventsExamples = () => {
  // [name of variable, function that will change the value of the state variable]
  const [count, setCount] = useState(0); // the value in useState(0) is the default value of the state variable count

  const handleIncrement = () => {
    console.log("Button increment is clicked");

    setCount(count + 1);
    console.log(count);
  };

  const handleDecrement = (message: string) => {
    console.log("Button decrement is clicked " + message);

    setCount(count - 1);
    console.log(count);
  };

  const handleChange = (value: string) => {
    console.log(`${value}`);
  };
  return (
    <section>
      <h2>Events examples</h2>
      <p>Count is: {count}</p>
      {/* 1st approach */}
      <button onClick={handleIncrement}>Increment</button>
      {/* 2nd approch */}
      <button onClick={() => handleDecrement("decrement message")}>
        Decrement
      </button>

      <hr />

      <input
        type="text"
        placeholder="Write something"
        onChange={(event) => handleChange(event.target.value)}
      />
    </section>
  );
};
