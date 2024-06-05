import { useState, useEffect } from "react";
import { Child } from "./Child";

const Parent = () => {
  const [message, setMessage] = useState("Initial message from parent");
  const [userInput, setUserInput] = useState("");

  // COMPONENT DID MOUNT
  // WILL EXECUTE ONLY ONCE AFTER THE COMPONENT IS MOUNTED!!
  useEffect(() => {
    console.log("COMPONENT DID MOUNT PARENT");
    // api call to retrieve my trips

    // COMPONENT WILL UNMOUNT
    return () => {
      console.log("Component will unmount");
    };
  }, []);

  // COMPONENT DID UPDATE
  // WILL EXECUTE AFTER THE COMPONENT IS INITED AND ON EACH UPDATE (CHANGE OF STATE)
  useEffect(() => {
    console.log("COMPONENT DID UPDATE w/o DEPS ARRAY");
  });

  // COMPONENT DID UPDATE
  useEffect(() => {
    console.log("COMPONENT DID UPDATE WITH userInput VALUE IN DEPS ARRAY");
  }, [userInput]);

  const changeMessage = () => {
    setMessage("Updated message from parent");
  };

  const changeUserInput = (value: string) => {
    setUserInput(value);
  };

  return (
    <>
      <div>
        <h1>{message}</h1>
        <p>{userInput}</p>

        <button onClick={changeMessage}>Change Parent Message</button>
        <input
          type="text"
          onChange={(event) => changeUserInput(event.target.value)}
        />
      </div>

      <Child message="Message that came from parent" />
    </>
  );
};

export default Parent;
