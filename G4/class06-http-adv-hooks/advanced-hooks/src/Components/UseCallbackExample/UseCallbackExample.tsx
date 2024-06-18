import { useCallback, useState } from "react";
import List from "../List/List";

const UseCallbackExample = () => {
  const [number, setNumber] = useState(0);
  const [bgColor, setBgColor] = useState("lightpink");

  const generateArray = useCallback(() => {
    console.log("gen array called");
    const result = [];

    for (let i = 0; i <= number; i++) {
      result.push(i);
    }

    return result;
  }, [number]);

  //   const generateArray = () => {
  //     console.log("gen array called");
  //     const result = [];

  //     for (let i = 0; i <= number; i++) {
  //       result.push(i);
  //     }

  //     return result;
  //   };

  return (
    <section style={{ backgroundColor: bgColor }}>
      <h1>useCallback</h1>
      <h2>{number}</h2>
      <button
        onClick={() => {
          setNumber(Math.floor(Math.random() * 100000));
        }}
      >
        Change Number
      </button>
      <button
        onClick={() => {
          setBgColor(prevColor =>
            prevColor === "lightpink" ? "lightyellow" : "lightpink"
          );
        }}
      >
        Change Backgroud
      </button>
      <List generateArray={generateArray} />
    </section>
  );
};

export default UseCallbackExample;
