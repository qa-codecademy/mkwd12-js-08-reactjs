Sure, here's the detailed explanation along with the code examples for the concepts you taught:

# React with TypeScript: Concepts and Code Examples

## Functional Components

Functional components are the simplest way to create components in React. They are JavaScript functions that return JSX.

```tsx
import React from "react";

const Greeting = () => {
  return <h1>Hello from react!</h1>;
};

export default Greeting;
```

## JSX and Introduction to JSX

JSX stands for JavaScript XML. It allows us to write HTML inside JavaScript. JSX makes the code easier to read and write. You can also use JavaScript variables (or other Javacript/Typescript code ) inside JSX.

```tsx
import React from "react";

const Welcome = () => {
  const message = "Welcome to React with TypeScript!";
  const greeting = (fullName: string) => {
    return `Hello ${fullName}`;
  };
  return (
    <>
      <div>{message}</div>
      <p>{greeting("Bob Bobski")}</p>
    </>
  );
};

export default Welcome;
```

## Inline CSS

Inline CSS in React is used to style components directly using the `style` attribute. The value of the `style` attribute is a JavaScript object.

```tsx
import React from "react";

const StyledComponent = () => {
  const divStyle = {
    color: "blue",
    backgroundColor: "lightgray",
    padding: "10px",
  };

  return <div style={divStyle}>This is a styled component</div>;
};

export default StyledComponent;
```

## Importing External CSS Files and Using Classes

We can also use external CSS files to style our components. We use the `className` attribute to apply CSS classes to our elements.

**App.css**

```css
.text {
  color: green;
  background-color: yellow;
  padding: 10px;
}
```

**App.tsx**

```tsx
import React from "react";
import "./App.css";

const ClassStyledComponent = () => {
  return (
    <div className="text">
      This component is styled with an external CSS file
    </div>
  );
};

export default ClassStyledComponent;
```

## Parent and Child Components

A parent component can contain child components and pass data to them using props.

**ParentComponent.tsx**

```tsx
import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent: React.FC = () => {
  return (
    <div>
      <h1>This is the parent component</h1>
      <ChildComponent message="Hello from the parent component!" />
    </div>
  );
};

export default ParentComponent;
```

**ChildComponent.tsx**

```tsx
import React from "react";

interface ChildComponentProps = {
  message:string
}

// Note: Here in the () of the function we are destructuring the props property :)
const ChildComponent = ({ message }: ChildComponentProps) => {
  return <div>{message}</div>;
};

export default ChildComponent;
```

## Passing Props

Props are used to pass data from one component to another. In TypeScript, we can define the types of props a component expects.

**Greeting.tsx**

```tsx
import React from "react";

interface GreetingProps {
  name: string;
}
const Greeting = ({ name }: GreetingProps) => {
  return <h1>Hello, {name}!</h1>;
};

export default Greeting;
```

**App.tsx**

```tsx
import React from "react";
import Greeting from "./Greeting";

const App = () => {
  return (
    <div>
      <Greeting name="John" />
    </div>
  );
};

export default App;
```
