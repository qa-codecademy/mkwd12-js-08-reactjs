import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Header, { NavLink } from "./Layout/Header/Header";
import ProductPage from "./Pages/ProductPage/ProductPage";

function App() {
  const appTitle = "E-Store App";

  const linkData: NavLink[] = [
    {
      text: "Home",
      path: "/home",
    },
    {
      text: "About Us",
      path: "/about-us",
    },
    {
      text: "Products",
      path: "/products",
    },
    {
      text: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className="App">
      <Header title={appTitle} linkData={linkData} />
      <main>
        <ProductPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
