import "./Container.css";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = (props: ContainerProps) => {
  const { children } = props;
  // children are the elements/components that we gonna specify/include in between the opening and closing Main tags
  return <div className="mainContainer">{children}</div>;
};
