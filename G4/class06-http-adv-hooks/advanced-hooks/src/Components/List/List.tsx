import { useEffect, useState } from "react";

interface ListProps {
  generateArray: () => number[];
}

function List({ generateArray }: ListProps) {
  const [indexArray, setIndexArray] = useState<number[]>([]);

  useEffect(() => {
    console.log("effect in list");
    setIndexArray(generateArray());
  }, [generateArray]);

  return (
    <p>
      <strong>{indexArray.join(", ")}</strong>
    </p>
  );
}

export default List;
