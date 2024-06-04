import "./App.css";
import Button from "./Components/Button/Button";
import PersonInfo from "./Components/PersonInfo/PersonInfo";
import ProductList from "./Components/ProductList/ProductList";
import Footer from "./layout/Footer/Footer";
import Header, { NavbarLink } from "./layout/Header/Header";

function App() {
  const firstName = "Boris";
  const lastName = "Borisovski";

  console.log("App component called");

  const person = {
    firstName: "John",
    lastName: "Doe",
  };

  const isParagraphShown = true;

  const isFinished = false;

  const colors: string[] = [
    "lightgreen",
    "lightgray",
    "lightblue",
    "lightyellow",
    "lightcoral",
    "aliceblue",
  ];

  const appTitle = "React Starter App";

  const navbarLinks: NavbarLink[] = [
    {
      link: "/home",
      text: "Home",
    },
    {
      link: "/about-us",
      text: "About Us",
    },
    {
      link: "/products",
      text: "Products",
    },
    {
      link: "/contact",
      text: "Contact",
    },
  ];

  return (
    <div className="App">
      <Header appTitle={appTitle} navbarLinkData={navbarLinks} />
      <main className="main">
        {/* Rendering dynamic variables in JSX */}
        <h4>{firstName}</h4>
        <h4>{lastName}</h4>
        <div>
          <h4>{person.firstName}</h4>
          <h4>{person.lastName}</h4>
        </div>
        <button disabled={true}>Test</button>

        {/* Conditional rendering in JSX */}
        {isParagraphShown && (
          <p>
            <strong>I am shown </strong>
          </p>
        )}
        <div
          className="todo"
          style={{ backgroundColor: isFinished ? "lightgreen" : "lightpink" }}
        >
          Do the dishes
        </div>

        {/* Rendering lists in jsx */}
        <ul className="list">
          {colors.map((color, i) => (
            <li key={i} style={{ backgroundColor: color }}>
              {color}
            </li>
          ))}
        </ul>

        <ProductList />

        <PersonInfo firstName="John" lastName="Doe" />
        <PersonInfo firstName="Jane" lastName="Doe" bgColor="lightpink" />
        <PersonInfo firstName="Risto" lastName="Blazheski" />

        <Button text="Click Me" style={{ backgroundColor: "lightblue" }} />
        <Button text="Success" style={{ backgroundColor: "lightgreen" }} />
        <Button
          text="Error"
          style={{ backgroundColor: "red", color: "white" }}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
