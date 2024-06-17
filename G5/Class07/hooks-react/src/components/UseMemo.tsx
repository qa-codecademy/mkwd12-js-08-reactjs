import { useMemo, useState } from "react";

const complexCalculation = (numberValue: number) => {
  console.log("some complex calculation");

  let longNumber = 0;

  for (let i = 0; i < 2000000000; i++) {
    longNumber += i;
  }

  return longNumber * numberValue;
};

export const UseMemoExample = () => {
  const [number, setNumber] = useState(2);
  const [text, setText] = useState("");

  const handleSetNumber = () => {
    const randomNumber = Math.floor(Math.random() * 10);

    setNumber(randomNumber);
  };

  const handleChangeText = (value: string) => {
    setText(value);
  };
  // *** WITHOUT useMemo
  const result = useMemo(() => complexCalculation(number), [number]);
  console.log("Result of complex calculation is:", result);

  return (
    <div>
      <h2>UseMemo Example</h2>
      <p>{text}</p>
      <button onClick={handleSetNumber}>Change Number</button>
      <input type="text" onChange={(e) => handleChangeText(e.target.value)} />
    </div>
  );
};
