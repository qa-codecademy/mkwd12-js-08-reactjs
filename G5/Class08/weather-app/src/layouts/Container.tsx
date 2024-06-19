import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = (props: ContainerProps) => {
  return (
    <main
      style={{
        backgroundColor: "#f4f4f4",
        padding: "0 30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      {props.children}
    </main>
  );
};

export default Container;
