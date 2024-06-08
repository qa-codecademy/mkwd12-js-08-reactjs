import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import { NavLink } from "./models/core.model";

function App() {
  const navbarLinksData: NavLink[] = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/products",
      text: "Products",
    },
    {
      path: "/contact",
      text: "Contact",
    },
  ];

  return (
    <div className="App">
      <Header linkData={navbarLinksData} title="E-Store App" />
      <main>
        <ProductsPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
