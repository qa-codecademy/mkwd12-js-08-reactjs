import { Child } from "./Child";

export const Parent = () => {
  const bucketList = ["Banana", "Avocado", "Milk"];
  return (
    <div>
      <h1>Hello from parent</h1>
      <Child message="I am prop passed from parent 1" bucket={bucketList} />
      {/* NOTE: Invoking <Child /> multiple times will create instance for each invokation */}
      {/* <Child message="I am prop passed from parent 2" bucket={[]} />
      <Child message="I am prop passed from parent 3" bucket={["Bread"]} />
      <Child message="I am prop passed from parent 4" bucket={["Cheese"]} /> */}
    </div>
  );
};
