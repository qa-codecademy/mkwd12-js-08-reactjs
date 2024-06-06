import { useEffect } from "react";

interface ChildProps {
  message: string;
}
export const Child = (props: ChildProps) => {
  useEffect(() => {
    console.log("component did mount child");
  }, []);

  console.log("FROM CHILD");
  return (
    <div>
      <h1>Child component</h1>
      <p>{props.message}</p>
    </div>
  );
};
