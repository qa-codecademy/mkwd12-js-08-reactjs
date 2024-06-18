import { useMemo, useState } from "react";

const longCalculation = (num: number) => {
  for (let i = 0; i < 2000000000; i++) {
    if (i < 0) console.log(i);
  }

  return num * num;
};

export const UseMemoExample = () => {
  const [number, setNumber] = useState(0);
  const [bgColor, setBgColor] = useState("lightblue");

  const multipliedNumber = useMemo(() => longCalculation(number), [number]);

  //   const multipliedNumber = longCalculation(number);

  return (
    <section style={{ backgroundColor: bgColor }}>
      <h1>useMemo</h1>
      <h2>{number}</h2>
      <h2>{multipliedNumber}</h2>
      <button
        onClick={() => {
          setNumber(Math.floor(Math.random() * 100));
        }}
      >
        Change Number
      </button>
      <button
        onClick={() => {
          setBgColor(prevColor =>
            prevColor === "lightblue" ? "lightgreen" : "lightblue"
          );
        }}
      >
        Change Background
      </button>
    </section>
  );
};
