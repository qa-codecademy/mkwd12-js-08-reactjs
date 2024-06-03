interface ChildProps {
  message: string;
  bucket: string[];
}

export const Child = (props: ChildProps) => {
  console.log(props);
  return (
    <div>
      <h3>Hello from child</h3>
      <p>{props.message}</p>
    </div>
  );
};
